const express = require('express');
const Catway = require('../models/catway');
const router = express.Router();


router.get('/', async (req, res) => {
    const catways = await Catway.find();
    res.json(catways);
});
