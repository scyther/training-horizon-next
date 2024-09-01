const mongoose = require('mongoose')
const dotenv =  require('dotenv');
const { connect } = require('http2');
dotenv.config();

const connectDB = async ()=>    {
    try{
        await mongoose.connect(process.env.MONGO_URI)
            .then(()=>  {
                console.log("Connect to DB!!!")
            })
        } 
        catch(e)   {
        console.log("error:" +e)
        }
}

module.exports = connectDB;

