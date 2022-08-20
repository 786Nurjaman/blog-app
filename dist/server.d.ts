import * as express from 'express';
export declare class Server {
    app: express.Application;
    constructor();
    setConfiguration(): void;
    connectMongodb(): void;
    configureBodyParser(): void;
    setRoutes(): void;
    error404Handler(): void;
    handleErrors(): void;
}
