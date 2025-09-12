import { NextFunction, Request, Response } from 'express';
import { HttpStatus } from '../shared/models/http-status-code.model';

const requireRole = (roles: string[]) => {
    return (req: Request, res: Response, next: NextFunction) => {
        // const userRole = req.headers['x-role'];
        const userRole = 'admin';

        if (!userRole) {
            const error = new Error('Role not provided');
            (error as any).statusCode = HttpStatus.UNAUTHORIZED;
            throw error;
        }

        if (!roles.includes(userRole.toString().toUpperCase())) {
            const error = new Error('Forbidden: Insufficient role');
            (error as any).statusCode = HttpStatus.FORBIDDEN;
            throw error;
        }

        next();
    };
};

export default requireRole;
