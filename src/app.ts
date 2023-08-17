import express from 'express'
import { routes } from '@routes'

const app = express()
app.use(express.json())
const PORT = 3000

app.listen(() => {
  console.log(`listening on port ${PORT} ${routes}`)
})
