import { Request, Response, NextFunction } from "express"
import { validateResult } from "../helpers/validateHelper"
import { check } from "express-validator"

const validateCreateCompany = [
    check('name')
        .exists()
        .not().isEmpty(),
    check('rfc')
        .exists(),
    (req: Request, res: Response, next: NextFunction) => {
        validateResult(req, res, next)
    }
]
    


export { validateCreateCompany }