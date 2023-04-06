import { Router } from "express";
import { check } from "express-validator";

import { createUser, changeDataUser, loginUser, deleteUser, getUser } from './userControllers';

import { checkFields } from '../../middlewares/checkFields';
import { validateJWT } from '../../middlewares/validateJWT';
import * as validation from "../../helpers/validation";

export const routeUser = Router();


// routeUser.post("/register",[
//     check("password", "password is required").trim().notEmpty(),
//     check("password", "password invalid").trim().isString(),
//     check("password", "password length can only be greater than 8 and less than 24 characters").trim().isLength({min: 8, max: 32}),

//     check("username", "username is required").trim().notEmpty(),
//     check("username", "username not is string").trim().isString(),
//     check("username", "username length can only be greater than 6 and less than 24 characters").trim().isLength({min: 6, max: 24}),
//     check("username", "username invalid, it already exists").trim().custom(validation.usernameExist),

//     checkFields
// ], createUser);


routeUser.put("/",[
    validateJWT,

    check("password", "0005 - password invalid").optional().trim().isString(),
    check("password", "0006 - password length can only be greater than 8 and less than 24 characters").optional().trim().isLength({min: 8, max: 32}),
    check("password", "password invalid, equal password").optional().trim().custom(validation.passwordEqual),
    
    check("username", "0008 - username not is string").optional().trim().isString(),
    check("username", "0009 - username length can only be greater than 6 and less than 24 characters").optional().trim().isLength({min: 6, max: 24}),
    check("username", "username invalid, it already exists").optional().trim().custom(validation.usernameExist),
    check("username", "username invalid, equal username").optional().trim().custom(validation.usernameEqual),

    checkFields
], changeDataUser);


routeUser.get("/",[ validateJWT ], getUser);


routeUser.delete("/",[ validateJWT ], deleteUser);


routeUser.post("/login",[
    check("password", "password is required").trim().notEmpty(),
    check("password", "0005 - password invalid").trim().isString(),
    check("password", "0006 - password length can only be greater than 8 and less than 24 characters").trim().isLength({max: 100}),

    check("username", "username is required").trim().notEmpty(),
    check("username", "0008 - username not is string").trim().isString(),
    check("username", "0009 - username length can only be greater than 6 and less than 24 characters").trim().isLength({max: 100}),
    checkFields
], loginUser);