const PlayerRoutes = require('express').Router();
const upload = require('../../middlewares/updateFile.middleware');

const {
    getAll,
    getOne,
    postOne,
    patchOne,
    deleteOne
} = require('./players.controller');

PlayerRoutes.get('/', getAll);
PlayerRoutes.get('/:id', getOne);
PlayerRoutes.post('/', upload.single('img'), postOne);
PlayerRoutes.patch('/:id', upload.single('img'), patchOne);
PlayerRoutes.delete('/:id', deleteOne);

module.exports = PlayerRoutes;