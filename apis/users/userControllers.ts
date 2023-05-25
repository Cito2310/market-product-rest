import { Request, Response } from "express";
import bcryptjs from "bcryptjs";
import { User } from "./userModels";
import { generatorJWT } from '../../helpers/generatorJWT';
import { IBodyUser, IBodyLogin } from '../../types/InputBodyTypes';



export async function createUser (req: Request, res: Response) {
    try {
        const { _id, ...userData } = req.body as IBodyUser;
    
        const salt = bcryptjs.genSaltSync();
        userData.password = bcryptjs.hashSync( userData.password , salt)
    
        const newUser = new User(userData);
        await newUser.save();
    
        const token: string = await generatorJWT({ id: newUser._id });
    
        return res.json({ user: newUser, token });
        

    } catch (error) { return res.status(500).json({ msg: "1500 - unexpected server error" })}
}




export async function loginUser (req: Request, res: Response) {
    try {
        const { username } = req.body as IBodyLogin;

        const user = await User.findOne({username})

        const token: string = await generatorJWT({ id: user?._id });
        return res.status(200).json({ token });


    } catch (error) { console.log(error);return res.status(500).json({ msg: "1500 - unexpected server error" })}
}