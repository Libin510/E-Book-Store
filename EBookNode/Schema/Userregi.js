const mongoose=require('mongoose')


const Regi=mongoose.Schema({
    Name:{type:String},
    email:{type:String},
    password:{type:String}
})

const URegister=mongoose.model("Bookuser",Regi)

module.exports=URegister