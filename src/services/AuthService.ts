import { PRIVATE_KEY_JWT } from '@config'
import jwt from 'jsonwebtoken'
export class AuthService {
  static generateToken({
    payload,
    expiresIn,
  }: {
    payload: any
    expiresIn: string | number
  }): Promise<string> {
    return new Promise((resolve, reject) => {
      jwt.sign(
        payload,
        PRIVATE_KEY_JWT || '',
        { expiresIn },
        (error, encoded) => {
          if (error) {
            console.error(error)
            reject(error)
          }
          if (!encoded) reject(`Token couldn't be generated`)
          resolve(encoded!)
        },
      )
    })
  }
}
