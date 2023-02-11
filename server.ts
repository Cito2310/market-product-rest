import express from "express";
import cors from "cors";

import { dbConnection } from './database/config';

import { routeUser } from './users_api/userRoutes';
import { routeProduct } from './products_api/productRoutes';

export class Server {
    private app = express()
    private paths = {
        user : "/api/user",
        product: "/api/product"
    }

    constructor(){
        this.middlewares();
        this.routes();
        this.connectDB();
    }

    private routes() {
        this.app.use( this.paths.user, routeUser )
        this.app.use( this.paths.product, routeProduct )
    }

    private connectDB() {dbConnection()}

    private middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
    }

    public listen() { this.app.listen( process.env.PORT ) }
}