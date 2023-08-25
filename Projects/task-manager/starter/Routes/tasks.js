const express=require('express')

const router=express.Router()
const {getAlltask,createTask,deleteTask,updateTask,getTask}=require('../Controllers/tasks')

router.route('/').get(getAlltask).post(createTask)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)
  
module.exports=router;