import { Response } from 'express';

export const responseSender = (
    res: Response,
    statusCode: number,
    message: string,
    data: any = null,
) => {
    res.status(statusCode).json({
        status: statusCode,
        message,
        data,
    });
};
