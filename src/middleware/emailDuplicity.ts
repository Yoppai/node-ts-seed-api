import { Request, Response, NextFunction } from "express"
import userModel from '../models/users'
import { httpError } from "../helpers/handleError"

const verifyDuplicity = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const duplicity = await userModel.findOne({email: req.body.email})
        if(duplicity){
            return res.status(409).send({error: 'duplicidad de usuario' })
        }
        next()
    } catch (e: any) {
        return httpError(res, e)
    }
}

export default verifyDuplicity