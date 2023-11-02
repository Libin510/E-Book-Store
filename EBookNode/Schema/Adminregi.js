const mongoose=require('mongoose')


const Regi=mongoose.Schema({
    Name:{type:String},
    email:{type:String},
    password:{type:String}
    
})

const ADRegister=mongoose.model("Bookadmin",Regi)

module.exports=ADRegister