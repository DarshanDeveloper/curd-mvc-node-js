const express = require('express');
const Alien = require('../models/alien');

exports.find = async (req, res) => {

    try {
      
        const alien = await Alien.find()
        res.json(alien)  

    } catch (e) {
      
        res.send('error' + err)
    }

};


exports.insert = async (req, res) => {

    var insert = new Alien ({
      
        fname:req.body.fname,
        email:req.body.email, 
        mno:req.body.mno
      })

    try {
      
        const a1 = await insert.save()
        res.json(a1)

    } catch (e) {
      
        res.send('error')
    }

};


exports.edit = async (req, res) => {

    try {
      
        const alien = await Alien.find()
        res.json(alien)  

    } catch (e) {
      
        res.send('error' + err)
    }

};