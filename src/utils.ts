import { Response } from "express";

export function simpleJsonErrorResponse(code: number, err: string, res: Response) {
    return res.status(code).json({error: err}).end();
}