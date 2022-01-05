const router = require('express').Router();
const { Artist, ArtistSong } = require('../../models');
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth');

// get route to find Artist songs
router.get("/", (req, res) => {
    ArtistSong.findAll({
            attributes: ["id", "artist_id", "song_id"],
            include: [{
                model: Artist,
                as: "artist",
                attributes: ["id", "name"],
            }, ],
        })
        .then((dbArtistSongData) => {
            res.json(dbArtistSongData);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

//get a single ArtistSong by  id
router.get("/:id", (req, res) => {
    ArtistSong.findOne({
            where: {
                id: req.params.id,
            },
            attributes: ["id", "artist_id", "song_id"],
            include: [{
                model: Artist,
                as: "artist",
                attributes: ["id", "name"],
            }, ],
        })
        .then((dbArtistSongData) => {
            if (!dbArtistSongData) {
                res.status(404).json({ message: "No ArtistSong found with this id" });
                return;
            }
            res.json(dbArtistSongData);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});


router.post("/", (req, res) => {
    // to add a new ArtistSong
    ArtistSong.create({
            name: req.body.name,
            artist_id: req.body.artist_id,
            song_id: req.body.song_id
        })
        .then((dbArtistSongData) => {
            res.json(dbArtistSongData);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

//update ArtistSong by id
router.put("/:id", (req, res) => {

    ArtistSong.update({
            name: req.body.name,
        }, {
            where: {
                id: req.params.id,
            },
        })
        .then((dbArtistSongData) => {
            if (!dbArtistSongData) {
                res.status(404).json({ message: "No ArtistSong found with this id" });
                return;
            }
            res.json(dbArtistSongData);
        })
        .catch((err) => {
            console.log(err);
            res.json(err);
        });
});

//to delete ArtistSong by id
router.delete("/:id", (req, res) => {
    ArtistSong.destroy({
            where: {
                id: req.params.id,
            },
        })
        .then((dbArtistSongData) => {
            if (!dbArtistSongData) {
                res.status(404).json({ message: "No ArtistSong found with this id" });
                return;
            }
            res.json(dbArtistSongData);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;