const bookdetail= require('../Schema/Bookdataschem')
const jwt=require("jsonwebtoken")


const Book=async(req,res)=>{
    const {Name,Image,Author,Publisher,Price,Year,Availability}=req.body;
    const name=await bookdetail.findOne({Name})
   

    if(name){
        res.json('User already exist')
    }
    

    else{

    const createuser = await bookdetail.create({
        Name,
        Image,
        Author,
        Publisher,
        Price,
        Year,
        Availability
        
    })
    res.json(createuser)
}   
};

module.exports=Book