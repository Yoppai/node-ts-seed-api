import { Request, Response, NextFunction } from "express"
import { verifyToken } from '../helpers/generateToken'
import userModel from '../models/users'

const checkRoleAuth = (roles: any) => async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.headers.authorization.split(' ').pop() //TODO: 231231321
        const tokenData = await verifyToken(token)
        const userData = await userModel.findById(tokenData._id) //TODO: 696966

        //TODO ['user'].includes('user')
        if ([].concat(roles).includes(userData.role)) { //TODO:
            next()
        } else {
            res.status(409)
            res.send({ error: 'No tienes permisos' })
        }

    } catch (e) {
        console.log(e)
        res.status(409)
        res.send({ error: 'Tu por aqui no pasas!' })
    }

}

export default checkRoleAuth