const PlayerRoutes = require('express').Router();
const { isAuth } = require('../../middlewares/auth.middleware');
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
PlayerRoutes.post('/', upload.single('img'), [isAuth], postOne);
PlayerRoutes.patch('/:id', upload.single('img'), [isAuth], patchOne);
PlayerRoutes.delete('/:id', [isAuth], deleteOne);

module.exports = PlayerRoutes;