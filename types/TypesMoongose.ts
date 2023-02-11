export interface IUserMongo {
    email: string,
    username: string,
    password: string,
}

export interface IProductMongo {
    barcode: string,
    brand: string,
    category: string
    name: string,
    price: number,
    size: string,
}