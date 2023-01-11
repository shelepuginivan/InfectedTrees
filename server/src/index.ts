import express, {Express, json} from 'express'
import mongoose from 'mongoose';
import path from 'path';
import dotenv from 'dotenv'
import authRouter from "./routers/authRouter";
import cookieParser from 'cookie-parser'
import infectedTreeRouter from "./routers/infectedTreeRouter";
import fileUpload from 'express-fileupload';
import userRouter from "./routers/userRouter";
import cors from 'cors';

dotenv.config({path: path.join(__dirname, '..', '.env')})

const app: Express = express()

app.use(cors({
	origin: process.env.CLIENT_HOST,
	credentials: true
}))
app.use(json())
app.use(cookieParser())
app.use(fileUpload())
app.use('/auth', authRouter)
app.use('/records', infectedTreeRouter)
app.use('/users', userRouter)

mongoose.set({strictQuery: false})

const startServer = async (): Promise<void> => {
    try {
        await mongoose.connect(process.env.MONGO_URI as string)
        console.log('Database connected successfully')
        app.listen(Number(process.env.PORT as string))
    } catch (e: any) {
        console.error(e)
    }
}

startServer().then(() => console.log(`Server started on port ${process.env.PORT}...`))
