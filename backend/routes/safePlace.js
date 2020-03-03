const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Place = require("../models/SafePlace");

const { isLoggedIn } = require("../middlewares/auth");

router.post("/create", isLoggedIn, async (req, res, next) => {
  const { name, description, properties, geometry } = req.body;
  const { _id } = req.user;
  const safeplace = await Place.create({
    name,
    description,
    properties,
    geometry,
    owner: _id
  })
  const populateSafePlace = await (await Place.findById(safeplace._id)).populated('owner')
  const user = await User.findByIdAndUpdate(
      _id,
      {$push: {places: safeplace._id}},
      {new: true}
  ).populate({
      path: 'places',
      populate: {
          path: 'owner',
          model: 'User'
      }
  })
  return res.status(201).json({user, place: populateSafePlace})
});

router.get('/getPlaces', isLoggedIn, async (req,res,next) => {
    const {_id} = req.user
    const {places} = await User.findById(_id).populate('places')
    res.status(200).json({places})
})

router.get('/getAllPlaces', async(req,res,next) => {
  const places = await Place.find()
  res.status(200).json({places})
})

router.delete('/delete/:id', isLoggedIn, async (req,res,next) => {
  const {id} = req.params
  await Place.findByIdAndDelete(id)
  res.status(200).json({msg: 'Delete Place'})
})

module.exports = router;
