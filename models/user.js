//회원 정보 스키마
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//샘플 스키마
var userSchema = new Schema({
  name: String,
  email: String,
  pw: String,
  imgId: String
});

module.exports = mongoose.model('user', userSchema);
