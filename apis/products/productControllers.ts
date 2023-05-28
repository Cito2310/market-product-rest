import { Request, Response } from "express";
import { Product } from "./productModels";
import { BodyCreateProduct, BodyUpdateProduct } from "../../types/bodyProduct";



export const createProduct = async (req: Request, res: Response) => {
    try {
        const { _id, ...createProductData } = req.body as BodyCreateProduct;

        const newProduct = new Product(createProductData);
        newProduct.save()

        return res.status(200).json(newProduct)


    } catch (error) { return res.status(500).json({ msg: "1500 - unexpected server error" })}
}




export const deleteProduct = async (req: Request, res: Response) => {
    try {
        const { barcode } = req.params;

        const productDelete = await Product.findOneAndDelete({barcode})

        return res.status(200).json(productDelete)
        

    } catch (error) { return res.status(500).json({ msg: "1500 - unexpected server error" })}
}




export const updateProduct = async (req: Request, res: Response) => {
    try {
        const { barcode } = req.params;
        const { _id, ...updateProductData } = req.body as BodyUpdateProduct;

        const newUpdateProduct = await Product.findOneAndUpdate({barcode}, updateProductData, { new: true })
        return res.status(200).json(newUpdateProduct)
      
        
    } catch (error) { return res.status(500).json({ msg: "1500 - unexpected server error" })}
}




export const getProducts = async (req: Request, res: Response) => {
    try {
        const allProduct = await Product.find()
        return res.status(200).json(allProduct)
        

    } catch (error) { return res.status(500).json({ msg: "1500 - unexpected server error" })}
}