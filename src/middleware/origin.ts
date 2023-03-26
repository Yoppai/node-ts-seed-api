import { Request, Response, NextFunction } from "express"

const checkOrigin = (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.headers.authorization.split(' ').pop()
        if (token === '123456') {
            next()
        } else {
            res.status(409)
            res.send({ error: 'Tu por aqui no pasas!' })
        }

    } catch (e) {
        next()
    }

}

export default checkOrigin