import express from 'express'
import { createTweet, getTweet } from '../../controller/tweet-controller.js'
import { toggleLike } from '../../controller/like-controller.js'
import { createComment } from '../../controller/comment-controller.js'
import { signUp, login } from '../../controller/auth-controller.js'
import { authenticate } from '../../middleware/authenticate.js'

const router = express.Router();

router.post('/tweets', authenticate, createTweet)
router.post('/likes/toggle', authenticate, toggleLike)
router.post('/comments', authenticate, createComment)
router.post('/signup', signUp)
router.post('/login', login)

router.get('/tweets/:id', getTweet)

export default router;