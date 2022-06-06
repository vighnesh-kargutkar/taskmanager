const express = require("express")
const app =express()
const task = require('./router/task');
const qs=require('qs')
const http =require('http')
const ejs = require("ejs");
const connectDB = require('./db/connect')
require('dotenv').config()
const port=3001
//mideleeware
app.use(express.json())
app.set("view engine", "ejs");
app.use( express.urlencoded({ extended: false }))
app.use(express.static("public"));
//routes
app.use('/api/v1/tasks',task)
// app.get('/',(req,res)=>{
//     res.send('task manager app')
// })

const start =async()=>{
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(port,console.log(`server is listening on port ${3000}`))
    } catch (error) {
        console.log(error);
    }
}
start()