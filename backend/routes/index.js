const express =require("express");
const userRouter=require("./user")
const listingRouter=require("./listing")
const adminRouter = require("./adminRoutes")

const router=express.Router();

router.use("/user",userRouter);
router.use("/listing",listingRouter);
router.use("/admin",adminRouter);

module.exports =router;