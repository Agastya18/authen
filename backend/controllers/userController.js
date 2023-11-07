const  User = require( "../models/userModel.js");

const bcrypt = require('bcryptjs');


const updateUser= async(req,res,next)=>{
   
    if(req.user.id!=req.params.id){
        // console.log(req.user.id,req.param.id)
        res.status(401).json({error:"You are not authorized to update this user"})
    }
    try {
        if (req.body.password) {
            req.body.password = bcrypt.hashSync(req.body.password, 10);
          }
          const updatedUser= await User.findByIdAndUpdate(req.params.id, req.body,{new:true})
      res.status(200).json({message:"User updated successfully",updatedUser})
    } catch (error) {
        console.log(error)
    }
}
const deleteUser= async(req,res,next)=>{
    if(req.user.id!=req.params.id){
        res.status(401).json({error:"You are not authorized to delete this user"})
    }
    try {
        const deletedUser= await User.findByIdAndDelete(req.params.id)
      res.status(200).json({message:"User deleted successfully",deletedUser})
    } catch (error) {
        console.log(error)
    }
}
module.exports =  {updateUser,deleteUser}