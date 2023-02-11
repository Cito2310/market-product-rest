import { Request, Response } from "express";

import { Product } from "./productModels";

import { IBodyProduct, IBodyChangeDataPriceProduct } from '../types/InputBodyTypes';


export const changePriceProduct = async (req: Request, res: Response) => {
    try {
        const { barcode } = req.params;
        const { price } = req.body as IBodyChangeDataPriceProduct;

        const modifyProduct = await Product.findOneAndUpdate({barcode}, { price }, { new: true });

        return res.status(200).json(modifyProduct);

    } catch (error) { return res.status(500).json({ msg: "1500 - unexpected server error" })}
}


export const createProduct = async (req: Request, res: Response) => {
    try {
        const { _id, ...newProductData } = req.body as IBodyProduct;
        // TODO - Check exist same product
        const newProduct = new Product(newProductData);

        newProduct.save()

        return res.status(200).json(newProduct)

    } catch (error) { return res.status(500).json({ msg: "1500 - unexpected server error" })}
}


export const deleteProduct = async (req: Request, res: Response) => {
    try {
        const { barcode } = req.params;

        await Product.findOneAndDelete({barcode})

        return res.status(204).json()
        
    } catch (error) { return res.status(500).json({ msg: "1500 - unexpected server error" })}
}


export const editProduct = async (req: Request, res: Response) => {
    try {
        const { barcode } = req.params;
        const { _id, price, ...modifyProductData } = req.body as IBodyProduct;
        // TODO Check some product
        
        const modifyProduct = await Product.findOneAndUpdate({barcode}, modifyProductData, { new: true })
        return res.status(200).json(modifyProduct)
        
    } catch (error) { return res.status(500).json({ msg: "1500 - unexpected server error" })}
}


export const getProducts = async (req: Request, res: Response) => {
    try {
        const allProduct = await Product.find()
        return res.status(200).json(allProduct)
        
    } catch (error) { return res.status(500).json({ msg: "1500 - unexpected server error" })}
}


export const getProductWithBarcode = async (req: Request, res: Response) => {
    try {
        const { barcode } = req.params;

        const productFind = await Product.findOne({barcode})

        if ( !productFind ) return res.status(404).json({msg: "product not found"})

        return res.status(200).json(productFind)
        
    } catch (error) { console.log(error); return res.status(500).json({ msg: "1500 - unexpected server error" })}
}