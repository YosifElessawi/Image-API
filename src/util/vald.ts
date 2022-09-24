import { NextFunction, Request, Response } from 'express';
import { validationResult } from 'express-validator';
// validation middleware checking for validation errors
const validaterequest = (
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    const result = validationResult(req);
    const errmssg: string[] = [];
    // Form errors message
    for (const iterator of result.array()) {
        errmssg.push(`${iterator.param} Error ${iterator.msg}`);
    }
    if (!result.isEmpty()) {
        res.send(errmssg);
        return;
    }
    next();
};
export default validaterequest;
