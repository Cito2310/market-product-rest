import { Request, Response } from "express";

import { Category } from "./categoryModels";

import {
    IBodyAddBrandToCategory, 
    IBodyCreateCategory, 
    IBodyDeleteBrandToCategory, 
    IBodyDeleteCategoriesAndBrand, 
    IBodyModifyBrandToCategory, 
    IBodyModifyNameCategory,
} from '../types/InputBodyTypes';


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
        let { category } = req.body as IBodyDeleteCategoriesAndBrand;

        category = category.toUpperCase();

        let existCategory = await Category.findOne({category});
        if (!existCategory) return res.status(404).json({ msg: "not found category" });

        await Category.findOneAndDelete({category});
        res.status(204).json({})
        
    } catch (error) { console.log(error); return res.status(500).json({ msg: "1500 - unexpected server error" }) }
}

// PUT - Modify Name Category
export const modifyNameCategory = async( req: Request, res: Response ) => {
    try {
        let { oldCategory, newCategory } = req.body as IBodyModifyNameCategory;

        oldCategory = oldCategory.toUpperCase();
        newCategory = newCategory.toUpperCase();

        if ( oldCategory === newCategory ) return res.status(400).json({ msg: "same category" });

        const [ existCategory, alreadyExistNewCategory ] = await Promise.all([
            Category.findOne({category: oldCategory}),
            Category.findOne({category: newCategory})
        ])

        if (!existCategory) return res.status(404).json({ msg: "not found category" });
        if (alreadyExistNewCategory) return res.status(404).json({ msg: "already exist this category" });

        existCategory.category = newCategory;
        await existCategory.save();

        return res.json(existCategory);

    } catch (error) { console.log(error); return res.status(500).json({ msg: "1500 - unexpected server error" }) }
}


// BRAND CONTROLLERS
// PUT - Modify one Brand to Category
export const modifyBrandToCategory = async( req: Request, res: Response ) => {
    try {
        let { newBrand, category, oldBrand } = req.body as IBodyModifyBrandToCategory;

        category = category.toUpperCase();
        newBrand = newBrand.toUpperCase();
        oldBrand = oldBrand.toUpperCase();

        let existCategory = await Category.findOne({category});
        if (!existCategory) return res.status(404).json({ msg: "not found category" });

        existCategory.brands = existCategory.brands.map( brandOld => {
            if ( oldBrand === brandOld ) return newBrand;
            return brandOld;
        });

        await existCategory.save();
        return res.json(existCategory);

    } catch (error) { console.log(error); return res.status(500).json({ msg: "1500 - unexpected server error" }) }
}

// DELETE - Delete Brand to Category
export const deleteBrandToCategory = async( req: Request, res: Response ) => {
    try {
        let { brands, category } = req.body as IBodyDeleteBrandToCategory;

        category = category.toUpperCase();
        brands = brands?.map( value => value.toUpperCase() );

        let existCategory = await Category.findOne({category});
        if (!existCategory) return res.status(404).json({ msg: "not found category" });

        existCategory.brands = existCategory.brands.filter( brand => !brands.includes(brand) );

        await existCategory.save();
        return res.json(existCategory);

    } catch (error) { console.log(error); return res.status(500).json({ msg: "1500 - unexpected server error" }) }
}

// POST - Add Brand to Category
export const addBrandToCategory = async( req: Request, res: Response ) => {
    try {
        let { brands, category } = req.body as IBodyAddBrandToCategory;

        category = category.toUpperCase();
        brands = brands?.map( value => value.toUpperCase() );

        let existCategory = await Category.findOne({category});
        if (!existCategory) return res.status(404).json({ msg: "not found category" });

        existCategory.brands = [...existCategory.brands, ...brands];

        await existCategory.save();
        return res.json(existCategory);

    } catch (error) { console.log(error); return res.status(500).json({ msg: "1500 - unexpected server error" }) }
}