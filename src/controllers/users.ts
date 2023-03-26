import { Request, Response } from 'express'
import { httpError } from '../helpers/handleError'
import userModel from '../models/users'
import { encrypt } from '../helpers/handleBcrypt'

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

const createAdmin = async (req: Request, res: Response) => {
    try {
        const { name, email, password } = req.body
        const hash = encrypt(password)
        const role = 'admin'
        const resDetail = await userModel.create({
            name, email, hash, role
        })
        res.send({ data: resDetail })
    } catch (e: any) {
        httpError(res, e)
    }
}


const addCompany = async (req: Request, res: Response) => {
    try {
        const company = req.body.company
        const userId = req.params.id 
        const resDetail = await userModel.findOneAndUpdate(
            { _id: userId },
            { $set: { company: company }},
            { new: true }) 
        res.send({ data: resDetail})
    } catch (e: any) {
        httpError(res, e)
    }
}

const deleteItem = (req: Request, res: Response) => {

}

export { getItem, getItems, deleteItem, createAdmin, addCompany }