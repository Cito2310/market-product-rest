import { Schema, model } from 'mongoose';
import { CategoryMongo } from '../../types/typesMongoose';


const categorySchema = new Schema<CategoryMongo>({
    name: { type: String, required: true, lowercase: true },

    subcategories: {
        type: [{
            name: { type: String, required: true, lowercase: true },
            brands: {
                type: [{ type: String, lowercase: true }],
                default: []
            }
        }],
        default: []
    }
});

categorySchema.methods.toJSON = function() {
    const {__v , ...rest } = this.toObject();
    return rest;
}

export const Category = model("Category", categorySchema);