import { UserMongo } from './typesMongoose';


// B O D Y   U S E R   T Y P E
export interface IBodyUser extends UserMongo {
    _id?: unknown
}

export interface IBodyLogin extends UserMongo {}
