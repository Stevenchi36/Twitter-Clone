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

Route.on('/').render('home')
Route.on('/login').render('login')
Route.on('/newAccount').render('newAccount')
Route.on('/deleteProfile').render('deleteProfile')
Route.on('/me').render('me')
Route.on('/viewTweet').render('showTweet')
Route.on('/tweet').render('makeTweet')
Route.on('/deleteTweet').render('deleteTweet')
Route.on('/editTweet').render('editTweet')