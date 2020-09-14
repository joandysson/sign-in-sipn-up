import User from '../models/User';
import { Request, Response } from 'express';

const index = (req:Request, res:Response) => {
    return res.send(User.all);
}

export {
    index
}