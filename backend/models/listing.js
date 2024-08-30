const mongoose =require("../config/db")

const listingSchema= new mongoose.Schema({
    trainerId: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true,
    },
    category:{
        type:String,
        required:true,
        maxLength:15,
        trim:true,
    },
    title:{
        type:String,
        required:true,
        maxLength:30,
    },
    price:{
        type:Number,
        // required:true,
        minLength:1,
    },
    quantity:{
        type:Number,
        // required:true,
    },
    startDate:{
        type:Date,
        // required:true,    
    },
    endDate:{
        type:Date,
    },
    days:{
        type:Number,
        required:true,
        minLength:1,
    },
    gender:{
        type:String,
        required:true,
        maxLength:10,
        trim:true,
    },
    startTime:{
        type:Date,
        // required:true,    
    },
    endTime:{
        type:Date,
        // required:true,    
    },
    ageGroup:{
        type:String,
        required:true,
        trim:true,
    },
    description:{
        type:String,
        required:true,
        minLength:10,
    },
})

const Listing=mongoose.model('listings',listingSchema);

module.exports ={
    Listing
};

