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