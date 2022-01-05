const router = require('express').Router();
const { Artist, Song } = require('../../models');

// Prefix of these routes is '/api/artists'

// Create a new artist
router.post('/', async(req, res) => {
    try {
        const artistData = await Artist.create(req.body);
        // res.status(200).json(artistData);
        res.render('new-artist', { artist: artistData });
    } catch (err) {
        res.status(400).json(err);
    }
});


//get route for all the Artists
router.get("/", async(req, res) => {
    Artist.findAll({
            attributes: ["id", "name"],
            include: [{
                model: Song,
                as: "songs",
                attributes: ["id", "name"],
            }, ],
        })
        .then((dbArtistData) => {
            res.json(dbArtistData);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

//get a single Artist by  id
router.get("/:id", (req, res) => {
    Artist.findOne({
            where: {
                id: req.params.id,
            },
            attributes: ["id", "name"],
            include: [{
                model: Song,
                as: "songs",
                attributes: ["id", "name"],
            }, ],
        })
        .then((dbArtistData) => {
            if (!dbArtistData) {
                res.status(404).json({ message: "No Artist found with this id" });
                return;
            }
            res.json(dbArtistData);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});


router.post("/", (req, res) => {
    // to add a new Artist
    Artist.create({
            name: req.body.name,

        })
        .then((dbArtistData) => {
            res.json(dbArtistData);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

//update Artist by id
router.put("/:id", (req, res) => {
    console.log("id", req.params.id);
    Artist.update({
            name: req.body.name,
        }, {
            where: {
                id: req.params.id,
            },
        })
        .then((dbArtistData) => {
            if (!dbArtistData) {
                res.status(404).json({ message: "No Artist found with this id" });
                return;
            }
            res.json(dbArtistData);
        })
        .catch((err) => {
            console.log(err);
            res.json(err);
        });
});

//to delete Artist by id
router.delete("/:id", (req, res) => {
    Artist.destroy({
            where: {
                id: req.params.id,
            },
        })
        .then((dbArtistData) => {
            if (!dbArtistData) {
                res.status(404).json({ message: "No Artist found with this id" });
                return;
            }
            res.json(dbArtistData);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;