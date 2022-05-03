const mongoose = require('mongoose')
module.exports=()=>{
    mongoose.connect('mongodb+srv://admin:6861737@cluster0.0ydh0.mongodb.net/test',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>console.log('Connected Database...'))
}