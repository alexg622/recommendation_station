const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../../models/User');
const keys = require('../../config/keys');


router.get('/test', (req, res) => res.json({mgs: "users Works"}));

router.post('/signup', (req, res) => {
  console.log(req.body);
  const newUser = new User({
    email: req.body.email,
    username: req.body.username
  })
  newUser.save().then(user => res.json(user));
})

module.exports = router
