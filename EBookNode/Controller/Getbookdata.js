const express=require('express')

const bookdetail =require('../Schema/Bookdataschem')

const app=express()

const getdata=async (req,res)=>{
    const data=await bookdetail.find()
    res.json(data)
}

module.exports =getdata