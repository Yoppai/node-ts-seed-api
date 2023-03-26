
import { Router } from "express"
import checkOrigin from "../middleware/origin"
import checkAuth from "../middleware/auth"
import checkRoleAuth from "../middleware/roleAuth"
import { validateCreateAdmin, validateCompany } from "../validators/users"
import { getItems, getItem, createAdmin, deleteItem, addCompany } from "../controllers/users"
import verifyDuplicity from "../middleware/emailDuplicity"


const router = Router()

router.get('/', checkAuth, checkRoleAuth(['admin']), getItems)

router.get('/:id', checkOrigin, getItem)

//TODO: Donde recibimos data
router.post('/', validateCreateAdmin, verifyDuplicity, createAdmin)

router.patch('/addCompany/:id', validateCompany, addCompany)

router.delete('/:id', deleteItem)




export = router