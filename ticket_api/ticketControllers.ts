import { Request, Response } from "express";

import { Ticket } from './ticketModels';

import {
    IBodyCreateTicket, 
} from '../types/InputBodyTypes';


// TICKET CONTROLLERS
// POST - Create Ticket
export const createTicket = async( req: Request, res: Response ) => {
    try {
        const { date, idTicket, products } = req.body as IBodyCreateTicket;

        const newTicket = new Ticket({ date, idTicket, products });
        await newTicket.save();

        return res.json(newTicket);

    } catch (error) { console.log(error); return res.status(500).json({ msg: "1500 - unexpected server error" }) }
}


// DELETE - Delete Ticket
export const deleteTicket = async( req: Request, res: Response ) => {
    try {
        const { idTicket } = req.params;

        const existTicket = await Ticket.findOne({idTicket});
        if ( !existTicket ) return res.status(404).json({ msg: "Not found ticket with idTicket" });

        await Ticket.findOneAndDelete({idTicket});

        return res.status(204).json({});

    } catch (error) { console.log(error); return res.status(500).json({ msg: "1500 - unexpected server error" }) }
}

// GET - Get Tickets
export const getTickets = async( req: Request, res: Response ) => {
    try {
        const tickets = await Ticket.find({});
        return res.json(tickets);

    } catch (error) { console.log(error); return res.status(500).json({ msg: "1500 - unexpected server error" }) }
}