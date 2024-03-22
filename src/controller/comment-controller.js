import { CommentService } from '../services/index.js'

const commentService = new CommentService();

export const createComment = async ( req, res ) => {
    try {
        const response = await commentService.create(req.query.modelId, req.query.modelType, req.body.userId, req.body.content )
        return res.status(201).json({
            data: response,
            success: true,
            message: 'Successfully created a new tweet',
            err: {}
        })
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Something went wrong',
            err: error
        })
    }
}