import { Request, Response } from 'express'
import companyModel from '../models/company'
import { httpError } from '../helpers/handleError'



const createCompany = async (req: Request, res: Response) => {
    
    try {
        const { name, rfc } = req.body
        const resDetail = await companyModel.create({
            name, rfc
        })
        res.send({ data: resDetail })
    } catch (e: any) {
        httpError(res, e)
    }
}

export { createCompany }