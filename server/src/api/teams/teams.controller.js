const Team = require('./teams.model');

const { deleteFile } = require('../../middlewares/deleteFile.middleware');

const getAll = async (req, res, next) => {
    try {
        const teams = await Team.find().populate('players');
        res.status(200).json(teams);
    } catch (error) {
        return next(error)
    }
}

const getOne = async (req, res, next) => {
    try {
        const { id } = req.params;
        const team = await Team.findById(id).populate('players');
        res.status(200).json(team);
    } catch (error) {
        return next(error)
    }
}

const postOne = async (req, res, next) => {
    try {
        const team = new Team();
        team.name = req.body.name;
        team.year = req.body.year;
        team.stadium = req.body.stadium;
        team.players = req.body.players;
        if (req.file) team.img = req.file.path;
        const teamDB = await team.save();
        return res.status(201).json(teamDB)
    } catch (error) {
        return next(error)
    }
}

const patchOne = async (req, res, next) => {
    try {
        const { id } = req.params;
        const team = new Team();
        team.name = req.body.name;
        team.year = req.body.year;
        team.stadium = req.body.stadium;
        team.players = req.body.players;
        if (req.file) team.img = req.file.path
        team._id = id;
        const updateTeam = await Team.findByIdAndUpdate(id, team);
        return res.status(200).json(updateTeam);
    } catch (error) {
        return next(error);
    }
}

const deleteOne = async (req, res, next) => {
    try {
        const { id } = req.params;
        const team = await Team.findByIdAndDelete(id);
        if (team.img) deleteFile(team.img)
        return res.status(200).json(team);
    } catch (error) {
        return next(error);
    }
}

module.exports = {
    getAll,
    getOne,
    postOne,
    patchOne,
    deleteOne
}