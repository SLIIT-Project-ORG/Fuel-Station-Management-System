const mongoose = require("mongoose");

const MONGODB_URL = process.env.MONGODB_URL;

mongoose.connect(MONGODB_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{
    console.log("MongoDB Connected...");
})
.catch((err)=>{
    console.log(err.message);
})