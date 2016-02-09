/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  connection = 'mongo',
  attributes: {
    // User ID
    id: {// User's ID
      type: 'integer',
      primaryKey: true,
      unique: true
    },
    roles: {// User Roles List
      type: 'array',
      defaultsTo: []
      notNull: true // Can't Use Not Null on Array Argument
    }
  }
};

