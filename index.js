import express from 'express'
import* as dotenv from 'dotenv'
import initApp from "./app.router.js";
dotenv.config()
const app=express()
const port =5000



initApp(app,express)

app.listen(port,()=>{
    console.log(`server is running on ${port}`);
})





