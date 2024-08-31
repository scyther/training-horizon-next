const jwt =require("jsonwebtoken");
const JWT_SECRET=require("../config/jwt");
const { User } = require("../models/user");


function authMiddleware(req,res,next) {
    const tokens = req.headers.authorization;
   const token = tokens.split(" ")[1];
   if (!tokens || !tokens[0]=='Bearer ') {
    return res.status(403).json({
        message:"!!! "
    })
   }
   try {
    const decoded = jwt.verify(token,JWT_SECRET);
   if (decoded) {
        res.userId =decoded.userId;
        next();
   }
   } catch (error) {
    return res.status(403).json({
        message:"!!!!error in middleware "
    })
   }
}
async function trainerAuthMiddleware(req,res,next) {
    const tokens = req.headers.authorization;
   const token = tokens.split(" ")[1];
   if (!tokens || !tokens[0]=='Bearer ') {
    return res.status(403).json({
        message:"!!! "
    })
   }
   try {
    const decoded = jwt.verify(token,JWT_SECRET);
   if (decoded) {
       const trainerId =decoded.userId;
        // console.log(trainerId.role);
        const isValid = await User.findById({_id:trainerId});
        console.log(isValid);
        
      if (isValid.role=="trainer") {
        res.trainerId = trainerId ;
        next();
      }else{
        res.json({
            msg:"join as a teacher!"
        })
      }
   }
   } catch (error) {
    return res.status(403).json({
        message:"!!!!error in middleware ",
        error,
    })
   }
}

module.exports ={
    authMiddleware,
    trainerAuthMiddleware
};