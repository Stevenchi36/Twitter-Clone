'use strict'

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route')

Route.get('/', 'HomeTweetsController.index')
//Route.on('/login').render('login')
//LOGIN
Route.get('/login', 'AuthController.index')
Route.post('/login', 'AuthController.login')
//LOGOUT
Route.get('/logout', 'AuthController.index')
Route.post('/logout', 'AuthController.logout')
//REGISTER
Route.get('/register', 'RegisterController.index')
Route.post('/register', 'RegisterController.doRegister')
//TWEET
Route.get('tweet/create', 'HomeTweetsController.create')
Route.get('tweet', 'HomeTweetsController.store')
Route.on('/deleteProfile').render('deleteProfile')
Route.on('/me').render('me')
Route.on('/viewTweet').render('showTweet')
Route.on('/tweet').render('makeTweet')
Route.on('/deleteTweet').render('deleteTweet')
Route.on('/editTweet').render('editTweet')