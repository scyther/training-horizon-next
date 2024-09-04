const express =require("express");
const userRouter=require("./user")
const listingRouter=require("./listing")
const adminRouter = require("./adminRoutes")

const router=express.Router();
// const app=express();
// app.use("/api/v1/user",userRouter);

router.use("/user",userRouter);
router.use("/listing",listingRouter);
router.use("/admin",adminRouter);

module.exports =router;