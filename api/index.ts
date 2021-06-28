import express = require('express')
const Routes = require('./Config/routes')
const cors = require('cors')

const app: express.Application = express()
app.use(express.json())
app.use(cors())

Routes(app)

const PORT: number = 9000

app.listen(PORT)
