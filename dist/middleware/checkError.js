"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalMiddleware = void 0;
const validation_result_1 = require("express-validator/src/validation-result");
const Jwt = require("jsonwebtoken");
const env_1 = require("../environments/env");
class GlobalMiddleware {
    static checkError(req, res, next) {
        const error = (0, validation_result_1.validationResult)(req);
        if (!error.isEmpty()) {
            next(new Error(error.array()[0].msg));
        }
        else {
            next();
        }
    }
    static authenticate(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const authHeader = req.headers.authorization;
            const token = authHeader ? authHeader.slice(7, authHeader.length) : null;
            try {
                Jwt.verify(token, (0, env_1.getEnvironment)().jwt_secret, ((err, decoded) => {
                    if (err) {
                        next(err);
                    }
                    else if (!decoded) {
                        req.errorStatus = 401;
                        next(new Error('User Not Authorised'));
                    }
                    else {
                        req.user = decoded;
                        next();
                    }
                }));
            }
            catch (e) {
                req.errorStatus = 401;
                next(e);
            }
        });
    }
}
exports.GlobalMiddleware = GlobalMiddleware;
