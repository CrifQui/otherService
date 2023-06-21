import { Response, NextFunction } from 'express';
import { validateTokenRequest } from '../api/authRequests';
import { AuthenticatedRequest } from '../types';
export const authMiddleware = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
        res.status(401).json({ message: 'Authetication is required' });
    }
    const token = authHeader?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'invalid token' })
    }
    const user = await validateTokenRequest(token);
    if (!user.id) {
        return res.status(400).json({ message: 'invalid token' });
    }
    req.userId = user.id
    next()
}

