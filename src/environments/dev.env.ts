import { Utils } from "../utils/utils";
import { Environment } from "./env";

Utils.dotenvConfigs();

export const DevEnvironment: Environment = {
    db_url: process.env.DB_URI,
    jwt_secret: process.env.JWT_SECRET_KEY
}