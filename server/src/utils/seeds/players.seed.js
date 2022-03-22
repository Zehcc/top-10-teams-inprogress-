const mongoose = require('mongoose');
const Player = require('../../api/players/players.model');

require('dotenv').config();

const URIDB = process.env.MONGO_DB;

const players = [
    {
        name: "",
        age: "",
        nationality: "",
        img: ""
    },
   
]

mongoose.connect(URIDB, { useNewUrlParser: true, useUnifiedTopology: true }).then(async () => {
    const allPlayers = await Player.find();
    if (allPlayers.length) {
        await Player.collection.drop();
        console.log('TODO BORRADO')
    }
}).catch((err) => player.error('HAY UN ERROR EN EL BORRADO')).then(async () => {
    await Player.insertMany(players);
    console.info('Creado')
}).catch((err) => console.error('HAY UN ERROR EN EL CREADO')).finally(() => mongoose.disconnect());