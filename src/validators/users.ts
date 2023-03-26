import { check } from 'express-validator' //TODO <---
import { validateResult } from '../helpers/validateHelper'
import { Request, Response, NextFunction } from 'express'
const validateCreate = [ //TODO:name, age, email
    check('name')
        .exists()
        .not().isEmpty(),
    check('age')
        .exists()
        .isNumeric()
        .custom((value, { req }) => {
            //TODO: 18
            if (value < 18 || value > 40) {
                throw new Error('Rango de edad debe ser entre 18 y 40')
            }
            return true
        })
    ,
    check('email')
        .exists()
        .isEmail(),
    (req: Request, res: Response, next: NextFunction) => {
        validateResult(req, res, next)
    }
]

export{ validateCreate }