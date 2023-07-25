const Artist = require('../models/artistModel')
const asyncHandler = require('express-async-handler')

// Get all songs
const getArtists = asyncHandler(async(req, res) => {
    try {
        const artists = await Artist.find({});
        res.status(200).json({artists});
    } catch (error) {
        res.status(500);
        throw new Error(error.message)
    }
})

// Get song by ID
const getArtist = asyncHandler(async(req, res) => {
    try{
        const {id} = req.params;
        const artist = await Artist.findById(id);
        res.status(200).json({artist})
    }catch (error) {
        res.status(500);
        throw new Error(error.message)
    }
})

// Create Artist
const createArtist = asyncHandler(async(req, res) => {
    try{
        const artist = await Artist.create(req.body)
        res.status(200).json(artist);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
})

// Update song
const updateArtist = asyncHandler(async(req, res) => {
    try {
        const {id} = req.params;
        const artist = await Artist.findByIdAndUpdate(id, req.body);
        if (!artist) {
            res.status(404);
            throw new Error(`Cannot find any artist with the ID ${id}`)
        }
        const updatedArtist = await Artist.findById(id);
        res.status(200).json(updatedArtist);
    } catch (error) {
        res.status(500);
        throw new Error(error.message)
    }
})

// Delete songs
const deleteArtist = asyncHandler(async(req, res) => {
    try {
        const {id} = req.params;
        const artist = await Artist.findByIdAndDelete(id);
        if (!artist){
            res.status(404);
            throw new Error(`Cannot find any artist with the ID ${id}`)
        }
        res.status(200).json(artist)
    } catch (error) {
        res.status(500);
        throw new Error(error.message)
    }
})

module.exports = {
    getArtists,
    getArtist,
    createArtist,
    updateArtist,
    deleteArtist
}