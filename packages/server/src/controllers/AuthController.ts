import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import User from '../models/User';
import Token from '../models/Token';
import authView from '../views/auth_view';
import userAuthView from '../views/user_auth_view';
import dotenv from 'dotenv';
import { IsNull } from 'typeorm';

dotenv.config();

const { JWT_TOKEN = '' } = process.env;

interface Req extends Request {
    data?: {
        user: User,
        token: string
        tokenOld: string
        iat: number,
        exp: number
    }
}

export default class AuthController {

    async login(request: Request, response: Response) {

        const { email, password } = request.body;
        const user: User | undefined = await User.findOne({ email });
        if (!user) return response.status(403).send('user not found');

        const validPassword: Boolean = await user.comparePassword(password, user.password);

        if (!validPassword) return response.status(403).send('password invalid');

        const token = await generateAccessToken({ user : userAuthView.render(user) });

        const insertToken: Token = await Token.store(user.id, token)

        return response.set('x-authorization', insertToken.token).json(authView.render(user, ''));
    }
    async verifyAuth(request: Req, response: Response, next: NextFunction) {

        const bearerHeader = getToken(request);

        if (typeof bearerHeader === 'undefined') return response.sendStatus(403);
        const bearerToken = bearerHeader.split(' ')[1];

        jwt.verify(bearerToken, JWT_TOKEN, async (err, data:any) => {
            if (err) return response.sendStatus(403);

            if (!await Token.findOne({ token: bearerToken, deletedAt: IsNull() })) return response.sendStatus(403)

            const acecssToken = await generateAccessToken({ user: data.user });
            Token.store(data.user.id, acecssToken)

            data.token = acecssToken;
            data.tokenOld = bearerToken;

            request.data = data;

            next();
        });

    }

    refreshToken(request: Req, response: Response) {
        return response.set('x-authorization', request.data?.token).sendStatus(200)
    }

    async logout(request: Request, response: Response) {

        const token = getToken(request);
        if(token === undefined) return response.sendStatus(401)

        const result = await Token.findOne({token: token.split(' ')[1], deletedAt: IsNull()})

        if(!result){
            return response.sendStatus(401)
        }

        await Token.softRemove(result);

        return response.sendStatus(200);
    }

    getAuth(request: Request, response: Response) {
        const token = getToken(request);
        if(token === undefined) return response.sendStatus(401)

        const auth = jwt.decode(token.split(' ')[1], { complete: true });

        return response.json({ auth });
    }
}

// Get token
const getToken = (request: Request): string | undefined => {
    return request.body.token || request.query.token || request.headers['x-authorization'];
}

async function generateAccessToken(user: object | String | Buffer): Promise<string> {

    const token = jwt.sign(user, JWT_TOKEN, { expiresIn: '1d' });
    if (await Token.findOne({ 'token': token })) {
        return generateAccessToken(user);
    }
    return token;
}