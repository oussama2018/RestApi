const User=require('../model/userSchema')
const display=(req,res)=>{res.send('.....')}
// GET :  RETURN ALL USERS 
const getUsers=async(req,res)=>{
    try {
        const users=await User.find()
        res.status(200).json({msg:'get all users',users:users})
    } catch (err) {
        res.status(500).json({msg:'something get wrong',err:err})
    }
}
// POST :  ADD A NEW USER TO THE DATABASE 
const adduser=async(req,res)=>{
    try {
        const newuser=await new User(req.body)
        newuser.save()
        res.status(201).json({msg:'new user added',newuser:newuser})
    } catch (err) {
        res.status(500).json({msg:'something get wrong',err:err})
    }
}
//       PUT : EDIT A USER BY ID 
const updateuser=async(req,res)=>{
    try {
        const updateusers=await User.findByIdAndUpdate({_id:req.params.id},{...req.body})
        
        res.status(201).json({msg:'user update',updateusers:updateusers})
    } catch (err) {
        res.status(500).json({msg:'something get wrong',err:err})
    }
}
//       DELETE : REMOVE A USER BY ID 
const deleteuser=async(req,res)=>{
    try {
        const deleteusers=await User.findByIdAndDelete({_id:req.params.id},{...req.body})
        
        res.status(201).json({msg:'user deleted',deleteusers:deleteusers})
    } catch (err) {
        res.status(500).json({msg:'something get wrong',err:err})
    }
}

module.exports={display,getUsers,adduser,updateuser,deleteuser}