const TeamRoutes = require('express').Router();
const { isAuth } = require('../../middlewares/auth.middleware');
const upload = require('../../middlewares/updateFile.middleware');

const {
    getAll,
    getOne,
    postOne,
    patchOne,
    deleteOne
} = require('./teams.controller');

TeamRoutes.get('/', getAll);
TeamRoutes.get('/:id', getOne);
TeamRoutes.post('/', upload.single('img'), [isAuth], postOne);
TeamRoutes.patch('/:id', upload.single('img'), [isAuth], patchOne);
TeamRoutes.delete('/:id', [isAuth], deleteOne);

module.exports = TeamRoutes;