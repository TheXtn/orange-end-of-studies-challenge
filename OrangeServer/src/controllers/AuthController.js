// import { Request, Response, NextFunction } from "express";
// import { sign } from "jsonwebtoken";

const User = require('../models/User');

const add_user = (req, res) => {
    const user = new User(req.body);
    console.log(req.body);

    user.save()
        .then(() => {
            console.log("Added Successfully!");
            res.sendStatus(200);
        })
        .catch((err) => {
            console.log(err);
        })
}

const get_users = (req,res) => {
    User.find()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => console.log(err));
}

// const login = async (req: Request, res: Response, next: NextFunction) => {
//     try {
//       const { email, password } = req.body;
//       const user = await User.findOne({ email });
//       if (!user)
//         return res.status(401).json({ message: "Invalid email or password" });
//       if (!user.comparePassword(password))
//         return res.status(401).json({ message: "Invalid email or password" });
//       const token = sign(
//         { _id: user._id, email: user.email },
//         process.env.JWT_SECRET as string,
//         { expiresIn: "15d" }
//       );
//       return res.status(200).json({ message: "Login successful", token });
//     } catch (error: any) {
//       return res.status(500).json({ message: error.message });
//     }
//   };

//   const register = async (req: Request, res: Response, next: NextFunction) => {
//     try {
//       const user = await User.findOne({ email: req.body.email }).lean().exec();
//       if (user)
//         return res.status(400).json({ message: "User already registered" });
//       const newUser = new User(req.body);
//       await newUser.save();
//       return res.status(201).json({ message: "User created", user });
//     } catch (error: any) {
//       return res.status(500).json({ message: error.message });
//     }
//   };


const login = (req, res) => {
    User.findOne()
        .then((result) => {
            if(result.email === req.body.email && result.password === req.body.password){
                res.sendStatus(200);
                console.log("Login Successfully!");
            }
            else{
                res.sendStatus(400);
            }
        })
        .catch((err) => console.error(err));
}

module.exports = {login,add_user,get_users};