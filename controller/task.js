const Task = require("../module/Task")
const getalltask=async(req,res)=>{
    try {
        const task =await Task.find({})
        res.status(201).render("index",{task})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}
const createatask=async(req,res)=>{
    try {
        const name=req.body.name 
        const newtask = new Task({name: name});
        console.log(newtask,name);
        const registered = await newtask.save();
        const task =await Task.find({})
        res.status(201).render("index",{task})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}
const deletetask=async(req,res)=>{
    try {
        console.log(req.body.id,"hello");
        const id=req.body.id
        const taskk=await Task.findOneAndDelete({_id:id})
        const task =await Task.find({})
        res.status(201).render("index",{task})
    } catch (error) {
        res.status(500).json({msg:error})   
    }
}
module.exports={getalltask,createatask,deletetask}