const express = require('express');
const router=express.Router()
const {getalltask,createatask,gettask,updatetask,deletetask}=require('../controller/task.js')

router.route('/').get(getalltask).post(createatask)
router.route('/gud').post(deletetask)
module.exports=router
