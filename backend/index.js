import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

import userRouter from './routes/user.js'
const app=express()
app.use(express.json())
app.use(cors());

// OR specify allowed origins:
app.use(
  cors({
    origin: "http://localhost:3000", // Allow frontend
    methods: "GET,POST,PUT,DELETE",  // Allow these methods
    credentials: true,  // Allow cookies if needed
  })
);
mongoose.connect("mongodb+srv://anudeep:anudeep@job-hub.oezcmsc.mongodb.net/?retryWrites=true&w=majority&appName=job-hub");
app.listen(4000,()=>console.log("server is connected"));

app.use("/backend/user",userRouter)