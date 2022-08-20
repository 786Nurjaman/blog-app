import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as mongoose from 'mongoose'
import { getEnvironment } from './environments/env';
import UserRouter from './routers/UserRouter';
import PostRouter from './routers/PostRouter';
import CommentRouter from './routers/CommentRouter';
import { Jobs } from './jobs/jobs';


export class Server {
    public app: express.Application = express();
    constructor() {
        this.setConfiguration();
        this.setRoutes();
        this.error404Handler();
        this.handleErrors();
    }
    setConfiguration() {
        this.connectMongodb();
        this.configureBodyParser();
        Jobs.runRequiredJobs();
    }
    connectMongodb() {
        const dbUrl = getEnvironment().db_url;
        mongoose.connect(dbUrl).then(() => {
            console.log('mongodb is connected')
        })
    }
    configureBodyParser() {
        this.app.use(bodyParser.urlencoded({ extended: true }))
    }
    setRoutes() {
        this.app.use('/src/uploads', express.static('src/uploads'));
        this.app.use('/api/user', UserRouter);
        this.app.use('/api/post', PostRouter);
        this.app.use('/api/comment', CommentRouter);
    }

    error404Handler() {
        this.app.use((req, res) => {
            res.status(404).json({
                message: "NOT_FOUND",
                success: false
            })
        })
    }

    handleErrors() {
        this.app.use((error, req, res, next) => {
            const errorStatus = req.errorStatus || 500;
            res.status(errorStatus).json({
                message: error.message || 'Somethis Went Wrong. Please Try Again',
                status_code: errorStatus
            })
        })
    }
}