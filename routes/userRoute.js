const express=require('express')
const route=express.Router()
const {display,getUsers,adduser,updateuser,deleteuser}=require('../controllers/userControllers')
route.get('/',display)
route.get('/get',getUsers)
route.post('/post',adduser)
route.put('/put/:id',updateuser)
route.delete('/delete/:id',deleteuser)





module.exports=route