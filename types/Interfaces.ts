import { Types } from 'mongoose';
import { IUserMongo } from './TypesMoongose';

export interface IUser extends IUserMongo {
    _id: Types.ObjectId
}

export interface IProduct extends IUserMongo {
    _id: Types.ObjectId
}