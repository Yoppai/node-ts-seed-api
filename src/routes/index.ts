import { Router } from "express"
import fs from 'fs'

const router = Router()
const pathRouter = `${__dirname}`

const removeExtension = (fileName: any) => {
    return fileName.split('.').shift()
}

fs.readdirSync(pathRouter).filter((file) => {
    const fileWithOutExt = removeExtension(file)
    const skip = ['index'].includes(fileWithOutExt)
    if (!skip) {
        router.use(`/${fileWithOutExt}`, require(`./${fileWithOutExt}`)) //TODO: localhost/users
        console.log('CARGAR RUTA ---->', fileWithOutExt)
    }
})

router.get('*', (req, res) => {
    res.status(404)
    res.send({ error: 'Not found' })
})

export default router