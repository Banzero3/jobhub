import post from '../models/postjob.model.js'
export const postControl=async (req,res) => {
    const {companyName,hrName,hrEmail,hrPhone,jobTitle,jobDescription,numbYrs,vacancy,salary,requirements,companyAddress}=req.body;
    const newPost=new post({companyName,hrName,hrEmail,hrPhone,jobTitle,jobDescription,numbYrs,vacancy,salary,requirements,companyAddress})
    await newPost.save()
    res.json("post add")
}