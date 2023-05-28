import { Document } from "mongoose";

export interface SubcategoryMongo {
    name: string;
    brands: string[];
}

export interface CategoryMongo extends Document {
    name: string;
    subcategories: SubcategoryMongo[];
}