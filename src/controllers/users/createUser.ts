import { UserService } from '@services'
import { Request, Response } from 'express'
import httpStatus from 'http-status-codes'

export const createUser = async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body

    await UserService.createUserDB({
      username: username as string,
      email: email as string,
      password: password as string,
    })

    res.sendStatus(httpStatus.CREATED).json({
      ok: true,
      msg: 'User created',
    })
  } catch (error: any) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      ok: false,
      statusCode: error.code,
      msg: httpStatus.getStatusText(httpStatus.INTERNAL_SERVER_ERROR),
    })
  }
}
