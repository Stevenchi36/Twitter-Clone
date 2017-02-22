'use strict'

class AuthController {
    * index(request, response) {
            yield response.sendView('login')
    }
}

module.exports = AuthController
