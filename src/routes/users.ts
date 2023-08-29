import { Router } from 'express'
import { authenticateUser, createUser } from '@controllers/users'
import { authMiddleware } from 'src/middlewares'

const routerUsers = Router()

routerUsers.get('/', (_req, res) => {
  // const { keywords, length, tone } = req.query

  res.send('get stories route')
})

routerUsers.get('/:id', (req, res) => {
  const { id } = req.params
  res.send('id story is ' + id)
})
routerUsers.post('/create', createUser)

routerUsers.post('/authenticate', ...authMiddleware, authenticateUser)

export { routerUsers }
