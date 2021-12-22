const { Genre } = require('../models/Genre')

const genreData = [
    {
        name: 'Hip Hop/Rap',
    },
    {
        name: 'Rock N\' Roll'
    },
    {
        name: 'R&B'
    },
    {
        name: 'Pop Soul',
    }
]

// const seedGenres = () => Genre.bulkCreate(genreData);

module.exports = genreData;