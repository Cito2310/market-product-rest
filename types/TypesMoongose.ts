export interface IUserMongo {
    password: string,
    username: string,
}

export interface IProductMongo {
    barcode: string,
    brand: string,
    category: string
    name: string,
    price: number,
    size: string,
}

export interface ICategoryMongo {
    category: string,
    brands: string[] | [],
}