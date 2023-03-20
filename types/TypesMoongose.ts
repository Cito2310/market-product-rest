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

export interface ICategoryMongo {
    category: string,
    brands: string[] | [],
}

export interface ITicketMongo {
    date: string,
    idTicket: string,
    products: { amount: number, barcode: string, price: number }[],
}