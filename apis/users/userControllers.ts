import { Request, Response } from "express";
import bcryptjs from "bcryptjs";

import { User } from "./userModels";

import { generatorJWT } from '../../helpers/generatorJWT';

import { IBodyUser, IBodyLogin } from '../../types/InputBodyTypes';



// CONTROLLER - Create User 
// Permite crear un nuevo usuario recibiendo en el body ( username, password )
export async function createUser (req: Request, res: Response) {
    try {
        // declare var
        const { _id, ...userData } = req.body as IBodyUser;
    
        // encrypt password
        const salt = bcryptjs.genSaltSync();
        userData.password = bcryptjs.hashSync( userData.password , salt)
    
        // create new user and save
        const newUser = new User(userData);
        await newUser.save();
    
        // generate JWT
        const token: string = await generatorJWT({ id: newUser._id });
    
        // return new user and token
        return res.json({ user: newUser, token });
        

    } catch (error) { return res.status(500).json({ msg: "1500 - unexpected server error" })}
}




// CONTROLLER - Login User
// Al enviar body ( username, password ) si es correcto te retorna el token de acceso
export async function loginUser (req: Request, res: Response) {
    try {
        // declare var
        const { username } = req.body as IBodyLogin;

        // get user
        const user = await User.findOne({username})

        // generate JWT and return
        const token: string = await generatorJWT({ id: user?._id });
        return res.status(200).json({ token });


    } catch (error) { console.log(error);return res.status(500).json({ msg: "1500 - unexpected server error" })}
}