import { Request, Response } from "express";

import { Category } from "./categoryModels";

import { BodyCreateCategory, BodyUpdateCategory } from "../../types/body/bodyCategory";





export const createCategory = async( req: Request, res: Response ) => {
    try {
        let { category, brands } = req.body as BodyCreateCategory;

        const newCategory = new Category({ category, brands });
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

        let existCategory = await Category.findById( idCategory );
        if (!existCategory) return res.status(404).json({msg: `not found category with id: ${idCategory}`});

        const category = await Category.findByIdAndDelete(idCategory);

        return res.status(200).json(category);
        

    } catch (error) { console.log(error); return res.status(500).json({ msg: "1500 - unexpected server error" }) }
}




export const updateCategoryById = async( req: Request, res: Response ) => {
    try {
        let { idCategory } = req.params;
        let { brands, category } = req.body as BodyUpdateCategory;

        let existCategory = await Category.findById( idCategory );
        if (!existCategory) return res.status(404).json({msg: `not found category with id: ${idCategory}`});

        existCategory.brands = brands;
        existCategory.category = category;

        await existCategory.save();
        return res.json(existCategory);


    } catch (error) { console.log(error); return res.status(500).json({ msg: "1500 - unexpected server error" }) }
}