import { IUserMongo, IProductMongo } from './TypesMoongose';


// B O D Y   U S E R   T Y P E
export interface IBodyUser extends IUserMongo {
    _id?: unknown
}

export interface IBodyLogin extends IUserMongo {}





// B O D Y   P R O D U C T   T Y P E
export interface IBodyProduct extends IProductMongo {
    _id?: unknown
}

export interface IBodyChangeDataProduct extends IProductMongo {
    _id?: unknown,
}

export interface IBodyChangeDataPriceProduct {
    _id?: unknown,
    price: number
}





// B O D Y   C A T E G O R Y   T Y P E
export interface IBodyCreateCategory {
    category: string,
    brands?: string[],
}

export interface IBodyModifyNameCategory {
    newCategory: string,
    oldCategory: string,
}

export interface IBodyDeleteCategoriesAndBrand {
    category: string,
}

export interface IBodyDeleteBrandToCategory {
    category: string,
    brands: string[],
}

// body brand
export interface IBodyModifyBrandToCategory {
    category: string,
    brands: string[],
}