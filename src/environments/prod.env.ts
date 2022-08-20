import { Environment } from "./env";

export const ProdEnvironment: Environment    = {
    db_url: 'mongodb+srv://admin:87654321@cluster0.fgvpy.mongodb.net/nodetest?retryWrites=true&w=majority',
    jwt_secret: 'prodSecret'
}