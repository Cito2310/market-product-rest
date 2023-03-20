import { model, Schema } from "mongoose";
import { ITicketMongo } from '../types/TypesMoongose';


const ticketSchema = new Schema<ITicketMongo>({
    date: {type: String, required: true},
    idTicket: {type: String, required: true},
    products: [{
        amount: Number,
        barcode: String,
        price: Number,
    }]
})

ticketSchema.methods.toJSON = function() {
    const {__v, _id, ...rest } = this.toObject();
    return rest;
}

export const Ticket = model("Ticket", ticketSchema);