const mongoose = require('mongoose')

const songSchema = mongoose.Schema(
    {
        name: {
            type: String
        },
        artist: {
            type: String
        },
        url: {
            type: String
        }
    }
)

const Song = mongoose.model('Song', songSchema);

module.exports = Song;