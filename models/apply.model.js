import mongoose from "mongoose";

const UserScehema=new mongoose.Schema({
    firstName:{
        type:"String",
        required:true
    },
    lastName:{
        type:"String",
        required:true
    },
    email:{
        type:"String",
        reuired:true,
        unique:true
    },
    phoneNumber:{
        type:"String",
        required:true,
        unique:true
    },
    posFor:{
        type:"String",
        required:true,
    },
    coverLetter:{
        type:"String",
        required:true
    },
    heardFrom:
    {
        type:"String",
        required:true
    }
},{timestamps:true})

const User=mongoose.model("User",UserScehema)

export default User;