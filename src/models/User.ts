import { type IUser } from '@typing/models'
import { model, Schema } from 'mongoose'

const UserSchema = new Schema<IUser>({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
})

const UserModel = model('User', UserSchema)

export default UserModel
