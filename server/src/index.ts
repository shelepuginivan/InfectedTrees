import express, {Express, json} from 'express'
import mongoose from 'mongoose';
import path from 'path';
import dotenv from 'dotenv'

dotenv.config({path: path.join(__dirname, '..', '.env')})

const app: Express = express()

app.use(json())

mongoose.set({strictQuery: true})

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
