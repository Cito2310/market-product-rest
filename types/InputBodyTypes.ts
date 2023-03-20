import { IUserMongo, IProductMongo } from './TypesMoongose';

export interface IBodyUser extends IUserMongo {
    _id?: unknown
}

export interface IBodyChangeDataUser extends IUserMongo {
    _id?: unknown
}

export interface IBodyLogin extends IUserMongo {
    username: string,
    password: string,
}

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







// BODY CATEGORY
export interface IBodyCreateCategory {
    category: string,
    brands?: string[],
}

export interface IBodyModifyNameCategory {
    newCategory: string,
    oldCategory: string,
}

export interface IBodyAddBrandToCategory {
    category: string,
    brands: string[],
}

export interface IBodyDeleteBrandToCategory {
    category: string,
    brands: string[],
}

export interface IBodyModifyBrandToCategory {
    category: string,
    newBrand: string,
    oldBrand: string,
}

export interface IBodyDeleteCategoriesAndBrand {
    category: string,
}



// BODY TICKET
export interface IBodyCreateTicket {
    date: string,
    idTicket: string,
    products: {
        amount: number,
        barcode: string,
        price: number,
    }[]
}