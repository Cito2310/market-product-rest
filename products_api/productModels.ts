import { model, Schema } from "mongoose";
import { IProductMongo } from '../types/TypesMoongose';


const productSchema = new Schema<IProductMongo>({
    barcode: { type: String, required: true },
    brand: { type: String, required: true },
    category: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    size: { type: String, required: true },
    subcategory: { type: String, required: true },
})

productSchema.methods.toJSON = function() {
    const {__v , password, ...rest } = this.toObject();
    return rest;
}

export const User = model("User", productSchema);