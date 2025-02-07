import * as mongoose from 'mongoose'
import { model } from 'mongoose'
import Comment from './Comments'
const postSchema = new mongoose.Schema(
    {
        user_id: { type: mongoose.Types.ObjectId, required: true },
        created_at: { type: Date, required: true },
        updated_at: { type: Date, required: true },
        content: { type: String, required: true },
        comments: [{ type: mongoose.Types.ObjectId, ref: 'comments'}]
    }
)

//post document middleware 
postSchema.post('remove', (async doc => {
    for (let id of (doc as any).comments) {
            await Comment.findOneAndDelete({_id: id})
        }
    }))
//add virtual field-->commentCount 
postSchema.virtual('commentCount').get(function () {
    return this.comments.length;
})

export default model('posts', postSchema)