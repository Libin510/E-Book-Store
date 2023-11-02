const bookdetail= require('../Schema/Bookdataschem')

const deletedata=async(req,res)=>{
    const {Name,Image,Author,Publisher,Price,Year,Availability}=req.body;

    const _id=req.params.id;

    const user=await bookdetail.findByIdAndDelete(_id)

    res.json("data deleted")
}

module.exports=deletedata;