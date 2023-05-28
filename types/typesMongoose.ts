import { Document } from "mongoose";



export interface SubcategoryMongo {
    name: string;
    brands: string[];
}


export interface CategoryMongo extends Document {
    name: string;
    subcategories: SubcategoryMongo[];
}


export interface ProductMongo {
    barcode: string,
    brand: string,
    category: string
    name: string,
    price: number,
    size: number,
    sizeUnit: "kg" | "g" | "oz" | "cm3" | "l" | "ml" | "u" | "cc"
    subcategory: string
    type: "weight" | "unit",
}


export interface UserMongo {
    password: string,
    username: string,
}