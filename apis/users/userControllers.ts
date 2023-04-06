import { Request, Response } from "express";
import bcryptjs from "bcryptjs";

import { User } from "./userModels";

import { generatorJWT } from '../../helpers/generatorJWT';

import { IBodyUser, IBodyChangeDataUser, IBodyLogin } from '../../types/InputBodyTypes';



// CONTROLLER - Create User 
// Permite crear un nuevo usuario recibiendo en el body ( username, password )
export async function createUser (req: Request, res: Response) {
    try {
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


// CONTROLLER - Change Data User - Need Token
// Permite editar el usuario que esta en el token con la data en el body ( username, password )
export async function changeDataUser (req: Request, res: Response) {
    try {
        const { _id, ...newData } = req.body as IBodyChangeDataUser;
        const user = req.user;

        // change password && encrypt password
        if ( newData.password ) {
            const salt = bcryptjs.genSaltSync()
            newData.password = bcryptjs.hashSync(newData.password, salt)
        }

        // find user and update
        const userChanged = await User.findByIdAndUpdate( user._id, newData );

        // save user data
        await userChanged?.save();

        // return
        return res.status(204).json()


    } catch (error) { return res.status(500).json({ msg: "1500 - unexpected server error" })}
}


// CONTROLLER - Get User - Need Token
export async function getUser (req: Request, res: Response) {
    try {  
        return res.status(200).json(req.user);


    } catch (error) { return res.status(500).json({ msg: "1500 - unexpected server error" })}
}


// CONTROLLER - Delete User - Need Token
export async function deleteUser (req: Request, res: Response) {
    try {
        await User.findByIdAndDelete(req.user._id);
        return res.status(204).json();


    } catch (error) { return res.status(500).json({ msg: "1500 - unexpected server error" })}
}


// CONTROLLER - Login User
export async function loginUser (req: Request, res: Response) {
    try {
        // destructure req.body login
        const { username, password } = req.body as IBodyLogin;

        // get user with username
        const user = await User.findOne({ username });
        // check user exist
        if ( !user ) return res.status(404).json({ msg: "001404-not found user" });
        
        // check password is equal
        const samePassword = bcryptjs.compareSync( password, user.password );
        if ( !samePassword ) return res.status(400).json({ msg: "001400-login invalid" })

        // generate JWT and return
        const token: string = await generatorJWT({ id: user._id });
        return res.status(200).json({ token });


    } catch (error) { console.log(error);return res.status(500).json({ msg: "1500 - unexpected server error" })}
}