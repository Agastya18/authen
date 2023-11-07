const  User = require( "../models/userModel.js");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

 const signup = async (req, res) => {
    
    const { name, email, password } = req.body;
    if(!email || !password ||!name) {
         res.status(400).json({error:"Please fill all the fields"})
    }
    const hashPassword =  bcrypt.hashSync(password, 10);
    try {
      const newUser=  await User.create({
            name,
            email,
            password:hashPassword
        })
        
        res.status(201).json({message:"User created successfully",newUser})
        process.exit()

    } catch (error) {
        console.log(error);
    }
}
const signin = async(req,res)=>{
 const { password, email } = req.body;
 console.log(email,password)
 try {
    const verifyUser = await User.findOne({email:email})
    if(!verifyUser){
       return  res.status(400).json({error:"User not found"})
    }
    const verifyPassword = bcrypt.compareSync(password, verifyUser.password);
    if(!verifyPassword){
        return res.status(400).json({error:"Invalid credentials"})
    }
    const token = jwt.sign({id:verifyUser._id},process.env.Secret)
    const expireTime = new Date(Date.now() + 3600000)
    res.cookie('Access_token', token, { httpOnly: true,expires:expireTime }).status(200).json({message:"User logged in successfully",token,verifyUser})
 } catch (error) {
    console.log(error);
 }
   

}
const signOut = (req,res)=>{
 res.clearCookie('Access_token').status(200).json({message:'User logged out successfully'})
}
module.exports = {signup,signin,signOut}