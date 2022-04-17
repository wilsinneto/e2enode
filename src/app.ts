import express from 'express'

export const app = express()

app.use(express.json())

app.post('/lessons', (_, response) => {
    return response.status(201).send()
})