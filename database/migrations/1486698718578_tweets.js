'use strict'

const Schema = use('Schema')

class TweetsTableSchema extends Schema {

  up () {
    this.create('tweets', (table) => {
      table.increments()
      table.timestamps()
      table.integer('userID')
      table.string('content')
    })
  }

  down () {
    this.drop('tweets')
  }

}

module.exports = TweetsTableSchema
