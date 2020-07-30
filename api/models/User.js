const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for User
let User = new Schema({
  first_name: {
    type: String
  },
  last_name: {
    type: String
  },
  email: {
    type: String
  }
},{
  collection: 'user'
});

User.index({ first_name: 'text', last_name: 'text', email: 'text'});

module.exports = mongoose.model('User', User);