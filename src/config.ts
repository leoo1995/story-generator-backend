import dotenv from 'dotenv'

dotenv.config()

export const OPENAI_API_KEY = process.env.OPENAI_API_KEY

export const DB_MONGO_USERNAME = process.env.DB_MONGO_USERNAME

export const DB_MONGO_PASSWORD = process.env.DB_MONGO_PASSWORD

export const MONGO_STORIES_DB_URI = process.env.MONGO_STORIES_DB_URI

export const PRIVATE_KEY_JWT = process.env.PRIVATE_KEY_JWT
