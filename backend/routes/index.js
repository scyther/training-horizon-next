const express =require("express");
const userRouter=require("./user")
const listingRouter=require("./listing")
const trainerRouter =require("./trainer")

const router=express.Router();
// const app=express();
// app.use("/api/v1/user",userRouter);

router.use("/user",userRouter);
router.use("/trainer",trainerRouter);
router.use("/listing",listingRouter);

module.exports =router;