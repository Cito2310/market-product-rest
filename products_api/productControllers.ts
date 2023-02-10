import { Request, Response } from "express"



export const changePriceProduct = async (req: Request, res: Response) => {
    try {

        return res.status(200).json({ msg: "Work" })

    } catch (error) { return res.status(500).json({ msg: "1500 - unexpected server error" })}
}


export const createProduct = async (req: Request, res: Response) => {
    try {

        return res.status(200).json({ msg: "Work" })

    } catch (error) { return res.status(500).json({ msg: "1500 - unexpected server error" })}
}


export const deleteProduct = async (req: Request, res: Response) => {
    try {

        return res.status(200).json({ msg: "Work" })
        
    } catch (error) { return res.status(500).json({ msg: "1500 - unexpected server error" })}
}


export const editProduct = async (req: Request, res: Response) => {
    try {

        return res.status(200).json({ msg: "Work" })
        
    } catch (error) { return res.status(500).json({ msg: "1500 - unexpected server error" })}
}


export const getProducts = async (req: Request, res: Response) => {
    try {

        return res.status(200).json({ msg: "Work" })
        
    } catch (error) { return res.status(500).json({ msg: "1500 - unexpected server error" })}
}


export const getProductWithBarcode = async (req: Request, res: Response) => {
    try {

        return res.status(200).json({ msg: "Work" })
        
    } catch (error) { return res.status(500).json({ msg: "1500 - unexpected server error" })}
}