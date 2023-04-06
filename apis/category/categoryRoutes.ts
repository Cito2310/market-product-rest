import { Router } from "express";
import { check } from "express-validator";

import { 
    createCategory, 
    deleteCategoriesAndBrand,
    getAllCategoriesAndBrand, 
    editBrandsToCategory,

} from './categoryControllers';

import { checkFields } from '../../middlewares/checkFields';
import { validateJWT } from '../../middlewares/validateJWT';
import * as validation from "../../helpers/validation";

export const routeCategory = Router();


// CATEGORY  CONTROLLERS
// POST - Route create Category
routeCategory.post("/", [
    validateJWT,

    check("category")
        .trim()
        .notEmpty().withMessage("category is required")
        .isString().withMessage("category not is string")
        .isLength({max: 16}).withMessage("category max length 16")
    ,

    check("brands")
        .optional()
        .notEmpty().withMessage("brands is required")
        .isArray({min: 1}).withMessage("brands need array with min one brand")
        .custom(validation.arrayContentOnlyString).withMessage("brands content item not string")
    ,

    checkFields
], createCategory)

// GET - Route get all categories and brand
routeCategory.get("/", [ validateJWT ], getAllCategoriesAndBrand)

// DELETE - Route delete Categories and Brand
routeCategory.delete("/:idCategory", [ validateJWT ], deleteCategoriesAndBrand)


// BRAND CONTROLLERS
// PUT - Route edit brands to category
routeCategory.put("/brand", [ 
    validateJWT,

    check("category")
        .trim()
        .notEmpty().withMessage("category is required")
        .isString().withMessage("category not is string")
        .isLength({max: 16}).withMessage("category max length 16")
    ,

    check("brands")
        .notEmpty().withMessage("brands is required")
        .isArray({min: 1}).withMessage("brands need array with min one brand")
        .custom(validation.arrayContentOnlyString).withMessage("brands content item not string")
    ,

    checkFields
], editBrandsToCategory)