const express = require('express');
const Song = require('../models/songModel');
const {getSongs, getSong, createSong, updateSong, deleteSong} = require('../controller/songController')

const router = express.Router();

router.get('/', getSongs)

router.get('/:id', getSong)

router.post('/', createSong)

router.put('/:id', updateSong)

router.delete('/:id', deleteSong)

module.exports = router;