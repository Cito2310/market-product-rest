import { Router } from "express";
import { check } from "express-validator";

import { createUser, changeDataUser, loginUser, deleteUser, getUser } from './userControllers';

import { checkFields } from '../../middlewares/checkFields';
import { validateJWT } from '../../middlewares/validateJWT';
import * as validationUser from "../../helpers/checkValidationUser";

export const routeUser = Router();


routeUser.post("/register",[
    
    check("password").trim()
        .notEmpty().withMessage("password is required")
        .isString().withMessage("password not is string")
        .isLength({min:8, max: 32}).withMessage("password length can only be greater than 8 and less than 24 characters")
    ,

    check("username").trim()
        .notEmpty().withMessage("password is required")
        .isString().withMessage("username not is string")
        .isLength({min:8, max: 32}).withMessage("username length can only be greater than 8 and less than 24 characters")
        .custom(validationUser.notExistWithUsername).withMessage("username it already exists")
    ,

    checkFields
], createUser);


routeUser.put("/",[
    validateJWT,

    check("password").optional().trim()
        .isString().withMessage("password not is string")
        .isLength({min:8, max: 32}).withMessage("password length can only be greater than 8 and less than 24 characters")
        .custom(validationUser.passwordNotEqual).withMessage("password equal")
    ,

    check("username").optional().trim()
        .isString().withMessage("username not is string")
        .isLength({min:8, max: 32}).withMessage("username length can only be greater than 8 and less than 24 characters")
        .custom(validationUser.usernameNotEqual).withMessage("username equal")
        .custom(validationUser.notExistWithUsername).withMessage("username it already exists")
    ,

    checkFields
], changeDataUser);


routeUser.get("/",[ validateJWT ], getUser);


routeUser.delete("/",[ validateJWT ], deleteUser);


routeUser.post("/login",[

    check("password").trim()
        .notEmpty().withMessage("password is required")
        .isString().withMessage("password not is string")
        .custom(validationUser.passwordEqual).withMessage("invalid login")
    ,

    check("username").trim()
        .notEmpty().withMessage("username is required")
        .isString().withMessage("username not is string")
        .custom(validationUser.notExistWithUsername).withMessage("invalid login")
    ,

    checkFields
], loginUser);