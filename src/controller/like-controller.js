import { LikeService } from '../services/index.js'

const likeService = new LikeService();

export const toggleLike = async ( req, res ) => {
    try {
        const response = await likeService.toggleLike(req.query.modelId, req.query.modelType, req.user.id )
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