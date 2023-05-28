import { model, Schema } from "mongoose";
import { UserMongo } from "../../types/typesMongoose";


const userSchema = new Schema<UserMongo>({
    password: {type: String, required: true},
    username: {type: String, required: true},
})

userSchema.methods.toJSON = function() {
    const {__v , password, ...rest } = this.toObject();
    return rest;
}

export const User = model("User", userSchema);