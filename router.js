import express from "express";

export const userRouter = express.Router();

userRouter.get("/",(req,res)=>res.send("user index"))
userRouter.get("/edit",(req,res)=>res.send("edit index") )
userRouter.get("/password",(req,res)=>res.send("password index") )
