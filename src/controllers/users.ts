import { Request, Response } from 'express'
import { httpError } from '../helpers/handleError'
import userModel from '../models/users'

const getItems = async (req: Request, res: Response) => {
    try {
        const listAll = await userModel.find({})
        res.send({ data: listAll })
    } catch (e: any) {
        httpError(res, e)
    }
}

const getItem = (req: Request, res: Response) => {

}

const createItem = async (req: Request, res: Response) => {
    console.log(req.body)
    try {
        const { name, age, email } = req.body
        const resDetail = await userModel.create({
            name, age, email
        })
        res.send({ data: resDetail })
    } catch (e: any) {
        httpError(res, e)
    }
}


const updateItem = (req: Request, res: Response) => {

}

const deleteItem = (req: Request, res: Response) => {

}

export { getItem, getItems, deleteItem, createItem, updateItem }