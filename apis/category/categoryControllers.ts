import { Request, Response } from "express";

import { Category } from "./categoryModels";

import {
    IBodyCreateCategory, 
    IBodyDeleteCategoriesAndBrand, 
    IBodyModifyBrandToCategory, 
    IBodyModifyNameCategory,
} from '../../types/InputBodyTypes';


// CATEGORY  CONTROLLERS
// POST - Create Category
export const createCategory = async( req: Request, res: Response ) => {
    try {
        let { category, brands } = req.body as IBodyCreateCategory;

        category = category.toUpperCase();
        brands = brands?.map( value => value.toUpperCase() );

        const existCategory = await Category.findOne({category});
        if (existCategory) return res.status(400).json({msg: "exist category"});

        const newCategory = new Category({ category, brands });
        await newCategory.save();

        return res.json(newCategory);

    } catch (error) { console.log(error); return res.status(500).json({ msg: "1500 - unexpected server error" }) }
}

// GET - Get all categories and brand
export const getAllCategoriesAndBrand = async( req: Request, res: Response ) => {
    try {
        const categories = await Category.find();
        return res.json(categories);
        
    } catch (error) { console.log(error); return res.status(500).json({ msg: "1500 - unexpected server error" }) }
}

// DELETE - Delete Categories and Brand
export const deleteCategoriesAndBrand = async ( req: Request, res: Response ) => {
    try {
        let { idCategory } = req.params;

        const existCategory = await Category.findById(idCategory);
        if (!existCategory) return res.status(404).json({ msg: "not found category" });

        await Category.findByIdAndDelete(idCategory);
        res.status(200).json(existCategory);
        
    } catch (error) { console.log(error); return res.status(500).json({ msg: "1500 - unexpected server error" }) }
}


// BRAND CONTROLLERS
// PUT - Edit brands to category
export const editBrandsToCategory = async( req: Request, res: Response ) => {
    try {
        let { brands, category } = req.body as IBodyModifyBrandToCategory;

        category = category.toUpperCase();

        let existCategory = await Category.findOne({category});
        if (!existCategory) return res.status(404).json({ msg: "not found category" });

        existCategory.brands = brands;

        await existCategory.save();
        return res.json(existCategory);

    } catch (error) { console.log(error); return res.status(500).json({ msg: "1500 - unexpected server error" }) }
}