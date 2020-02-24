const express = require("express");
const router = express.Router();
const User = require("../models/User");
const passport = require("../config/passport");
const { isLoggedIn } = require("../middlewares/auth");
const upload = require('../config/cloudinary')

router.post("/signup", (req, res, next) => {
  User.register(req.body, req.body.password)
    .then(user => res.status(201).json({ user, msg: "User created!" }))
    .catch(err =>
      res.status(500).json({ err, msg: "Something went wrong try again!" })
    );
});

router.post("/login", passport.authenticate("local"), (req, res, next) => {
  const { user } = req;
  res.status(200).json({ user, msg: "Welcome!" });
});

router.get("/logout", isLoggedIn, (req, res, next) => {
  req.logout();
  res.status(200).json({ msg: "Logged out" });
});

router.get("/profile", isLoggedIn, (req, res, next) => {
  User.findById(req.user._id)
    .then(user => res.status(200).json({ user }))
    .catch(err => res.status(500).json({ err }));
});

router.post("/edit", isLoggedIn, async (req, res, next) => {
  const { id } = req.user;
  const { email, name, genre } = req.body;
  const user = await User.findByIdAndUpdate(id, { email, name, genre } , { new: true });
  res.status(201).json({ msg: "User Updated", user });
});

router.post("/upload", isLoggedIn, upload.single("image"), async (req, res, next) => {
  const { id } = req.user;
  const { secure_url: image } = req.file;
  const user = await User.findByIdAndUpdate(id, { image }, { new: true });
  res.status(200).json({ msg: "User porfile image updated", user });
});

module.exports = router;
