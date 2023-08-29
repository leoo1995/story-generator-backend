import { type IStory } from '@typing/models'
import { model, Schema } from 'mongoose'

const StorySchema = new Schema<IStory>({
  content: { type: String, required: true },
  desiredWordCount: { type: Number, required: true },
  title: { type: String, required: true },
  keywords: { type: String, required: true },
  genre: { type: String, required: true },
})

const StoryModel = model('Story', StorySchema)

export default StoryModel
