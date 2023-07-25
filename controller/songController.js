const Song = require('../models/songModel')
const asyncHandler = require('express-async-handler')

// Get all songs
const getSongs = asyncHandler(async(req, res) => {
    try {
        const songs = await Song.find({});
        res.status(200).json({songs});
    } catch (error) {
        res.status(500);
        throw new Error(error.message)
    }
})

// Get song by ID
const getSong = asyncHandler(async(req, res) => {
    try{
        const {id} = req.params;
        const song = await Song.findById(id);
        res.status(200).json({song})
    }catch (error) {
        res.status(500);
        throw new Error(error.message)
    }
})

// Create Song
const createSong = asyncHandler(async(req, res) => {
    try{
        const song = await Song.create(req.body)
        res.status(200).json(song);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
})

// Update song
const updateSong = asyncHandler(async(req, res) => {
    try {
        const {id} = req.params;
        const song = await Song.findByIdAndUpdate(id, req.body);
        if (!song) {
            res.status(404);
            throw new Error(`Cannot find any song with the ID ${id}`)
        }
        const updatedSong = await Song.findById(id);
        res.status(200).json(updatedSong);
    } catch (error) {
        res.status(500);
        throw new Error(error.message)
    }
})

// Delete songs
const deleteSong = asyncHandler(async(req, res) => {
    try {
        const {id} = req.params;
        const song = await Song.findByIdAndDelete(id);
        if (!song){
            res.status(404);
            throw new Error(`Cannot find any song with the ID ${id}`)
        }
        res.status(200).json(song)
    } catch (error) {
        res.status(500);
        throw new Error(error.message)
    }
})

module.exports = {
    getSongs,
    getSong,
    createSong,
    updateSong,
    deleteSong
}