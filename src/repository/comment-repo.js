import Comment from '../models/comment.js'
import CrudRepository from './crud-repo.js'

class CommentRepository extends CrudRepository {
    constructor() {
        super(Comment)
    }

    async find(id) {
        try {
            const comment = await Comment.findById(id).populate({path: 'comments'});
            return comment;
        } catch (error) {
            console.log(error);
        }
    }
}

export default CommentRepository;