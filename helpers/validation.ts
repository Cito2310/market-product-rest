import { Product } from '../apis/products/productModels';
import { CustomValidator } from 'express-validator';


// C H E C K - P R O D U C T S
// check exist product with barcode
export const productExistBarcode: CustomValidator = async ( value: string ) => {
    const product = await Product.findOne({ barcode: value });
    if ( !product ) throw new Error;

    return true;
}



// C H E C K - C A T E G O R I E S
export const arrayContentOnlyString: CustomValidator = async ( value: unknown[] ) => {
    const notString = value.find( item => typeof item !== "string" );
    if ( notString ) throw new Error;

    return true
}

// C H E C K - T I C K E T
export const arrayContentOnlyProducts: CustomValidator = async ( value: unknown[] ) => {
    value.forEach( item => {
        const itemIsObject = typeof item === 'object' && !Array.isArray(item) && item !== null;

        if (itemIsObject) {
            // @ts-ignore
            if (item.amount && item.price && item.barcode) return;
        }

        throw new Error;
    })
}