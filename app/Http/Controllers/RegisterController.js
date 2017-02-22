'use strict'

class RegisterController {
    * index(request, response) {
            yield response.sendView('newAccount')
    }
}

module.exports = RegisterController
