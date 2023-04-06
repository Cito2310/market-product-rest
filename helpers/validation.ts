import { CustomValidator } from 'express-validator';


// C H E C K - C A T E G O R I E S
export const arrayContentOnlyString: CustomValidator = async ( value: unknown[] ) => {
    const notString = value.find( item => typeof item !== "string" );
    if ( notString ) throw new Error;

    return true
}