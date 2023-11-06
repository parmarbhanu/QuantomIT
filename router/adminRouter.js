const router = require("express").Router();
const User = require('../models/adminModel');
const bcrypt = require("bcryptjs");
const jwt=require("jsonwebtoken");


router.post("/register", async (req, res) => {
  try {
    // console.log(req.body);
    const {username,date,email,password} = req.body;
    if( !username||!password ||!date||!email){
          return res.status(400).json({ errorMessage: "Please enter all required fields." });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({
        errorMessage: "An account with this email already exists.",
      });

    // hash the password
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    // save a new user account to the db

    const newUser = new User({
      username,
      date,
      email,
      password:passwordHash,
  
    });

    const savedUser = await newUser.save();

     // sign the token

    const token = jwt.sign(
      {
        user: savedUser._id,
      },
      process.env.JWT_SECRET
    );

   // send the token in a HTTP-only cookie

    res
      .cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
      })
      .send("Successfully Registered");

  } catch (err) {
    console.error(err);
    res.status(500).send("Unsuccessfully");
  }
});




// log in admin
router.post("/login", async (req, res) => {
  try {
    const {email, password } = req.body;
    // console.log(req.body)
    // console.log(req.body)
    if (!email || !password)
      return res
        .status(400)
        .json({ errorMessage: "Please enter all required fields." });
    const existingUser = await User.findOne({ email });
    // console.log(existingUser)
    if (!existingUser)
      return res.status(401).json({ errorMessage: "Wrong email." });
    const passwordCorrect = await bcrypt.compare(password,existingUser.password);
    // console.log(passwordCorrect)
    if (!passwordCorrect)
      return res.status(401).json({ errorMessage: "Wrong password." });
   
      // sign the token

    const token = jwt.sign(
      {
        user: existingUser._id,
      },
      process.env.JWT_SECRET
    );

    // send the token in a HTTP-only cookie

    res
      .cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
      })
      .send();
  } catch (err) {
    console.error(err);
    res.status(402).send(err);
  }
});

router.get("/logout", (req, res) => {
  res
    .cookie("token", "", {
      httpOnly: true,
      expires: new Date(0),
      secure: true,
      sameSite: "none",
    })
    .send();
});

router.get("/isauth", (req, res) => {
  // console.log(req.cookies)
  try {
    const token = req.cookies.token;
    // console.log(:+token)
    if (!token) return res.json(false);
    jwt.verify(token, process.env.JWT_SECRET);
    res.send(true);
  } catch (err) {
    res.json(false);
  }
});

module.exports=router