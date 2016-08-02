//프로젝트 정보 스키마
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//샘플 스키마
var Project = new Schema({
  username: String,
  title: String,
  description: String,
  imgId: String,
  imgKeyword: [String],
  postingDate: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Project', Posting);
