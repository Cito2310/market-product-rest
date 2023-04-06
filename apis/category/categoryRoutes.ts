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
import * as checkValidationCategory from "../../helpers/checkValidationCategory";

export const routeCategory = Router();




routeCategory.post("/", [
    validateJWT,

    check("category").trim()
        .notEmpty().withMessage("category is required")
        .isString().withMessage("category not is string")
        .isLength({max: 16}).withMessage("category max length 16")
        .custom(checkValidationCategory.notExistCategory).withMessage("already exist category")
    ,

    checkFields
], createCategory)




routeCategory.get("/", [ validateJWT ], getAllCategoriesAndBrand)




routeCategory.delete("/:idCategory", [
    validateJWT,

    check("idCategory")
        .isMongoId().withMessage("id invalid")
        .custom(checkValidationCategory.existCategoryId).withMessage("not exist category with this id")
    ,

    checkFields
], deleteCategoriesAndBrand)




routeCategory.put("/brand", [ 
    validateJWT,

    check("category").trim()
        .notEmpty().withMessage("category is required")
        .isString().withMessage("category not is string")
        .isLength({max: 16}).withMessage("category max length 16")
        .custom(checkValidationCategory.existCategory).withMessage("not exist category with this name")
    ,

    check("brands")
        .notEmpty().withMessage("brands is required")
        .isArray({min: 1}).withMessage("brands need array with min one brand")
        .custom(checkValidationCategory.arrayContentOnlyString).withMessage("brands content item not string")
    ,

    checkFields
], editBrandsToCategory)