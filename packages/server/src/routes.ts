import { Router } from 'express';

import AuthController from './controllers/AuthController';
import User from './controllers/UserController';

const router = Router();

router.get('/', (request, response) => {
    response.send("API V1 | Auth JWT ");
});

const auth = new AuthController();

// routes Auth
router.post('/login', auth.login)
router.post('/refreshtoken', auth.verifyAuth, auth.refreshToken);
router.get('/auth', auth.getAuth);
router.delete('/logout', auth.logout);


// routes User
router.post('/register', User.store)

export default router;