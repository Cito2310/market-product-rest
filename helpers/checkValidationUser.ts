import { CustomValidator } from "express-validator";
import { User } from "../apis/users/userModels";
import bcryptjs from 'bcryptjs';

// U S E R N A M E
// VALIDAR - Verificar con el username si *existe* este usuario
export const existWithUsername: CustomValidator = async ( username: string ) => {
    const user = await User.findOne({ username })

    if ( user ) throw new Error;

    return true;
}


// VALIDAR - Verificar con el username si *no existe* este usuario
export const notExistWithUsername: CustomValidator = async ( username: string ) => {
    const user = await User.findOne({ username })

    if ( !user ) throw new Error;

    return true;
}


// VALIDAR - Verificar que el valor insertado *es igual* al username que esta en el user extraido del JWT
export const usernameEqual: CustomValidator = async ( username: string, { req } ) => {
    if ( username !== req.user.username ) throw new Error;
    
    return true;
}


// VALIDAR - Verificar que el valor insertado *no es igual* al username que esta en el user extraido del JWT
export const usernameNotEqual: CustomValidator = async ( username: string, { req } ) => {
    if ( username === req.user.username ) throw new Error;

    return true;
}



// E M A I L
// VALIDAR - Verificar que el valor insertado *es igual* al email que esta en el user extraido del JWT
export const emailEqual: CustomValidator = async ( value: string, { req } ) => {
    if ( value !== req.user.email ) throw new Error;

    return true;
}


// VALIDAR - Verificar que el valor insertado *es no igual* al email que esta en el user extraido del JWT
export const emailNotEqual: CustomValidator = async ( value: string, { req } ) => {
    if ( value === req.user.email ) throw new Error;

    return true;
}


// VALIDAR - Verificar que el email insertado *existe*
export const emailExist: CustomValidator = async ( email: string ) => {
    const user = await User.findOne({ email })
    if ( !user ) throw new Error;

    return true;
}


// VALIDAR - Verificar que el email insertado *no existe*
export const emailNotExist: CustomValidator = async ( email: string ) => {
    const user = await User.findOne({ email })
    if ( user ) throw new Error;

    return true;
}



// P A S S W O R D
// VALIDAR - Verificar que el valor insertado *es igual* a la contraseña que esta en el user extraido del JWT
export const passwordEqual: CustomValidator = async ( value: string, { req } ) => {
    const user = await User.findOne({username: req.body.username});
    const validPassword = bcryptjs.compareSync( value, user?.password || "" );
    
    if ( !validPassword ) throw new Error;
    
    return true;
}


// VALIDAR - Verificar que el valor insertado *es no igual* a la contraseña que esta en el user extraido del JWT
export const passwordNotEqual: CustomValidator = async ( value: string, { req } ) => {
    const user = await User.findOne({username: req.body.username});
    const validPassword = bcryptjs.compareSync( value, user?.password || "" );

    if ( validPassword ) throw new Error;
    
    return true;
}