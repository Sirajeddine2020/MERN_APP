const User = require("../models/contact");
const express = require("express");
const router = express.Router();

//@Api http:localhost:7000/api/users
//@desc Add new User
//@access public
router.post("/", (req, res) => {
  const newUser = new User({ ...req.body });
  newUser
    .save()
    .then(() => res.send("user has been added with success"))
    .catch((err) => res.send(err));
});

//@Api http:localhost:7000/api/users
//@desc Get All Users
//@access public
router.get("/", (req, res) => {
  User.find()
    .then((users) => res.send(users))
    .catch((err) => res.send(err));
});

//@Api http:localhost:7000/api/users/id
//@desc Get User By Id
//@access public
router.get("/:_id", (req, res) => {
  let { _id } = req.params;
  User.find({ _id })
    .then((user) => res.send(user))
    .catch((err) => res.send(err));
});

//@Api http:localhost:7000/api/users/id
//@desc Delete Users by Id
//@access public
router.delete("/:_id", (req, res) => {
  // let id = req.params._id
  let { _id } = req.params;
  User.findByIdAndDelete({ _id })
    .then(res.send("User has been deleted"))
    .catch((err) => res.send(err));
});

//@Api http:localhost:7000/api/users/id
//@desc Update Users by Id
//@access public
router.put("/:_id", (req, res) => {
  let { _id } = req.params;
  User.findByIdAndUpdate({ _id }, { $set: { ...req.body } })
    .then(() => res.send("User has been updated"))
    .catch((err) => res.send(err));
});

module.exports = router;
