import mongoose from "mongoose";

const postSchema=new mongoose.Schema({
    companyName:{
        type:"String",
        required:true
    },
    hrName:{
        type:"String",
        required:true
    },
    hrEmail: {
        type:"String",
        required:true
    },
    hrPhone:{
        type:"String",
        required:true
    },
    jobTitle:{
        type:"String",
        required:true
    },
    jobDescription:{
        type:"String",
        required:true
    },
    numbYrs:{
        type:"String",
        required:true
    },
    vacancy: {
        type:"String",
        required:true
    },
    requirements:{
        type:"String",
        required:true
    },
    companyAddress:{
        type:"String",
        required:true
    },
    },{timestamps:true}
)
 const post=mongoose.model("post",postSchema)

 export default post;