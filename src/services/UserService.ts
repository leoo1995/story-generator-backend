import UserModel from '@models/User'
import { IUser } from '@typing/models'
import bcrypt from 'bcrypt'

export class UserService {
  static async createUserDB(params: IUser) {
    const user = new UserModel(params)
    const salt = await bcrypt.genSalt()
    const hash = await bcrypt.hash(user.password, salt)
    user.password = hash
    await user.save()
    return user
  }
  static async findUserByUsername(username: string) {
    const user = await UserModel.findOne({
      $or: [{ email: username }, { username }],
    })
    return user
  }
}
