import { Router } from 'express'
import { generateStory } from '@services'

const routerStories = Router()

routerStories.get('/', (_req, res) => {
  // const { keywords, length, tone } = req.query

  res.send('get stories route')
})

routerStories.get('/:id', (req, res) => {
  const { id } = req.params
  res.send('id story is ' + id)
})
routerStories.post('/generate', async (req, res) => {
  const { keywords, wordCount, genre } = req.body
  const choice = await generateStory({
    keywords: keywords as string,
    wordCount: +wordCount,
    genre: genre as string,
  })
  res.send(choice)
})

export { routerStories }
