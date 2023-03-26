
import { verifyToken } from '../helpers/generateToken'
import { Request, Response, NextFunction } from 'express'

const checkAuth = async (req: Request, res: Response, next: NextFunction) => {
    try {
        //TODO: authorization: Bearer 1010101010101001010100 
        const token = req.headers.authorization.split(' ').pop() //TODO:123123213
        const tokenData = await verifyToken(token!)
        if (tokenData._id) {
            next()
        } else {
            res.status(409)
            res.send({ error: 'Tu por aqui no pasas!' })
        }

    } catch (e: any) {
        console.log(e)
        res.status(409)
        res.send({ error: 'Tu por aqui no pasas!' })
    }

}

export default checkAuth