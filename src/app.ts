import express from 'express'

import cors from 'cors'

import { routerStories, routerUsers } from '@routes'
import { connectDB } from '@database/config'

const app = express()

app.use(express.json())
app.use(cors())

const PORT = 4000

app.use('/stories', routerStories)
app.use('/users', routerUsers)

app.listen(PORT, () => {
  connectDB()
  console.log(`listening on port ${PORT}`)
})
