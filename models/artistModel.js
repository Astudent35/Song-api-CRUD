const mongoose = require('mongoose')

const artistSchema = mongoose.Schema(
    {
        name: {
            type: String
        },
        dateofbirth: { type: Date }
    }
)

const Artist = mongoose.model('Artist', artistSchema);

module.exports = Artist;