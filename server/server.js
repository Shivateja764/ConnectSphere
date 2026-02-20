const express=require("express")
const app =express()
require("dotenv").config()
const {connectDB}=require("./config/db.js")

connectDB()
const authRoutes=require('./Routes/authRoutes.js')
const {errorMiddleware}=require("./middlewares/Error.js")
app.use(express.json())
app.use(express.urlencoded())

app.use("/api/v1/auth",authRoutes)
app.get("/",(req,res)=>{
   res.send("hi, iam running fine") 
})


app.use((req,res)=>{
    res.status(404).json({
    success: false,
    statusCode: 404,
    message: "api not found",
    error: {
    code: "api_not_found",
    
  }
 
})

})

//global error handling miidleware 
app.use(errorMiddleware)


app.listen(process.env.PORT,()=>{
    console.log("server started on port " + process.env.PORT)
})