'use strict'

const Schema = use('Schema')

class UsersTableSchema extends Schema {

  up () {
    this.create('users', (table) => {
      table.increments()
      table.timestamps()
      table.string('username')
      table.string('passhash')
      table.string('email')
      table.string('imgLocation')
      
    })
  }

  down () {
    this.drop('users')
  }

}

module.exports = UsersTableSchema
