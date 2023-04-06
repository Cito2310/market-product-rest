import { Request, Response } from "express";
import { Product } from "./productModels";
import { IBodyProduct } from '../../types/InputBodyTypes';



// CONTROLLER - Create Product
// Permite crear un nuevo producto la data en el body - Need Token
export const createProduct = async (req: Request, res: Response) => {
    try {
        // declare var
        const { _id, ...newProductData } = req.body as IBodyProduct;

        // create new product and save
        const newProduct = new Product(newProductData);
        newProduct.save()

        // return new product
        return res.status(200).json(newProduct)


    } catch (error) { return res.status(500).json({ msg: "1500 - unexpected server error" })}
}




// CONTROLLER - Delete Product
// Permite eliminar el producto enviado en el barcode - Need Token
export const deleteProduct = async (req: Request, res: Response) => {
    try {
        // declare var
        const { barcode } = req.params;

        // delete product
        const productDelete = await Product.findOneAndDelete({barcode})

        // return product delete
        return res.status(200).json(productDelete)
        

    } catch (error) { return res.status(500).json({ msg: "1500 - unexpected server error" })}
}




// CONTROLLER - Edit Product
// Permite modificar el producto enviado en el barcode y la data en el body - Need Token
export const editProduct = async (req: Request, res: Response) => {
    try {
        // declare var
        const { barcode } = req.params;
        const { _id, ...modifyProductData } = req.body as IBodyProduct;

        // modify product and return
        const modifyProduct = await Product.findOneAndUpdate({barcode}, modifyProductData, { new: true })
        return res.status(200).json(modifyProduct)
      
        
    } catch (error) { return res.status(500).json({ msg: "1500 - unexpected server error" })}
}




// CONTROLLER - Get Product
// Permite obtener todos los productos
export const getProducts = async (req: Request, res: Response) => {
    try {
        const allProduct = await Product.find()
        return res.status(200).json(allProduct)
        

    } catch (error) { return res.status(500).json({ msg: "1500 - unexpected server error" })}
}