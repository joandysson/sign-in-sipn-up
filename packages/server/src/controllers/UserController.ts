import User from '../models/User';
import UserView from '../views/user_view';
import { Request, Response } from 'express';

interface UserProps {
    name:string,
    email:string,
    password:string
}

interface Req extends Request {
    body: UserProps
}

const store = async (req:Req, res:Response) => {
    const { name, email, password } = req.body;

    const user: User | undefined =  await User.findOne({email});
    if(user) return res.json({message: 'user alraedy'});

    const insertUser: User = User.create({
        name,
        email,
        password
    });

    await insertUser.save();

    return res.status(201).json(UserView.render(insertUser));
}

export default {
    store
}