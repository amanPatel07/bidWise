import { NextFunction, Request, Response } from 'express';
import AppError from '../core/handler/appErrorHandler';

const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    const statusCode = err.statusCode || 500;
    const message = err instanceof AppError ? err.message : 'Internal Server Error';

    res.status(statusCode).json({
        status: 'error',
        statusCode,
        message,
    });
};

export default errorHandler;
