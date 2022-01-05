const { Song } = require('../models/Song')

const songData = [
    {
        name: 'Kick, Push',
        imgur_url: 'https://i.imgur.com/cvsDCK5.jpg'
    },
    {
        name: 'The Show Goes On',
        imgur_url: 'https://i.imgur.com/VECWYjd.jpg'
    },
    {
        name: 'Hey Jude',
        imgur_url: 'https://i.imgur.com/obgzuXR.jpg'
    },
    {
        name: 'Come Together',
        imgur_url: 'https://i.imgur.com/32erXJI.jpg'
    },
    {
        name: 'Knockin\' On Heaven\'s Door',
        imgur_url: 'https://i.imgur.com/zGaIESx.jpg'
    },
    {
        name: 'Like A Rolling Stone',
        imgur_url: 'https://i.imgur.com/vhyPRax.jpg'
    },
    {
        name: 'Rolling In the Deep',
        imgur_url: 'https://i.imgur.com/4dY7XdL.png'
    },
    {
        name: 'Easy On Me',
        imgur_url: 'https://i.imgur.com/H3PA7Qm.jpg'
    },
    {
        name: 'C.R.E.A.M (Cash Rules Everything Around Me)',
        imgur_url: 'https://i.imgur.com/kHEesiO.jpg'
    },
    {
        name: 'Protect Ya Neck',
        imgur_url: 'https://i.imgur.com/4sziPvJ.jpg'
    },
    {
        name: 'All of Me',
        imgur_url: 'https://i.imgur.com/7w2OLwi.jpg'
    },
    {
        name: 'You Deserve It All',
        imgur_url: 'https://i.imgur.com/PCHkqll.jpg'
    },
    {
        name: 'The Box',
        imgur_url: 'https://i.imgur.com/IcmT1gf.jpg'
    },
    {
        name: 'Down Below',
        imgur_url: 'https://i.imgur.com/eYEDvoa.jpg'
    },
    {
        name: 'Empire State of Mind',
        imgur_url: 'https://i.imgur.com/VamMkSm.jpg'
    },
    {
        name: '99 Problems',
        imgur_url: 'https://i.imgur.com/Xc0JLrc.jpg'
    },
    {
        name: 'Snow (Hey Oh)',
        imgur_url: 'https://i.imgur.com/xoNFh2u.jpg'
    },
    {
        name: 'Under the Bridge',
        imgur_url: 'https://i.imgur.com/L2Ktti0.jpg'
    },
    {
        name: 'Halo',
        imgur_url: 'https://i.imgur.com/UouOClS.png'
    },
    {
        name: 'Crazy In Love',
        imgur_url: 'https://i.imgur.com/WdeJcTW.png'
    }
]

// const seedSongs = () => Song.bulkCreate(songData);

module.exports = songData;