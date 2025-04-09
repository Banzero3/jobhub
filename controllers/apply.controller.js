import User from '../models/apply.model.js'
export const applyControl=async (req,res)=>{
    const {firstName,lastName,email,phoneNumber,posFor,coverLetter,heardFrom}=req.body
    const newUser=new User({firstName,lastName,email,phoneNumber,posFor,coverLetter,heardFrom})
    await newUser.save()
    res.json("User added");
}