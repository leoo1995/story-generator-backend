import { AuthService, UserService } from '@services'
import { Request, Response } from 'express'
import bcrypt from 'bcrypt'
import httpStatus from 'http-status-codes'

export const authenticateUser = async (
  req: Request<void, any, { username: string; password: string }>,
  res: Response,
) => {
  try {
    const { password, username } = req.body
    const user = await UserService.findUserByUsername(username)
    const validPassword = await bcrypt.compare(password, user?.password || '')

    const token = await AuthService.generateToken({
      payload: { _id: user?._id },
      expiresIn: '2h',
    })

    if (!validPassword)
      res.status(httpStatus.BAD_REQUEST).json({
        ok: false,
        msg: 'Incorrect credentials',
        statusCode: httpStatus.BAD_REQUEST,
        response: null,
      })

    res.status(httpStatus.ACCEPTED).json({
      ok: true,
      msg: 'ok',
      statusCode: httpStatus.OK,
      response: {
        token,
      },
    })
  } catch (error: any) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      ok: false,
      statusCode: error.code,
      msg: httpStatus.getStatusText(httpStatus.INTERNAL_SERVER_ERROR),
    })
  }
}
