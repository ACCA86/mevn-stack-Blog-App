const mongoose = require('mongoose')
module.exports=()=>{
    mongoose.connect('URL_MongoDB',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>console.log('Connected Database...'))
}
