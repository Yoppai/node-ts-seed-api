import { check, param } from 'express-validator' //TODO <---
import { validateResult } from '../helpers/validateHelper'
import { Request, Response, NextFunction } from 'express'

const validateCreateAdmin = [ //TODO:name, age, email
    check('name')
        .exists()
        .not().isEmpty(),
    check('email')
        .exists()
        .isEmail(),
    check('password')
        .exists()
        .not().isEmpty()
        .isLength({ min: 8 }),
    (req: Request, res: Response, next: NextFunction) => {
        validateResult(req, res, next)
    }
]

const validateCompany = [
    param('id')
        .exists()
        .not().isEmpty()
        .isMongoId(),
    check('company')
        .exists()
        .not().isEmpty()
        .isMongoId(),
    (req: Request, res: Response, next: NextFunction) => {
        validateResult(req, res, next)
    }
]

export { validateCreateAdmin, validateCompany }