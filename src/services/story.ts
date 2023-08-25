import { OPENAI_API_KEY } from '@config'
import OpenAI from 'openai'
import { ChatCompletion } from 'openai/resources/chat'

const openai = new OpenAI({
  apiKey: OPENAI_API_KEY, // defaults to process.env["OPENAI_API_KEY"]
})

interface StoryParams {
  keywords: string
  wordCount: number
  genre: string
}

const getPrompt = ({ keywords, wordCount, genre }: StoryParams): string => {
  return `Genera una historia de ${wordCount} palabras en el género ${genre} que incluya las palabras clave: ${keywords}.`
}

export const generateStory = async (
  params: StoryParams,
): Promise<ChatCompletion['choices']> => {
  console.log({ params })
  const completion = await openai.chat.completions.create({
    messages: [{ role: 'user', content: getPrompt(params) }],
    model: 'gpt-3.5-turbo',
  })
  return completion.choices
}
