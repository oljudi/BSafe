const express = require('express')
const router = express.Router()
const User = require('../models/User')
const Contact = require('../models/Contact')

const {isLoggedIn} = require('../middlewares/auth')

router.post('/create', isLoggedIn, async (req,res,next) => {
    const {name,email,phone} = req.body
    const {_id} = req.user
    const contact = await Contact.create({ name, email, phone, owner: _id})
    const populateContact = await Contact.findById(contact._id).populate('owner')
    const user = await User.findByIdAndUpdate(
        _id,
        {$push: {contacts: contact._id}},
        {new: true}
    ).populate({
        path: 'contacts',
        populate: {
            path: 'owner',
            model: 'User'
        }
    })
    return res.status(201).json({user, contact: populateContact})
})

router.get('/getContacts', isLoggedIn, async (req,res,next) => {
    const {_id} = req.user
    const {contacts} = await User.findById(_id).populate('contacts')
    res.status(200).json({contacts})
})

module.exports = router;
