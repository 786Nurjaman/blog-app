import { validationResult } from "express-validator/src/validation-result";
import * as Jwt from 'jsonwebtoken';
import { getEnvironment } from "../environments/env";

export class GlobalMiddleware {
    static checkError(req, res, next) {
        const error = validationResult(req);
        if (!error.isEmpty()) {
            next(new Error(error.array()[0].msg));
        } else {
            next();
        }
    }

    static async authenticate(req, res, next) {
        const authHeader = req.headers.authorization;
        const token = authHeader ? authHeader.slice(7, authHeader.length) : null;
        try {
            Jwt.verify(token, getEnvironment().jwt_secret, ((err, decoded) => {
                if (err) {
                    next(err)
                } else if (!decoded) {
                    req.errorStatus = 401;
                    next(new Error('User Not Authorised'))
                } else {
                    req.user = decoded;
                    next();
                }
            }))
        } catch (e) {
            req.errorStatus = 401;
            next(e)
        }
    }
}