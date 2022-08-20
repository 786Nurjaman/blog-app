"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const env_1 = require("./environments/env");
const UserRouter_1 = require("./routers/UserRouter");
const PostRouter_1 = require("./routers/PostRouter");
const CommentRouter_1 = require("./routers/CommentRouter");
const jobs_1 = require("./jobs/jobs");
class Server {
    constructor() {
        this.app = express();
        this.setConfiguration();
        this.setRoutes();
        this.error404Handler();
        this.handleErrors();
    }
    setConfiguration() {
        this.connectMongodb();
        this.configureBodyParser();
        jobs_1.Jobs.runRequiredJobs();
    }
    connectMongodb() {
        const dbUrl = (0, env_1.getEnvironment)().db_url;
        mongoose.connect(dbUrl).then(() => {
            console.log('mongodb is connected');
        });
    }
    configureBodyParser() {
        this.app.use(bodyParser.urlencoded({ extended: true }));
    }
    setRoutes() {
        this.app.use('/src/uploads', express.static('src/uploads'));
        this.app.use('/api/user', UserRouter_1.default);
        this.app.use('/api/post', PostRouter_1.default);
        this.app.use('/api/comment', CommentRouter_1.default);
    }
    error404Handler() {
        this.app.use((req, res) => {
            res.status(404).json({
                message: "NOT_FOUND",
                success: false
            });
        });
    }
    handleErrors() {
        this.app.use((error, req, res, next) => {
            const errorStatus = req.errorStatus || 500;
            res.status(errorStatus).json({
                message: error.message || 'Somethis Went Wrong. Please Try Again',
                status_code: errorStatus
            });
        });
    }
}
exports.Server = Server;
