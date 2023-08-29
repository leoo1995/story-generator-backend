import { Document, Schema } from 'mongoose'

export interface IUser {
  email: string
  username: string
  password: string
  createdAt?: Date
}

export interface IStory {
  content: string
  title: string
  keywords: string
  genre: string
  desiredWordCount: number
  createdAt?: string
}
