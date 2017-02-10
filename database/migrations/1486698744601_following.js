'use strict'

const Schema = use('Schema')

class FollowingTableSchema extends Schema {

  up () {
    this.create('following', (table) => {
      table.increments()
      table.timestamps()
      table.integer('userID')
      table.integer('followingID')
    })
  }

  down () {
    this.drop('following')
  }

}

module.exports = FollowingTableSchema
