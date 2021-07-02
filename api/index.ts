import express from 'express'
import Routes from './Config/routes'
import cors from 'cors'

const app: express.Application = express()
app.use(express.json())
app.use(cors())

Routes(app)

const PORT: number = 9000

app.listen(PORT)
