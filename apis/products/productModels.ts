import { model, Schema } from "mongoose";
import { IProductMongo } from '../../types/TypesMoongose';


const productSchema = new Schema<IProductMongo>({
    barcode: { type: String, required: true },
    brand: { type: String, required: true, uppercase: true },
    category: { type: String, required: true, uppercase: true },
    name: { type: String, required: true, uppercase: true },
    price: { type: Number, required: true, uppercase: true },
    size: { type: String, required: true, uppercase: true },
})

productSchema.methods.toJSON = function() {
    const {__v , ...rest } = this.toObject();
    return rest;
}

export const Product = model("Product", productSchema);