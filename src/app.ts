import * as dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import cors from 'cors'
import { dbConnect } from './config/mongo'
import router from './routes'

const app = express()


const PORT = process.env.PORT || 3000
app.use(cors())
app.use(express.json())

app.use('/api/1.0', router)

dbConnect()
app.listen(PORT, () => {
    console.log('API lista por el puerto ', PORT)
})