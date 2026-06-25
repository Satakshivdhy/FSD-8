import User from "../models/user.model.js";

export const RegisterUser = async (req, res) => {
  try {
    const { fullName, email, password, phone, gender, dob } = req.body; //getting request from frontend
    // if input not filled |or| given any empty value
    if (!fullName || !email || !password || !phone || !gender || !dob) {
      res.status(400).json({ message: "All Fields Required" });
      return;
    }
    //if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(409).json({ message: "Email Already Registered" });
      return;
    }

    const photoUrl = `https://placehold.co/600x400?text=${fullName.charAt(0).toUpperCase()}`;

    const photo = {
      url: photoUrl,
      publicId: null,
    };
    // create new user
    const newUser = await User.create({
      fullName,
      email,
      password,
      phone,
      gender,
      dob,
      photo,
    });
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const LoginUser = (req, res) => {
  res.json({ message: "Login Successfull from controller" });
};
export const LogoutUser = (req, res) => {
  res.json({ message: "Logout Successfull from controller" });
};
