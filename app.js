const express=require('express')

const app=express()



app.get("/",(req,res)=>{
    res.json("The app is developed using expressjs framework only")
})




app.listen(5000,()=>{
    console.log("App is running on the port in 5000")
})