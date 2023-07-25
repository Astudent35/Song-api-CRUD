const express = require('express');
const Song = require('../models/artistModel');
const {getArtists, getArtist, createArtist, updateArtist, deleteArtist} = require('../controller/artistController')

const router = express.Router();

router.get('/', getArtists)

router.get('/:id', getArtist)

router.post('/', createArtist)

router.put('/:id', updateArtist)

router.delete('/:id', deleteArtist)

module.exports = router;