'use strict'

const Tweets = use('App/Model/Tweet')

class HomeTweetsController {
    * index (request, response) {
        const tweets = yield Tweets.all()
        yield response.sendView('home', {tweets: tweets.toJSON() })
    }
}

module.exports = HomeTweetsController
