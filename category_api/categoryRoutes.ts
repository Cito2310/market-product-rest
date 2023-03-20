import { Router } from "express";
import { check } from "express-validator";

import { 
    addBrandToCategory,
    createCategory, 
    deleteBrandToCategory,
    deleteCategoriesAndBrand,
    getAllCategoriesAndBrand, 
    modifyBrandToCategory,
    modifyNameCategory,

} from './categoryControllers';

import { checkFields } from '../middlewares/checkFields';
import { validateJWT } from '../middlewares/validateJWT';
import * as validation from "../helpers/validation";

export const routeCategory = Router();


// CATEGORY  CONTROLLERS
// POST - Create Category
routeCategory.post("/", [
    validateJWT,

    check("category")
        .trim()
        .notEmpty().withMessage("category is required").bail()
        .isString().withMessage("category not is string").bail()
        .isLength({max: 16}).withMessage("category max length 16").bail()
    ,

    check("brands")
        .optional()
        .notEmpty().withMessage("brands is required").bail()
        .isArray({min: 1}).withMessage("brands need array with min one brand").bail()
        .custom(validation.arrayContentOnlyString).withMessage("brands content item not string").bail()
    ,

    checkFields
], createCategory)

// GET - Get all categories and brand
routeCategory.get("/", [ validateJWT ], getAllCategoriesAndBrand)

// DELETE - Delete Categories and Brand
routeCategory.delete("/", [ 
    validateJWT,

    check("category")
        .trim()
        .notEmpty().withMessage("category is required").bail()
        .isString().withMessage("category not is string").bail()
        .isLength({max: 16}).withMessage("category max length 16").bail()
    ,
    
    checkFields
], deleteCategoriesAndBrand)

// PUT - Modify Name Category
routeCategory.put("/", [
    validateJWT,

    check("oldCategory")
        .trim()
        .notEmpty().withMessage("oldCategory is required").bail()
        .isString().withMessage("oldCategory not is string").bail()
        .isLength({max: 16}).withMessage("oldCategory max length 16").bail()
    ,

    check("newCategory")
        .trim()
        .notEmpty().withMessage("newCategory is required").bail()
        .isString().withMessage("newCategory not is string").bail()
        .isLength({max: 16}).withMessage("newCategory max length 16").bail()
    ,

    checkFields
], modifyNameCategory)




// BRAND CONTROLLERS
// PUT - Modify one Brand to Category
routeCategory.put("/brand", [ 
    validateJWT,

    check("category")
        .trim()
        .notEmpty().withMessage("category is required").bail()
        .isString().withMessage("category not is string").bail()
        .isLength({max: 16}).withMessage("category max length 16").bail()
    ,

    check("newBrand")
        .notEmpty().withMessage("newBrand is required").bail()
        .isString().withMessage("newBrand not is string").bail()
        .isLength({max: 16}).withMessage("newBrand max length 16").bail()
    ,

    check("oldBrand")
        .notEmpty().withMessage("oldBrand is required").bail()
        .isString().withMessage("oldBrand not is string").bail()
        .isLength({max: 16}).withMessage("oldBrand max length 16").bail()
    ,

    checkFields
], modifyBrandToCategory)

// DELETE - Delete Brand to Category
routeCategory.delete("/brand", [
    validateJWT,

    check("category")
        .trim()
        .notEmpty().withMessage("category is required").bail()
        .isString().withMessage("category not is string").bail()
        .isLength({max: 16}).withMessage("category max length 16").bail()
    ,

    check("brands")
        .notEmpty().withMessage("brands is required").bail()
        .isArray({min: 1}).withMessage("brands need array with min one brand").bail()
        .custom(validation.arrayContentOnlyString).withMessage("brands content item not string").bail()
    ,

    checkFields
], deleteBrandToCategory)

// POST - Add Brand to Category
routeCategory.post("/brand", [
    validateJWT,

    check("category")
        .trim()
        .notEmpty().withMessage("category is required").bail()
        .isString().withMessage("category not is string").bail()
        .isLength({max: 16}).withMessage("category max length 16").bail()
    ,

    check("brands")
        .notEmpty().withMessage("brands is required").bail()
        .isArray({min: 1}).withMessage("brands need array with min one brand").bail()
        .custom(validation.arrayContentOnlyString).withMessage("brands content item not string").bail()
    ,

    checkFields
], addBrandToCategory)