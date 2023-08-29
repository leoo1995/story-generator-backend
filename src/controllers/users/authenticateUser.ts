import { AuthService, UserService } from '@services'
import { Request, Response } from 'express'

import httpStatus from 'http-status-codes'
import { validationResult } from 'express-validator'

export const authenticateUser = async (
  req: Request<any, any, { username: string; password: string }>,
  res: Response,
) => {
  try {
    const { username } = req.body
    const user = await UserService.findUserByUsername(username)

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      res.status(httpStatus.BAD_REQUEST).json({
        ok: false,
        msg: 'bad request',
        statusCode: httpStatus.BAD_REQUEST,
        response: errors.mapped(),
      })
      return
    }

    const token = await AuthService.generateToken({
      payload: { _id: user?._id },
      expiresIn: '2h',
    })

    res.status(httpStatus.ACCEPTED).json({
      ok: true,
      msg: 'ok',
      statusCode: httpStatus.OK,
      response: {
        token,
      },
    })
    return
  } catch (error: any) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      ok: false,
      statusCode: error.code,
      msg: httpStatus.getStatusText(httpStatus.INTERNAL_SERVER_ERROR),
    })
  }
}
