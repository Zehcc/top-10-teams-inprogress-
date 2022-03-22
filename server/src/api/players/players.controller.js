const Player = require('./players.model');
const { deleteFile } = require('../../middlewares/deleteFile.middleware');
const { setError } = require('../../utils/error/error');

const getAll = async (req, res, next) => {
    try {
        const players = await Player.find();
        res.status(200).json(players);
    } catch (error) {
        return next(setError(404, 'No se han podido recuperar los jugadores'))
    }
}

const getOne = async (req, res, next) => {
    try {
        const { id } = req.params;
        const player = await Player.findById(id);
        res.status(200).json(player);
    } catch (error) {
        return next(setError(404, 'No se ha podido recuperar el jugador'))
    }
}

const postOne = async (req, res, next) => {
    try {
        const player = new Player();
        player.name = req.body.name;
        player.age = req.body.age;
        player.nationality = req.body.nationality
        if (req.file) player.img = req.file.path
        const playerDB = await player.save();
        return res.status(201).json(playerDB)
    } catch (error) {
        return next(setError(404, 'No se ha podido crear el jugador'))
    }
}

const patchOne = async (req, res, next) => {
    try {
        const { id } = req.params;
        const player = new Player();
        player.name = req.body.name;
        player.age = req.body.age;
        player.nationality = req.body.nationality
        if (req.file) player.img = req.file.path
        player._id = id;
        const updatePlayer = await Player.findByIdAndUpdate(id, player);
        return res.status(200).json(updatePlayer);
    } catch (error) {
        return next(setError(404, 'No se ha podido modificar el jugador'));
    }
}

const deleteOne = async (req, res, next) => {
    try {
        const { id } = req.params;
        const player = await Player.findByIdAndDelete(id);
        if (player.img) deleteFile(player.img)
        return res.status(200).json(player);
    } catch (error) {
        return next(setError(404, 'No se ha podido borrar el jugador'));
    }
}

module.exports = {
    getAll,
    getOne,
    postOne,
    patchOne,
    deleteOne
}