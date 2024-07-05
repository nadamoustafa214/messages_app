import express from 'express'
import* as dotenv from 'dotenv'
import DBconnection from '././DB/connection.js'
dotenv.config()
const app=express()
const port =5000


DBconnection()


app.listen(port,()=>{
    console.log(`server is running on ${port}`);
})





