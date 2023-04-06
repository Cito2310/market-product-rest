import { Request, Response } from "express";

import { Category } from "./categoryModels";

import {
    IBodyCreateCategory, 
    IBodyModifyBrandToCategory, 
} from '../../types/InputBodyTypes';


// C A T E G O R Y   C O N T R O L L E R S
// CONTROLLER - Create Category
// Permite crear una nueva categoria recibiendo el body ( category ) - JWT
export const createCategory = async( req: Request, res: Response ) => {
    try {
        // declare var
        let { category } = req.body as IBodyCreateCategory;

        // create new category and save
        const newCategory = new Category({ category });
        await newCategory.save();

        // return new category
        return res.json(newCategory);

    } catch (error) { console.log(error); return res.status(500).json({ msg: "1500 - unexpected server error" }) }
}

// CONTROLLER - Get all categories and brand
// Permite obtener todas las categorias y sus marcas - JWT
export const getAllCategoriesAndBrand = async( req: Request, res: Response ) => {
    try {
        const categories = await Category.find();
        return res.json(categories);
        
    } catch (error) { console.log(error); return res.status(500).json({ msg: "1500 - unexpected server error" }) }
}

// CONTROLLER - Delete Categories and Brand
// Permite eliminar la categoria y sus marcas con el id de la categoria - JWT
export const deleteCategoriesAndBrand = async ( req: Request, res: Response ) => {
    try {
        // declare var
        let { idCategory } = req.params;

        // find category and delete
        const category = await Category.findByIdAndDelete(idCategory);

        // return category delete
        return res.status(200).json(category);
        
    } catch (error) { console.log(error); return res.status(500).json({ msg: "1500 - unexpected server error" }) }
}


// B R A N D   C O N T R O L L E R S
// CONTROLLER - Edit brands to category
// Permite editar y crear las marcas en la categoria - JWT
export const editBrandsToCategory = async( req: Request, res: Response ) => {
    try {
        // declare var
        let { brands, category } = req.body as IBodyModifyBrandToCategory;

        // get category
        let existCategory = await Category.findOne({category});
        if (!existCategory) return;

        // edit brands
        existCategory.brands = brands;

        // save category and return
        await existCategory.save();
        return res.json(existCategory);

    } catch (error) { console.log(error); return res.status(500).json({ msg: "1500 - unexpected server error" }) }
}