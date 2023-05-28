import { Router } from "express";
import { check } from "express-validator";

import { 
    createCategory, 
    deleteCategoryById,
    getCategories,
    updateCategoryById
} from './categoryControllers';

import { checkFields } from '../../middlewares/checkFields';
import { validateJWT } from '../../middlewares/validateJWT';
import { notExistCategory, existCategory, existCategoryId, arrayContentOnlyString, arrayContentOnlyObject, arrayContentOnlySubcategories } from "../../helpers/checkValidationCategory";

export const routeCategory = Router();




routeCategory.post("/", [
    validateJWT,

    check("name").trim()
        .notEmpty().withMessage("name is required")
        .isString().withMessage("name not is string")
        .isLength({max: 24}).withMessage("name max length 24")
        .custom( notExistCategory ).withMessage("already exist category")
    ,

    check("subcategories").optional()
        .isArray({min: 1}).withMessage("subcategories need array with min one subcategory")
        .custom( arrayContentOnlySubcategories ).withMessage("subcategories content item not object valid")
    ,

    checkFields
], createCategory)




routeCategory.get("/", [ 
    validateJWT 
    
], getCategories)




routeCategory.delete("/:idCategory", [
    validateJWT,

    check("idCategory")
        .isMongoId().withMessage("id invalid")
        .custom( existCategoryId ).withMessage("not exist category with this id")
    ,

    checkFields
], deleteCategoryById)




routeCategory.put("/:idCategory", [ 
    validateJWT,

    check("idCategory")
        .isMongoId().withMessage("id invalid")
        .custom( existCategoryId ).withMessage("not exist category with this id")
    ,

    check("name").trim().optional()
        .isString().withMessage("name not is string")
        .isLength({max: 24}).withMessage("name max length 24")
        // .custom( notExistCategory ).withMessage("already exist category")
    ,

    check("subcategories").optional()
        .isArray({min: 1}).withMessage("subcategories need array with min one subcategory")
        .custom( arrayContentOnlySubcategories ).withMessage("subcategories content item not object valid")
    ,

    checkFields
], updateCategoryById)