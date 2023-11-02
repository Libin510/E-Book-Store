const jwt=require('jsonwebtoken')


const protect = async(req,res,next)=>{
    let token;

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try{
            token=req.headers.authorization.split(" ")[1];
            jwt.verify(token,process.env.jwt_secret);
            next();

        }catch(error){
            res.status(401).send("login failed");
            throw new Error("not authorized token");

        }
    }
    if(!token){
        res.status(401).send("no token");
        throw new Error("not authorized token")
    }
}

module.exports=protect;