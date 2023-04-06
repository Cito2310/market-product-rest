import { CustomValidator } from "express-validator";
import { Category } from "../apis/category/categoryModels";

// C A T E G O R Y
// VALIDAR - Verificar que este array solo contenga string
export const arrayContentOnlyString: CustomValidator = async ( arr: unknown[] ) => {
    const notString = arr.find( item => typeof item !== "string" );

    if ( notString ) throw new Error;

    return true
}




// VALIDAR - Verificar que no exista una categoria con este nombre 
export const notExistCategory: CustomValidator = async ( category: string ) => {
    const existCategory = await Category.findOne({category});

    if (existCategory) throw new Error;
    
    return true;
}




// VALIDAR - Verificar que no exista una categoria con este nombre 
export const existCategory: CustomValidator = async ( category: string ) => {
    const existCategory = await Category.findOne({category});

    if (!existCategory) throw new Error;
    
    return true;

}




// VALIDAR - Verificar que existe categoria con el id 
export const existCategoryId: CustomValidator = async ( id: string ) => {
    const existCategory = await Category.findById(id);

    if (!existCategory) throw new Error;
    
    return true;

}