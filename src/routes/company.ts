import { Router } from "express"
import { createCompany } from "../controllers/company"
import { validateCreateCompany } from "../validators/company"

const router = Router()


router.post('/', validateCreateCompany, createCompany)

export = router
