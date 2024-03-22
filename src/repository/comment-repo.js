import Comment from '../models/comment.js'
import CrudRepository from './crud-repo.js'

class CommentRepository extends CrudRepository {
    constructor() {
        super(Comment)
    }

    async get(id) {
        try {
            const result = await Comment.findById(id).populate({path: 'likes'});
            return result;
        } catch (error) {
            console.log("Something went wrong in crud repo");
            throw error;
        }
    }
}

export default CommentRepository;