const { Schema,model } = require('mongoose')
const postSchema = new Schema({
    image:String,
    name:String,
    net_worth:String,
    company:String,
    country:String,
    content:String,
    column:String,
})

module.exports = model('Post',postSchema)