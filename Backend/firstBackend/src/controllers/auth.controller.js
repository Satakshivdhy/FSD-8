import User from "../models/user.model";

export const RegisterUser = (req,res) =>{
    try{
        const {fullName,email, password, phone, gender, dob} = req.body;
        // if input not filled |or| given any empty value
        if(!fullName || !email || !password || !phone || !gender || !dob){
            res.status(400).json({message: "All Fields Required"});
            return;
        }
        //if user already exists
        const existingUser = await User.findOne({email});
        if (existingUser){
            res.status(409).json({message: "Email Already Registered"});
            return;
        }
        // create new user
    } catch (error){

    }
};

export const LoginUser = (req,res) =>{
    res.json({message: "Login Successfull from controller"})
};
export const LogoutUser = (req,res) =>{
    res.json({message: "Logout Successfull from controller"})
};