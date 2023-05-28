import { CustomValidator } from "express-validator";
import { Category } from "../apis/category/categoryModels";

// C A T E G O R Y
// VALIDAR - Verificar que este array solo contenga string
export const arrayContentOnlyString: CustomValidator = async ( arr: unknown[] ) => {
    const notString = arr.find( item => typeof item !== "string" );

    if ( notString ) throw new Error;

    return true
}

export const arrayContentOnlyObject: CustomValidator = async ( arr: unknown[] ) => {
    const notObject = arr.find( item => {
        const isObject = typeof item === 'object' && !Array.isArray(item) && item !== null;

        return !isObject;
    })

    if ( notObject ) throw new Error;

    return true
}

export const arrayContentOnlySubcategories: CustomValidator = async ( arr: unknown[] ) => {
    const notObject = arr.find( item => {
        const isObject = typeof item === 'object' && !Array.isArray(item) && item !== null;
        if ( !isObject ) return true;

        // @ts-ignore
        if ( !item.name ) return true;
        
        try {
            // @ts-ignore
            const check = item.brands.find( item => typeof item !== "string" );
            if ( check ) return true;

        } catch (error) {
            return true;
        }
    })

    if ( notObject ) throw new Error;

    return true
}




// VALIDAR - Verificar que no exista una categoria con este nombre 
export const notExistCategory: CustomValidator = async ( name: string ) => {
    const existCategory = await Category.findOne({ name });

    if (existCategory) throw new Error;
    
    return true;
}




// VALIDAR - Verificar que no exista una categoria con este nombre 
export const existCategory: CustomValidator = async ( name: string ) => {
    const existCategory = await Category.findOne({ name });

    if (!existCategory) throw new Error;
    
    return true;

}




// VALIDAR - Verificar que existe categoria con el id 
export const existCategoryId: CustomValidator = async ( id: string ) => {
    const existCategory = await Category.findById(id);

    if (!existCategory) throw new Error;
    
    return true;

}