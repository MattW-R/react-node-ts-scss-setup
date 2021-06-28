import express = require('express')

const routes = (app: express.Application): void => {
    app.get('/', (req: express.Request, res: express.Response) => {
        res.send('api working')
    })
}

export = routes
