const express = require("express");
const router = express.Router();
// const Message = require("../models/message");

// Get all messages from the database
router.get("/", async (req, res) => {
  try {
    // const messages = await Message.find().sort({ timestamp: 1 });
    res.render("index");
    console.log("hello ");
  } catch (err) {
    console.log(err);
    res.status(500).send("Error retrieving messages");
  }
});

// Post a new message to MongoDB
router.post("/send", async (req, res) => {
  try {
    // const newMessage = new Message({
    //   username: req.body.username,
    //   text: req.body.text,
    // });
    // await newMessage.save();
    res.redirect("/");
  } catch (err) {
    console.log(err);
    res.status(500).send("Error sending message");
  }
});

module.exports = router;
