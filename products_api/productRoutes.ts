import { Router } from "express";
import { check } from "express-validator";

import { checkFields } from '../middlewares/checkFields';
import { validateJWT } from '../middlewares/validateJWT';

import * as validation from "../helpers/validation";

import { changePriceProduct, createProduct, deleteProduct, editProduct, getProducts, getProductWithID } from './productControllers';

export const routeProduct = Router();


routeProduct.put("/",[
    validateJWT,

    checkFields
], changePriceProduct);


routeProduct.post("/",[
    validateJWT,

    checkFields
], createProduct);


routeProduct.delete("/",[
    validateJWT,

    checkFields
], deleteProduct);


routeProduct.put("/",[
    validateJWT,

    checkFields
], editProduct);


routeProduct.get("/",[
    validateJWT,

    checkFields
], getProducts);


routeProduct.get("/",[
    validateJWT,

    checkFields
], getProductWithID);