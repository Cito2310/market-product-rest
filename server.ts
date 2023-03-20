import express from "express";
import cors from "cors";

import { dbConnection } from './database/config';

import { routeUser } from './users_api/userRoutes';
import { routeProduct } from './products_api/productRoutes';
import { routeCategory } from './category_api/categoryRoutes';

export class Server {
    private app = express()
    private paths = {
        user : "/api/user",
        product: "/api/product",
        category: "/api/category",
    }

    constructor(){
        this.middlewares();
        this.routes();
        this.connectDB();
    }

    private routes() {
        this.app.use( this.paths.user, routeUser )
        this.app.use( this.paths.product, routeProduct )
        this.app.use( this.paths.category, routeCategory )
    }

    private connectDB() {dbConnection()}

    private middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
    }

    public listen() { this.app.listen( process.env.PORT ) }
}