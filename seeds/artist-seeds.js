const { Artist } = require('../models/Artist')

const artistData = [
    {
        artist_name: 'Lupe Fiasco',
        artistImg_url: 'https://i.imgur.com/D1rGqjE.jpg'
    },
    {
        artist_name: 'The Beatles',
        artistImg_url: 'https://i.imgur.com/9WiJb4o.jpg'
    },
    {
        artist_name: 'Bob Dylan',
        artistImg_url: 'https://i.imgur.com/2C9YZaB.jpg'
    },
    {
        artist_name: 'Adele',
        artistImg_url: 'https://i.imgur.com/th0b2U0.jpg'
    },
    {
        artist_name: 'Wu-Tang Clan',
        artistImg_url: 'https://i.imgur.com/azKcfUF.jpg'
    },
    {
        artist_name: 'John Legend',
        artistImg_url: 'https://i.imgur.com/5bIWg3A.jpg'
    },
    {
        artist_name: 'Roddy Ricch',
        artistImg_url: 'https://i.imgur.com/pZ4o8yf.jpg'
    },
    {
        artist_name: 'Jay-Z',
        artistImg_url: 'https://i.imgur.com/CZO4JNC.jpg'
    },
    {
        artist_name: 'Red Hot Chili Peppers',
        artistImg_url: 'https://i.imgur.com/WoXDni2.jpg'
    },
    {
        artist_name: 'Beyonce',
        artistImg_url: 'https://i.imgur.com/Yop9KxM.jpg'
    }
]

// const seedArtists = () => Artist.bulkCreate(artistData);

module.exports = artistData;