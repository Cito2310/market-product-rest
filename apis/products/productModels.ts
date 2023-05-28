import { model, Schema } from "mongoose";
import { ProductMongo } from "../../types/typesMongoose";


const productSchema = new Schema<ProductMongo>({
    barcode: { type: String, required: true },
    brand: { type: String, required: true, lowercase: true },
    category: { type: String, required: true, lowercase: true },
    name: { type: String, required: true, lowercase: true },
    price: { type: Number, required: true, lowercase: true },
    size: { type: Number, required: true, lowercase: true },
    subcategory: { type: String, required: true, lowercase: true },
    type: { type: String, enum: ["weight", "unit"], lowercase: true, required: true },

    sizeUnit: { 
        type: String, enum: ["kg", "g", "oz", "cm3", "l", "ml", "u", "cc"], 
        required: true, lowercase: true 
    },
})

productSchema.methods.toJSON = function() {
    const {__v , ...rest } = this.toObject();
    return rest;
}

export const Product = model("Product", productSchema);