import { Document, Schema } from 'mongoose'

export interface IUser {
  email: string
  username: string
  password: string
  createdAt?: Date
}

// export type UserDocument = Document<IUser>
// UserDocument['']
