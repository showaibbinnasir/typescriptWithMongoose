import express, { Application } from 'express'
import cors from 'cors'

const app: Application = express()
import userRouter from './src/app/modules/user/user.route'

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1/user', userRouter)

export default app;