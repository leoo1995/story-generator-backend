import { UserService } from '@services/UserService'
import { check } from 'express-validator'
import bcrypt from 'bcrypt'

const checkUsername = () =>
  check('username').custom(async (value, { req }) => {
    const user = await UserService.findUserByUsername(value)
    if (!user) {
      throw new Error('User not found')
    }
    req.usernameValidationPassed = true
  })

const checkPassword = () =>
  check('password').custom(async (value, { req }) => {
    if (!req.usernameValidationPassed) return
    const user = await UserService.findUserByUsername(req.body.username)
    const validPassword = await bcrypt.compare(value, user?.password || '')

    if (!validPassword) {
      throw new Error('Invalid password')
    }
  })
export const authMiddleware = [checkUsername(), checkPassword()]
