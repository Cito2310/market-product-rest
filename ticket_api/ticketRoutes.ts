import { Router } from "express";
import { check } from "express-validator";

import { 
    createTicket,
    deleteTicket,
    getTickets
} from './ticketControllers';

import { checkFields } from '../middlewares/checkFields';
import { validateJWT } from '../middlewares/validateJWT';
import * as validation from "../helpers/validation";

export const routeTicket = Router();


// TICKET  CONTROLLERS
// POST - Create Ticket
routeTicket.post("/", [
    validateJWT,

    check("date")
        .trim()
        .notEmpty().withMessage("date is required")
        .isString().withMessage("date not is string")
        .isLength({max: 16}).withMessage("date max length 16")
    ,

    check("idTicket")
        .trim()
        .notEmpty().withMessage("idTicket is required")
        .isString().withMessage("idTicket not is string")
        .isLength({max: 16}).withMessage("idTicket max length 16")
    ,

    check("products")
        .notEmpty().withMessage("products is required")
        .isArray({min: 1}).withMessage("products need array with min one product")
        .custom( validation.arrayContentOnlyProducts ).withMessage("products content item invalid")
    ,

    checkFields
], createTicket)

// DELETE - Delete Ticket
routeTicket.delete("/:idTicket",[ validateJWT ], deleteTicket);

// GET - Get Tickets
routeTicket.get("/",[ validateJWT ], getTickets);