export interface BodyCreateProduct {
    _id?: string;
    barcode: string;
    brand: string;
    category: string;
    name: string;
    price: number;
    size: number;
    sizeUnit: "kg" | "g" | "oz" | "cm3" | "l" | "ml" | "u" | "cc";
    subcategory: string;
    type: "weight" | "unit";
}

export interface BodyUpdateProduct {
    _id?: string;
    brand: string;
    category: string;
    name: string;
    price: number;
    size: number;
    sizeUnit: "kg" | "g" | "oz" | "cm3" | "l" | "ml" | "u" | "cc";
    subcategory: string;
    type: "weight" | "unit";
}