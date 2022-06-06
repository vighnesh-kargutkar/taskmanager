const mongoose =require('mongoose')
const taskschema =new mongoose.Schema({
    name:{
        type:String,
        required:[true,'must provide name'],
        trim:true,
        maxlength:[10,'name should be less than 10 cha']
    },
    completed:{
        type:Boolean,
        default:false
    },
})
module.exports=mongoose.model('Task',taskschema )