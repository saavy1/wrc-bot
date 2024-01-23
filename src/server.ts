import express, { Application, Router } from 'express'
import cors, { CorsOptions } from 'cors'

export class Server {
    constructor(app: Application) {
        this.config(app)
    }

    private config(app: Application) {
        const corsOptions: CorsOptions = {
            origin: '' //todo
        }

        app.use(cors(corsOptions))
        app.use(express.json())
        app.use(express.urlencoded({ extended: true }))
    }
}
