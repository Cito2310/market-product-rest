import { CustomValidator } from "express-validator";
import { Product } from "../apis/products/productModels";

// P R O D U C T
// VALIDAR - Verificar que no exista un producto registrado con el barcode
export const uniqueBarcode: CustomValidator = async ( barcode: string ) => {
    const product = await Product.findOne({ barcode });

    if (product) throw new Error;

    return true;
}

// VALIDAR - Verificar que exista un producto registrado con el barcode
export const productExistWithBarcode: CustomValidator = async ( barcode: string ) => {
    const product = await Product.findOne({ barcode });

    if ( !product ) throw new Error;

    return true;
}
