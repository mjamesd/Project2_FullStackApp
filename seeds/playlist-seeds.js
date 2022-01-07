const { Playlist } = require('../models/Playlist')

const playlistData = [
    {
        name: 'Bangin Hip Hop Playlist',
        user_id: 1,
        description: "The best old school and new school hip hop tracks",
        isPublic: true
    },
    {
        name: 'Rockin Rock Playlist',
        user_id: 2,
        description: "Jam out with some great rock tracks",
        isPublic: true
    },
    {
        name: 'Give Me Everything Playlist',
        user_id: 3,
        description: "All the available music in our catalogue ",
        isPublic: true
    },
    {
        name: 'Soulful Soul Playlist',
        user_id: 4,
        description: "Get in your feelings with some Soul",
        isPublic: true
    }
]

// const seedGenres = () => Genre.bulkCreate(genreData);

module.exports = playlistData;