import { getTweet } from '../../src/controller/tweet-controller.js'
import { TweetService } from '../../src/services/index.js'
import { mockRequest, mockResponse } from '../mocker.js'

jest.mock('../../src/services/index.js')

test('should return tweets', async () => {
    const req = mockRequest();
    const res = mockResponse();
    const response = [
        {
            content: 'Tweet 1'
        }, 
        {
            content: 'Tweet 2'
        }
    ];
    (TweetService.prototype.get).mockReturnValue(response);
    await getTweet(req, res);
    expect(res.json).toHaveBeenCalledWith({
        success: true,
        message: 'Successfully fetched the tweet',
        data: response,
        err: {}
    });
})