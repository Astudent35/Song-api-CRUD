
# Song-api
This is only the backend for the api, you can test the api using postman or insomnia. The api has three models for song, artist. Within the models you can perform basic CRUD operations 

## Usage/Examples
After cloning this repo, run the following syntax in order to install all of the dependency. 
```javascript
npm i cors dotenv express express-async-handler mongoose nodemon
```
Run the server using the command below
```javascript
yarn dev
```

After running the command you need to configure the .env file, I have included the example for env file within the repo. Btw I used mongo atlas for the database because I had some trouble with installing mongoDB within my system although if you are using the mongoDB it shouldn't be hard to configure it make sure the mongoDB url is set to your localhost. But if you decided to use mongodb atlas make sure to create the database in your account and make sure the url is set accordingly. 

## Test api
So there are 5 controllers that I have create, below are the controllers for songs model,

```javascript
1. getSongs, // Get all of the song with in the database (Get method)
2. getSong, // Get song by ID (Get method)
3. createSong, // Add song into the database (POST method)
4. updateSong, // Update song  (PUT method)
5. deleteSong // Delete song (DELETE method)
```
```javascript
Example usage
getSongs, // http://localhost:3000/api/songs/
getSong, // http://localhost:3000/api/songs/64bd061bf973ac179e812328
createSong, // Add song into the database (POST method)
updateSong, // Update song  (PUT method)
deleteSong // http://localhost:3000/api/songs/64bd061bf973ac179e812328
```

### Adding/Updating song
Within Postman, Choose POST method and enter the localhost url and below select "Body" after choosing "Body" choose the option "raw" and change from "text" to "JSON" after that enter the data in this format

```
{
    "name": "Endless Fashion",
    "artist": "Lil Uzi Vert",
    "url": "https://open.spotify.com/track/41bmnQZoDMQdDh5zyomtW7?si=a019231f0b9f4a66"
}
```
For songs model there are 3 main data you need to add which are "name, artist, url" and if you want to add artist there are 2 main data you need to add which are "name (String), dataofbirth (Date)"