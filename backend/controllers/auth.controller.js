import User from "../models/user.model.js"
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signup = async (req,res)=>{
    // res.send("Signup route");
    try{
        console.log(req.body)
        const {fullName, username , password , confirmpassword , gender} = req.body;
        if(password!==confirmpassword){
            return res.status(400).json({error:"Password and Confirm Password do not match"});
        }
        const user = await User.findOne({username});
        if(user){
            return res.status(400).json({error:"User already exists"});
        }

        const boyProfilePic=`https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlProfilePic=`https://avatar.iran.liara.run/public/girl?username=${username}`;

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);

        const newUser = new User({
            fullName,
            username,
            password:hashedPassword,
            gender,
            profilePicture: gender==="male"? boyProfilePic:girlProfilePic
        })

       if(newUser){
           generateTokenAndSetCookie(newUser._id,res);
           await newUser.save();
           res.status(201).json({
               _id:newUser._id,
               fullName:newUser.fullName,
               username:newUser.username, 
               profilePicture:newUser.profilePicture
           })
       }
       else{
         res.status(400).json({error:"Invalid User Data"});
       }

    }catch(error){
        console.log("Error in signup route",error.message);
        res.status(500).json({error:"Server Error"});
    }
}  
export const login = async (req,res)=>{
   try{
       const {username,password} = req.body;
       const user = await User.findOne({username});
       const isPasswordCorrect = await bcrypt.compare(password,user?.password || ""); 
       if(!user || !isPasswordCorrect){
           return res.status(400).json({error:"Invalid Credentials"});
       }
        generateTokenAndSetCookie(user._id,res);
        res.status(200).json({
            _id:user._id,
            fullName:user.fullName,
            username:user.username,
            profilePicture:user.profilePicture
        
        })

   }
   catch(error){
       console.log("Error in login controller",error.message);
       res.status(500).json({error:"Server Error"});
   }
}
export const logout =  (req,res)=>{
    try{
       res.cookie("jwt","",{maxAge:0});
       res.status(200).json({message:"Logged out successfully"});
    }
    catch(error){
        console.log("Error in logout controller",error.message);
        res.status(500).json({error:"Server Error"});
    }
}