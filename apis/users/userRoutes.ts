import { Router } from "express";
import { check } from "express-validator";

import { checkFields } from '../../middlewares/checkFields';

import * as checkValidationUser from "../../helpers/checkValidationUser";

import { createUser, loginUser } from './userControllers';

export const routeUser = Router();


// routeUser.post("/register",[
//     check("password").trim()
//         .notEmpty().withMessage("password is required")
//         .isString().withMessage("password not is string")
//         .isLength({min:8, max: 32}).withMessage("password length can only be greater than 8 and less than 24 characters")
//     ,

//     check("username").trim()
//         .notEmpty().withMessage("password is required")
//         .isString().withMessage("username not is string")
//         .isLength({min:8, max: 32}).withMessage("username length can only be greater than 8 and less than 24 characters")
//         .custom(checkValidationUser.existWithUsername).withMessage("username it already exists")
//     ,

//     checkFields
// ], createUser);




routeUser.post("/login",[
    check("password").trim()
        .notEmpty().withMessage("password is required")
        .isString().withMessage("password not is string")
        .custom(checkValidationUser.passwordEqual).withMessage("invalid login")
    ,

    check("username").trim()
        .notEmpty().withMessage("username is required")
        .isString().withMessage("username not is string")
        .custom(checkValidationUser.notExistWithUsername).withMessage("invalid login")
    ,

    checkFields
], loginUser);