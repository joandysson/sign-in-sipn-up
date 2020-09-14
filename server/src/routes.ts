import { Router } from 'express';

import Auth from './services/auth';

const router = Router();

router.get('/', (request, response) => {
    response.send("API V1 | Auth JWT ");
});

// routes Auth
router.post('/login', Auth.login)
router.post('/authentication', Auth.authentication);
router.post('/token', Auth.refreshToken);
router.get('/auth', Auth.getAuth);
router.delete('/logout', Auth.logout);

export default router;