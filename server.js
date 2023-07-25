require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose')
const songRoute = require('./routes/songRoute');
const artistRoute = require('./routes/artistRoute');
// const errorMiddleware = require("./middleware/errorMiddleware")
const app = express();
var cors = require('cors')

const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//Routes
app.use('/api/songs', songRoute)
app.use('/api/artists', artistRoute)

app.get('/', (req, res) => {
    res.send('Hello NODE API')
})

// app.use(errorMiddleware);

mongoose.
connect(MONGO_URL)
.then(() => {
    app.listen(PORT, () => {
        console.log(`Node api app is running on port 3000`)
    })
    console.log('connected to mongoDB')
}).catch((error) => {
    console.log(error)
})