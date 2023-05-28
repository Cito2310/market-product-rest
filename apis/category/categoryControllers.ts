import { Request, Response } from "express";

import { Category } from "./categoryModels";

import { BodyCreateCategory, BodyUpdateCategory } from "../../types/bodyCategory";





export const createCategory = async( req: Request, res: Response ) => {
    try {
        let { name, subcategories } = req.body as BodyCreateCategory;

        const newCategory = new Category({ name, subcategories });
        await newCategory.save();

        return res.json(newCategory);


    } catch (error) { console.log(error); return res.status(500).json({ msg: "1500 - unexpected server error" }) }
}




export const getCategories = async( req: Request, res: Response ) => {
    try {
        const categories = await Category.find();
        return res.json(categories);
        

    } catch (error) { console.log(error); return res.status(500).json({ msg: "1500 - unexpected server error" }) }
}




export const deleteCategoryById = async ( req: Request, res: Response ) => {
    try {
        let { idCategory } = req.params;

        const category = await Category.findByIdAndDelete(idCategory);

        return res.status(200).json(category);
        

    } catch (error) { console.log(error); return res.status(500).json({ msg: "1500 - unexpected server error" }) }
}




export const updateCategoryById = async( req: Request, res: Response ) => {
    try {
        let { idCategory } = req.params;
        let { name, subcategories } = req.body as BodyUpdateCategory;

        let existCategory = await Category.findById( idCategory );

        if ( name ) existCategory!.name = name;
        // @ts-ignore
        if ( subcategories ) existCategory!.subcategories = subcategories;

        await existCategory!.save();
        return res.json(existCategory);


    } catch (error) { console.log(error); return res.status(500).json({ msg: "1500 - unexpected server error" }) }
}