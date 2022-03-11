const express = require('express');

const cors = require('cors');

const { connect } = require('./src/utils/database/db');

const { configCloudinary } = require('./src/utils/cloudinary/config');

const TeamRoutes = require('./src/api/teams/teams.routes');
const PlayerRoutes = require('./src/api/players/players.routes');

const PORT = process.env.PORT || 8080;

const app = express();

connect();
configCloudinary();

app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:4200'],
    credentials: true
}));

app.use(express.json({ limit: '5mb' }))

app.use(express.urlencoded({
    limit: '5mb',
    extended: true
}));

app.use('/api/teams', TeamRoutes);
app.use('/api/players', PlayerRoutes);

app.use('/api', (req, res, next) => {
    return res.json(documentation);
});

app.use('*', (req, res, next) => {
    const error = new Error();
    error.status = 404;
    error.message = 'Route not found';
    return next(error);
});

app.use((error, req, res, next) => {
    return res.status(error.status || 500).json(error.message || 'Unexpected error');
});

const server = app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`)
});