const { Song } = require('../models/Song')

const songData = [
    {
        song_name: 'Kick, Push',
        songImg_url: 'https://i.imgur.com/cvsDCK5.jpg'
    },
    {
        song_name: 'The Show Goes On',
        songImg_url: 'https://i.imgur.com/VECWYjd.jpg'
    },
    {
        song_name: 'Hey Jude',
        songImg_url: 'https://i.imgur.com/obgzuXR.jpg'
    },
    {
        song_name: 'Come Together',
        songImg_url: 'https://i.imgur.com/32erXJI.jpg'
    },
    {
        song_name: 'Knockin\' On Heaven\'s Door',
        songImg_url: 'https://i.imgur.com/zGaIESx.jpg'
    },
    {
        song_name: 'Like A Rolling Stone',
        songImg_url: 'https://i.imgur.com/vhyPRax.jpg'
    },
    {
        song_name: 'Rolling In the Deep',
        songImg_url: 'https://i.imgur.com/4dY7XdL.png'
    },
    {
        song_name: 'Easy On Me',
        songImg_url: 'https://i.imgur.com/H3PA7Qm.jpg'
    },
    {
        song_name: 'C.R.E.A.M (Cash Rules Everything Around Me)',
        songImg_url: 'https://i.imgur.com/kHEesiO.jpg'
    },
    {
        song_name: 'Protect Ya Neck',
        songImg_url: 'https://i.imgur.com/4sziPvJ.jpg'
    },
    {
        song_name: 'All of Me',
        songImg_url: 'https://i.imgur.com/7w2OLwi.jpg'
    },
    {
        song_name: 'You Deserve It All',
        songImg_url: 'https://i.imgur.com/PCHkqll.jpg'
    },
    {
        song_name: 'The Box',
        songImg_url: 'https://i.imgur.com/IcmT1gf.jpg'
    },
    {
        song_name: 'Down Below',
        songImg_url: 'https://i.imgur.com/eYEDvoa.jpg'
    },
    {
        song_name: 'Jay-Z',
        songImg_url: 'https://i.imgur.com/CZO4JNC.jpg'
    },
    {
        song_name: 'Empire State of Mind',
        songImg_url: 'https://i.imgur.com/VamMkSm.jpg'
    },
    {
        song_name: '99 Problems',
        songImg_url: 'https://i.imgur.com/Xc0JLrc.jpg'
    },
    {
        song_name: 'Snow (Hey Oh)',
        songImg_url: 'https://i.imgur.com/xoNFh2u.jpg'
    },
    {
        song_name: 'Under the Bridge',
        songImg_url: 'https://i.imgur.com/L2Ktti0.jpg'
    },
    {
        song_name: 'Halo',
        songImg_url: 'https://i.imgur.com/UouOClS.png'
    },
    {
        song_name: 'Crazy In Love',
        songImg_url: 'https://i.imgur.com/WdeJcTW.png'
    }
]

const seedSongs = () => Song.bulkCreate(songData);

module.exports = seedSongs;