import { model, Schema } from "mongoose";
import { ICategoryMongo } from '../types/TypesMoongose';


const categorySchema = new Schema<ICategoryMongo>({
    category: {type: String, required: true, uppercase: true},
    brands: [{type: String}],
})

categorySchema.methods.toJSON = function() {
    const {__v , password, ...rest } = this.toObject();
    return rest;
}

export const Category = model("Category", categorySchema);