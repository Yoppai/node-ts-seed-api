import { Request, Response } from 'express'
import { httpError } from'../helpers/handleError'
import { encrypt, compare } from '../helpers/handleBcrypt'
import { tokenSign } from '../helpers/generateToken'
import userModel from '../models/users'

//TODO: Login!
const loginCtrl = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body

        const user = await userModel.findOne({ email })

        if (!user) {
            res.status(404)
            res.send({ error: 'User not found' })
            return
        }

        const checkPassword = await compare(password, user.password!) //TODO: Contraseña!

        //TODO JWT 👉
        const tokenSession = await tokenSign(user) //TODO: 2d2d2d2d2d2d2

        if (checkPassword) { //TODO Contraseña es correcta!
            res.send({
                data: user,
                tokenSession
            })
            return
        }

        if (!checkPassword) {
            res.status(409)
            res.send({
                error: 'Invalid password'
            })
            return
        }

    } catch (e: any) {
        httpError(res, e)
    }
}

//TODO: Registramos usuario!
const registerCtrl = async (req: Request, res: Response) => {
    try {
        //TODO: Datos que envias desde el front (postman)
        const { email, password, name } = req.body

        const passwordHash = await encrypt(password) //TODO: (123456)<--- Encriptando!!
        const registerUser = await userModel.create({
            email,
            name,
            password: passwordHash
        })

        res.send({ data: registerUser })

    } catch (e: any) {
        httpError(res, e)
    }
}



export { loginCtrl, registerCtrl }