const mongoose=require('mongoose')


const detail=mongoose.Schema({
    Name:{type:String},
    Image:{type:String},
    Author:{type:String},
    Publisher:{type:String},
    Price:{type:Number},
    Year:{type:Number},
    Availability:{type:Boolean}
})

const bookdetail=mongoose.model("Bookdata",detail)

module.exports=bookdetail