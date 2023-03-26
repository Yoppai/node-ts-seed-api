import { Response, ErrorRequestHandler } from "express"

const httpError = (res: Response, err: ErrorRequestHandler) => {
    console.log(err)
    res.status(500)
    res.send({ error: 'Algo ocurrio' })
}

export { httpError }