const Player = require('../models/player');


exports.getPlayers = async (req, res) => {
    try {
        const result = await Player.find().select("-__v")
        if (result && result.length !== 0) {
            return res.status(200).json({
                count: result.length,
                players: result.map((player) => {
                    return {
                        ...player.toObject(),
                        request: {
                            type: "GET",
                            url: `http://localhost:3000/player/${player._id}`,
                        },
                    };
                }),
            });
        }
        res.status(404).json({ msg: "Players not found" });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: error,
        });
    }
};

exports.getPlayer = async (req, res) => {
    try {
        const result = await Player.findById(req.params.id).select("-__v");
        if (result) {
            return res.status(200).json({
                ...result.toObject(),
                request: {
                    type: "GET",
                    url: "http://127.0.0.1:3000/player",
                },
            });
        }
        res.status(404).json({ msg: "Player not found" });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: error,
        });
    }
};

exports.postPlayer = async (req, res) => {
    try {
        console.log(req.body)
        const player = new Player(req.body);
        const result = await player.save();
        if (result) {
            return res.status(201).json({
                message: "Your player was created",
                createdBook: {
                    ...result.toObject(),
                    payload: {
                        type: "GET",
                        url: `http://127.0.0.1:3000/player/${result._id}`,
                    },
                },
            });
        }
        res.status(500).json({ msg: "Player was not created" });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error,
        });
    }
};

exports.putPlayer = async (req, res) => {
    try {
        const update = req.body;
        const result = await Player.findByIdAndUpdate(req.params.id, update);
        if (result) {
            return res.status(200).json({
                msg: `Book ${req.params.id} was updated`,
                request: {
                    type: "GET",
                    url: `http://127.0.0.1:3000/player/${req.params.id}`,
                },
            });
        }
        res.status(500).json({ msg: "Player could not be updated" });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: error,
        });
    }
};



exports.deletePlayer = async (req, res) => {
    try {
        const result = await Player.findByIdAndDelete(req.params.id);
        if (result) {
            return res.status(200).json({
                msg: `Player ${result.name}, id: ${result._id} was deleted`,
            });
        }
        res.status(404).json({
            msg: "Player not found",
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: error,
        });
    }
};