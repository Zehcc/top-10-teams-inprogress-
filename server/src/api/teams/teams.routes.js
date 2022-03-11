const TeamRoutes = require('express').Router();
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
TeamRoutes.post('/', upload.single('img'), postOne);
TeamRoutes.patch('/:id', upload.single('img'), patchOne);
TeamRoutes.delete('/:id', deleteOne);

module.exports = TeamRoutes;