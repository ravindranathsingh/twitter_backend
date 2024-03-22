import { CommentRepository, TweetRepository } from '../repository/index.js'

class CommentService {
    constructor() {
        this.tweetRepository = new TweetRepository();
        this.commentRepository = new CommentRepository();
    }

    async create( modelId, modelType, userId, content ) {
        try {
            if(modelType == 'Tweet') {
                var commentable = await this.tweetRepository.find(modelId)
            } else if(modelType == 'Comment') {
                var commentable = await this.commentRepository.get(modelId)
            } else {
                throw new Error('Unknown model type')
            }
            const comment = await this.commentRepository.create({
                content: content,
                userId: userId,
                onModel: modelType,
                commentable: modelId,
                comments: []
            })
            commentable.comments.push(comment)
            await commentable.save();
            return comment;
        } catch (error) {
            console.log(error)
        }
    }
}

export default CommentService;