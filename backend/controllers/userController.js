const  User = require( "../models/userModel.js");
const bcrypt = require('bcryptjs');
 const signup = async (req, res) => {
    
    const { name, email, password } = req.body;
    if(!email || !password ||!name) {
         res.status(400).json({error:"Please fill all the fields"})
    }
    const hashPassword =  bcrypt.hashSync(password, 12);
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
module.exports = {signup}