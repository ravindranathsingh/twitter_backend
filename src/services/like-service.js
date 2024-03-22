import { LikeRepository, TweetRepository, CommentRepository }from '../repository/index.js'

class LikeService {
    constructor() {
        this.likeRepository = new LikeRepository();
        this.tweetRepository = new TweetRepository();
        this.commentRepository = new CommentRepository();
    }

    async toggleLike (modelId, modelType, userId) {
        try {
            if(modelType == 'Tweet') {
                var likeable = await this.tweetRepository.find(modelId);
            } else if(modelType == 'Comment') {
                var likeable = await this.commentRepository.get(modelId)
            } else {
                throw new Error('Unknown model type')
            }
            const exists = await this.likeRepository.findByUserAndLikeable({
                onModel: modelType,
                likeable: modelId,
                user: userId
            })
            if(exists) {
                likeable.likes.pull(exists.id)
                await likeable.save();
                await exists.deleteOne()
                var isAdded = false
            } else{
                const newLike = await this.likeRepository.create({
                    onModel: modelType,
                    likeable: modelId,
                    user: userId
                })
                likeable.likes.push(newLike)
                await likeable.save();

                var isAdded = true
            }
            return isAdded;
        } catch (error) {
            console.log(error)
        }
    }
}

export default LikeService