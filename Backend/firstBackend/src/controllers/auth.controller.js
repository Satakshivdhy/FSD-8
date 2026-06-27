import User from "../models/user.model.js";
import bcrypt from "bcrypt";


export const RegisterUser = async (req, res, next) => {
  try {
    console.log(0);
    const { fullName, email, password, phone, gender, dob } = req.body; //getting request from frontend
    // if input not filled |or| given any empty value
    console.log(1);

    if (!fullName || !email || !password || !phone || !gender || !dob) {
      const error = new Error("All fields required");
      error.statusCode = 400;
      return next(error);
      //   res.status(400).json({ message: "All Fields Required" });
    }
    console.log(2);
    //if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      const error = new Error("Email Already Registered");
      error.statusCode = 409;
      return next(error);
      //   res.status(409).json({ message: "Email Already Registered" });
    }
    console.log(3);

    const photoUrl = `https://placehold.co/600x400?text=${fullName.charAt(0).toUpperCase()}`;
    console.log(4);

    const photo = {
      url: photoUrl,
      publicId: null,
    };
    // create new user
    console.log(5);
    const SALT =await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, SALT)
    const newUser = await User.create({
      fullName,
      email,
      password:hashedPassword,
      phone,
      gender,
      dob,
      photo,
    });
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    next();
    // res.status(500).json({ message: "Internal server error" });
  }
};

export const LoginUser = async (req, res, next) => {
  try {
    console.log("a");
    
    const { email, password } = req.body;
    if (!email || !password) {
      const error = new Error("All fields required");
      error.statusCode = 400;
      return next(error);
    }
    console.log("b");
    
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      const error = new Error("Email not Registered");
      error.statusCode = 404;
      return next(error);
    } 
    console.log("c");
    

    // if (password !== existingUser.password) {
    //   const error = new Error("Incorrect Password");
    //   error.statusCode = 401;
    //   return next(error);
    // }
    console.log("d");

    // password encryption
    const isVerified = await bcrypt.compare(password,existingUser.password)
    if(!isVerified){
      const error = new Error("Incorrect Password");
      error.statusCode = 401;
      return next(error);
    }

    res.status(200).json({
      message: "Welcome Back",
      data: existingUser,
    });

  } catch (error) {
    console.log(error.message);
    next();
  }
};
export const LogoutUser = (req, res) => {
  res.json({ message: "Logout Successfull from controller" });
};
