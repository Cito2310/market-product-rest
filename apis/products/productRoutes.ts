import { Router } from "express";
import { check } from "express-validator";

import { checkFields } from '../../middlewares/checkFields';
import { validateJWT } from '../../middlewares/validateJWT';

import * as checkValidationProduct from "../../helpers/checkValidationProduct";

import { createProduct, deleteProduct, editProduct, getProducts } from './productControllers';

export const routeProduct = Router();


routeProduct.post("/",[
    validateJWT,

    check("barcode").trim()
        .notEmpty().withMessage("barcode is required")
        .isString().withMessage("barcode not is string")
        .isLength({max: 20}).withMessage("barcode length can only be less than 20 characters")
        .custom(checkValidationProduct.uniqueBarcode).withMessage("barcode already exist")
    ,

    check("brand").trim()
        .notEmpty().withMessage("brand is required")
        .isString().withMessage("brand not is string")
        .isLength({max: 24}).withMessage("brand length can only be less than 24 characters")
    ,

    check("category").trim()
        .notEmpty().withMessage("category is required")
        .isString().withMessage("category not is string")
        .isLength({max: 24}).withMessage("category length can only be less than 24 characters")
    ,

    check("name").trim()
        .notEmpty().withMessage("name is required")
        .isString().withMessage("name not is string")
        .isLength({max: 32}).withMessage("name length can only be less than 32 characters")
    ,

    check("price").trim()
        .notEmpty().withMessage("price is required")
        .isNumeric().withMessage("price not is number")
        .isLength({max: 24}).withMessage("price length can only be less than 24 characters")
    ,

    check("size").trim()
        .notEmpty().withMessage("size is required")
        .isString().withMessage("size not is string")
        .isLength({max: 24}).withMessage("size length can only be less than 32 characters")
    ,

    checkFields
], createProduct);




routeProduct.delete("/:barcode",[ 
    validateJWT,

    check("barcode").trim()
        .notEmpty().withMessage("barcode is required")
        .isString().withMessage("barcode not is string")
        .isLength({max: 20}).withMessage("barcode legth can only be less than 20 characters")
        .custom(checkValidationProduct.productExistWithBarcode).withMessage("product with this barcode not exist")
    ,

    checkFields,
], deleteProduct);




routeProduct.put("/:barcode",[
    validateJWT,

    check("barcode").optional().trim()
        .notEmpty().withMessage("barcode is required")
        .isString().withMessage("barcode not is string")
        .isLength({max: 20}).withMessage("barcode length can only be less than 20 characters")
        .custom(checkValidationProduct.productExistWithBarcode).withMessage("product with this barcode not exist")
    ,

    check("brand").optional().trim()
        .notEmpty().withMessage("brand is required")
        .isString().withMessage("brand not is string")
        .isLength({max: 24}).withMessage("brand length can only be less than 24 characters")
    ,

    check("category").optional().trim()
        .notEmpty().withMessage("category is required")
        .isString().withMessage("category not is string")
        .isLength({max: 24}).withMessage("category length can only be less than 24 characters")
    ,

    check("name").optional().trim()
        .notEmpty().withMessage("name is required")
        .isString().withMessage("name not is string")
        .isLength({max: 32}).withMessage("name length can only be less than 32 characters")
    ,

    check("price").optional().trim()
        .notEmpty().withMessage("price is required")
        .isNumeric().withMessage("price not is number")
        .isLength({max: 24}).withMessage("price length can only be less than 24 characters")
    ,

    check("size").optional().trim()
        .notEmpty().withMessage("size is required")
        .isString().withMessage("size not is string")
        .isLength({max: 24}).withMessage("size length can only be less than 32 characters")
    ,
    
    checkFields
], editProduct);




routeProduct.get("/", getProducts);