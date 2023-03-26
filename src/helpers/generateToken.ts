import jwt from'jsonwebtoken'
import * as dotenv from 'dotenv'
dotenv.config()

const tokenSign = async (user: any) => { //TODO: Genera Token
    return jwt.sign(
        {
            _id: user._id, //TODO: <---
            role: user.role
        }, //TODO: Payload ! Carga útil
        process.env.JWT_SECRET, //TODO ENV 
        {
            expiresIn: "2h", //TODO tiempo de vida
        }
    );
}

const verifyToken = async (token: string) => {
    try {
        return jwt.verify(token, process.env.JWT_SECRET)
    } catch (e) {
        return null
    }
}

const decodeSign = (token: string) => { //TODO: Verificar que el token sea valido y correcto
    return jwt.decode(token, null)
}



export { tokenSign, decodeSign, verifyToken }