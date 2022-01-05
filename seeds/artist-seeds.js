const { Artist } = require('../models/Artist')

const artistData = [
    {
        name: 'Lupe Fiasco',
        imgur_url: 'https://i.imgur.com/D1rGqjE.jpg'
    },
    {
        name: 'The Beatles',
        imgur_url: 'https://i.imgur.com/9WiJb4o.jpg'
    },
    {
        name: 'Bob Dylan',
        imgur_url: 'https://i.imgur.com/2C9YZaB.jpg'
    },
    {
        name: 'Adele',
        imgur_url: 'https://i.imgur.com/th0b2U0.jpg'
    },
    {
        name: 'Wu-Tang Clan',
        imgur_url: 'https://i.imgur.com/azKcfUF.jpg'
    },
    {
        name: 'John Legend',
        imgur_url: 'https://i.imgur.com/5bIWg3A.jpg'
    },
    {
        name: 'Roddy Ricch',
        imgur_url: 'https://i.imgur.com/pZ4o8yf.jpg'
    },
    {
        name: 'Jay-Z',
        imgur_url: 'https://i.imgur.com/CZO4JNC.jpg'
    },
    {
        name: 'Red Hot Chili Peppers',
        imgur_url: 'https://i.imgur.com/WoXDni2.jpg'
    },
    {
        name: 'Beyonce',
        imgur_url: 'https://i.imgur.com/Yop9KxM.jpg'
    }
]

// const seedArtists = () => Artist.bulkCreate(artistData);

module.exports = artistData;