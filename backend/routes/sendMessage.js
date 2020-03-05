const express = require("express");
const router = express.Router();
const User = require("../models/User");

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const { isLoggedIn } = require("../middlewares/auth");

const client = require("twilio")(accountSid, authToken);

// Cant automatizate the phone number add - must pay
router.get("/addPhone", (req, res) => {
  client.validationRequests
    .create({
      friendlyName: "My Home Phone Number",
      phoneNumber: "+14158675310"
    })
    .then(message => {
      res.status(201).json({ message: "Created" });
    });
});

router.post("/send-text", isLoggedIn, async (req, res) => {
  const { _id, name } = req.user;
  const center = req.body;
  const { contacts } = await User.findById(_id).populate("contacts");
  contacts.forEach(e => {
    client.messages
      .create({
        body: `BSafe - Help request sended by ${name}, current postion: (${center[0]},${center[1]})`,
        from: "+18555940198",
        to: `+52${e.phone}`
      })
      .then(message => {
        res.status(201).json({ message: "Sended" });
      })
      .catch(err => {
        res.status(400).json({ message: "Not Sended" });
      });
  });
});

module.exports = router;
