import { Types } from 'mongoose';
import { UserMongo } from './typesMongoose';

export interface IUser extends UserMongo {
    _id: Types.ObjectId
}