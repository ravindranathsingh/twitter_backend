import express from 'express'
import { createTweet, getTweet } from '../../controller/tweet-controller.js'
import { toggleLike } from '../../controller/like-controller.js'
import { createComment } from '../../controller/comment-controller.js'

const router = express.Router();

router.post('/tweets', createTweet)
router.post('/likes/toggle', toggleLike)
router.post('/comments', createComment)

router.get('/tweets/:id', getTweet)

export default router;