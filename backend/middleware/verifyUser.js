const jwt = require('jsonwebtoken')
const verifyUser = async(req, res, next) => {
        try {
            const token = req.cookies.Access_token;
        if(!token){
            return res.status(401).json({error:"You are not logged in"})
        }
        const decoded = await jwt.verify(token,process.env.Secret)
        req.user=decoded
        console.log(decoded)
        next()
        } catch (error) {
            console.error(error)
        }
}
module.exports = { verifyUser}
