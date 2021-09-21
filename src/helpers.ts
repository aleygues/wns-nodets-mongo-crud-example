import { Request, Response, NextFunction } from 'express';

type ControllerFunction = (req: Request, res: Response, next: NextFunction) => Promise<void> | void;
// type ~= interface

// eslint-disable-next-line import/prefer-default-export
export const handleAsyncError = (handler: ControllerFunction) => async (req: Request, res: Response, next: NextFunction) => {
    try {
        await handler(req, res, next);
    } catch (err) {
        next(err);
    }
};
