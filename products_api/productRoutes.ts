import { Router } from "express";
import { check } from "express-validator";

import { checkFields } from '../middlewares/checkFields';
import { validateJWT } from '../middlewares/validateJWT';

import * as validation from "../helpers/validation";

import { changePriceProduct, createProduct, deleteProduct, editProduct, getProducts, getProductWithBarcode } from './productControllers';

export const routeProduct = Router();


routeProduct.put("/:barcode",[
    validateJWT,
    
    check("barcode", "product with this barcode not exist").trim().custom(validation.productExistBarcode),
    check("barcode", "barcode is required").trim().notEmpty(),
    check("barcode", "barcode not is string").trim().isString(),
    check("barcode", "barcode length can only be less than 50 characters").trim().isLength({max: 50}),

    check("price", "price is required").trim().notEmpty(),
    check("price", "price not is string").trim().isNumeric(),
    check("price", "price length can only be less than 32 characters").trim().isLength({max: 32}),

    checkFields
], changePriceProduct);


routeProduct.post("/",[
    validateJWT,

    check("barcode", "barcode is required").trim().notEmpty(),
    check("barcode", "barcode not is string").trim().isString(),
    check("barcode", "barcode length can only be less than 50 characters").trim().isLength({max: 50}),

    check("brand", "brand is required").trim().notEmpty(),
    check("brand", "brand not is string").trim().isString(),
    check("brand", "brand length can only be less than 24 characters").trim().isLength({max: 24}),

    check("category", "category is required").trim().notEmpty(),
    check("category", "category not is string").trim().isString(),
    check("category", "category length can only be less than 24 characters").trim().isLength({max: 24}),

    check("name", "name is required").trim().notEmpty(),
    check("name", "name not is string").trim().isString(),
    check("name", "name length can only be less than 32 characters").trim().isLength({max: 32}),

    check("price", "price is required").trim().notEmpty(),
    check("price", "price not is string").trim().isNumeric(),
    check("price", "price length can only be less than 32 characters").trim().isLength({max: 32}),

    check("size", "size is required").trim().notEmpty(),
    check("size", "size not is string").trim().isString(),
    check("size", "size length can only be less than 24 characters").trim().isLength({max: 24}),

    checkFields
], createProduct);


routeProduct.delete("/:barcode",[ 
    check("barcode", "product with this barcode not exist").trim().custom(validation.productExistBarcode),
    check("barcode", "barcode is required").trim().notEmpty(),
    check("barcode", "barcode not is string").trim().isString(),
    check("barcode", "barcode length can only be less than 50 characters").trim().isLength({max: 50}),

    validateJWT
], deleteProduct);


routeProduct.put("/:barcode",[
    validateJWT,
    
    check("barcode", "product with this barcode not exist").optional().trim().custom(validation.productExistBarcode),
    check("barcode", "barcode is required").optional().trim().notEmpty(),
    check("barcode", "barcode not is string").optional().trim().isString(),
    check("barcode", "barcode length can only be less than 50 characters").optional().trim().isLength({max: 50}),

    check("brand", "brand is required").optional().trim().notEmpty(),
    check("brand", "brand not is string").optional().trim().isString(),
    check("brand", "brand length can only be less than 24 characters").optional().trim().isLength({max: 24}),

    check("category", "category is required").optional().trim().notEmpty(),
    check("category", "category not is string").optional().trim().isString(),
    check("category", "category length can only be less than 24 characters").optional().trim().isLength({max: 24}),

    check("name", "name is required").optional().trim().notEmpty(),
    check("name", "name not is string").optional().trim().isString(),
    check("name", "name length can only be less than 32 characters").optional().trim().isLength({max: 32}),

    check("size", "size is required").optional().trim().notEmpty(),
    check("size", "size not is string").optional().trim().isString(),
    check("size", "size length can only be less than 24 characters").optional().trim().isLength({max: 24}),

    checkFields
], editProduct);


routeProduct.get("/",[
    validateJWT,
], getProducts);


routeProduct.get("/:barcode",[
    validateJWT,

    check("barcode", "product with this barcode not exist").trim().custom(validation.productExistBarcode),
    check("barcode", "barcode is required").trim().notEmpty(),
    check("barcode", "barcode not is string").trim().isString(),
    check("barcode", "barcode length can only be less than 50 characters").trim().isLength({max: 50}),

    checkFields
], getProductWithBarcode);