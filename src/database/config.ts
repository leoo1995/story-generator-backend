import { MONGO_STORIES_DB_URI } from '@config'
import mongoose from 'mongoose'

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_STORIES_DB_URI as string)
    console.log('Database connected')
  } catch (error) {
    console.error(error)
  }
}
