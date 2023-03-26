
import { Router } from "express"
import checkOrigin from "../middleware/origin"
import checkAuth from "../middleware/auth"
import checkRoleAuth from "../middleware/roleAuth"
import { validateCreate } from "../validators/users"
import { getItems, getItem, createItem, deleteItem, updateItem } from "../controllers/users"


const router = Router()

router.get('/', checkAuth, checkRoleAuth(['admin']), getItems)

router.get('/:id', checkOrigin, getItem)

//TODO: Donde recibimos data
router.post('/', checkOrigin, validateCreate, createItem)

router.patch('/:id', updateItem)

router.delete('/:id', deleteItem)




export = router