const URegister=require("../Schema/Userregi")
const jwt=require("jsonwebtoken")
const bcrypt=require("bcrypt");

const data=async(req,res)=>{
    const {Name,email,password}=req.body;
    const mail=await URegister.findOne({email})
    const  salt = await bcrypt.genSalt(10);

    const hasheddata=  await bcrypt.hash(password,salt)

    if(mail){
        res.json('User already exist')
    }
    

    else{

    const createuser = await URegister.create({
        Name,
        email,
        password:hasheddata
    })
    res.json({createuser,token:generatetoken(URegister._id)})
}   
};
const generatetoken=(id)=>{
    return jwt.sign({id},process.env.jwt_secret,{
        expiresIn:"1d",
    })
}
module.exports=data