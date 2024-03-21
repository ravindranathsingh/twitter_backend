import Tweet from '../models/tweet.js'
import CrudRepository from './crud-repo.js'

class TweetRepository extends CrudRepository {
    async create(data) {
        try {
            const tweet = await Tweet.create(data)
            return tweet;
        } catch (error) {
            console.log(error)
        }
    }

    async getWithComments(id) {
        try {
            const tweet = await Tweet.findById(id).populate({path: 'comment'}).lean()
            return tweet;
        } catch (error) {
            console.log(error)
        }
    }

    async getAll(offSet, limit) {
        try {
            const tweet = await Tweet.find().skip(offSet).limit(limit)
            return tweet;
        } catch (error) {
            console.log(error)
        }
    }
}

export default TweetRepository;