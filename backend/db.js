const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://127.0.0.1:27017/newyear');


const todoSchema = new Schema({
    title: String,
    description: String,
    done: Boolean
});
const todo = mongoose.model('todo', todoSchema);
module.exports = todo;