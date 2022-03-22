const mongoose = require('mongoose');
const Team = require('../../api/teams/teams.model');

require('dotenv').config();

const URIDB = process.env.MONGO_DB;

const teams = [
    {
        name: "Real Madrid",
        year: "1902",
        stadium: "Santiago Bernabeu",
        img: "https://res.cloudinary.com/dzrcd1gpb/image/upload/v1646943027/Teams/cha1oeg28a0wm9ntjrwy.png",
        players: 
        [
            "622a296584baa215fdfcba03",
            "622a298b84baa215fdfcba05",
            "622a29ab84baa215fdfcba08",
            "622a83d0893753123b9422a5",
            "622a83a9893753123b9422a3",
            "622a837b893753123b9422a1",
            "622a833b893753123b94229f",
            "622a82f3893753123b94229d",
            "622a82ab893753123b94229b",
            "622a8276893753123b942299",
            "622a859a893753123b9422b0"
    ]
    },
    {
        name: "Paris Saint-Germain",
        year: "1970",
        stadium: "Parque de los Príncipes",
        img: "https://res.cloudinary.com/dzrcd1gpb/image/upload/v1646943821/Teams/n5qqvywbkcs6d2td3ovt.png",
        players: 
        [
            "622a5c7215c110665e04443d",
            "622a5caf15c110665e04443f",
            "622a5d4115c110665e044447",
            "622b092f5d54057c61bbe504",
            "622b08e85d54057c61bbe502",
            "622b082c5d54057c61bbe4fb",
            "622b07dd5d54057c61bbe4f9",
            "622b079f5d54057c61bbe4f7",
            "622b07545d54057c61bbe4f5",
            "622b071e5d54057c61bbe4f3",
            "622b08715d54057c61bbe4ff"
    ]
    },
    {
        name: "Bayern München",
        year: "1900",
        stadium: "Allianz Arena",
        img: "https://res.cloudinary.com/dzrcd1gpb/image/upload/v1646951973/Teams/ixvu2iyomlq83zgcggbl.webp",
        players: 
        [
            "6230c2761da2b11e1aad91d7",
            "6230c30d1da2b11e1aad91db",
            "6230c33f1da2b11e1aad91dd",
            "6230c3e71da2b11e1aad91df",
            "6230c4661da2b11e1aad91e1",
            "6230c4b71da2b11e1aad91e3",
            "6230c50e1da2b11e1aad91e5",
            "6230c6b81da2b11e1aad91e7",
            "6230c7761da2b11e1aad91e9",
            "6230c7b51da2b11e1aad91eb",
            "6230c80b1da2b11e1aad91ed"
    ]
    },
    {
        name: "Manchester United",
        year: "1878",
        stadium: "Old Trafford",
        img: "https://res.cloudinary.com/dzrcd1gpb/image/upload/v1646952309/Teams/wev4kn2oti0fqc3klwhl.png",
        players: 
        [
            "623310e5442ccbd15a1146d0",
            "62331139442ccbd15a1146d2",
            "62331176442ccbd15a1146d4",
            "623311e9442ccbd15a1146d6",
            "62331231442ccbd15a1146d8",
            "623312aa442ccbd15a1146da",
            "623312f1442ccbd15a1146dc",
            "62331326442ccbd15a1146de",
            "62331370442ccbd15a1146e0",
            "623313c0442ccbd15a1146e2",
            "62331416442ccbd15a1146e4"
    ]
    },
    {
        name: "Club Atletico de Madrid",
        year: "1903",
        stadium: "Wanda Metropolitano",
        img: "https://res.cloudinary.com/dzrcd1gpb/image/upload/v1646952357/Teams/vngotjtmhwatp6phrm1y.png",
        players: 
        [
            "6230bbcd1da2b11e1aad91c4",
            "6230bb751da2b11e1aad91c2",
            "6230bae61da2b11e1aad91c0",
            "6230baa31da2b11e1aad91be",
            "6230ba721da2b11e1aad91bc",
            "6230ba371da2b11e1aad91ba",
            "6230ba071da2b11e1aad91b8",
            "6230b9d11da2b11e1aad91b6",
            "6230b96e1da2b11e1aad91b4",
            "6230bcb71da2b11e1aad91c8",
            "6230bce21da2b11e1aad91ca"
    ]
    },
    {
        name: "FC Barcelona",
        year: "1899",
        stadium: "Camp Nou",
        img: "https://res.cloudinary.com/dzrcd1gpb/image/upload/v1646952466/Teams/qdminvx5kg9yy8sc0cia.png",
        players: 
        [
            "6230b7531da2b11e1aad91a7",
            "6230b7101da2b11e1aad91a5",
            "6230b6c01da2b11e1aad91a3",
            "6230b6771da2b11e1aad91a1",
            "6230b60b1da2b11e1aad919f",
            "6230b55d1da2b11e1aad919d",
            "622b0ad85d54057c61bbe513",
            "622b0aa95d54057c61bbe511",
            "622b0a7e5d54057c61bbe50f",
            "622b0a505d54057c61bbe50d",
            "622b0a255d54057c61bbe50b"
    ]
    },
    {
        name: "Chelsea",
        year: "1905",
        stadium: "Stamford Bridge",
        img: "https://res.cloudinary.com/dzrcd1gpb/image/upload/v1646952615/Teams/nfsgnsrt1hojxon562cu.png",
        players: 
        [
            "6232ed503019a4991c6c302e",
            "6232ed8a3019a4991c6c3030",
            "6232edda3019a4991c6c3032",
            "6232ee1b3019a4991c6c3034",
            "6232ee4e3019a4991c6c3036",
            "6232eea33019a4991c6c3038",
            "6232eee63019a4991c6c303a",
            "6232ef3d3019a4991c6c303c",
            "6232ef773019a4991c6c303e",
            "6232efb93019a4991c6c3040",
            "6232f0043019a4991c6c3042"
    ]
    },
    {
        name: "Manchester City",
        year: "1880",
        stadium: "Estadio Ciudad de Mánchester",
        img: "https://res.cloudinary.com/dzrcd1gpb/image/upload/v1646952712/Teams/pifrt8hj2imrd3g7fw5h.png",
        players: 
        [
            "622a5e1515c110665e04444d",
            "622a5de215c110665e04444b",
            "622a5d9c15c110665e044449",
            "622a86e3893753123b9422b8",
            "622a8680893753123b9422b6",
            "622a8852893753123b9422c1",
            "622a889f893753123b9422c3",
            "622a88f4893753123b9422c5",
            "622a8932893753123b9422c7",
            "622a896e893753123b9422c9",
            "622a89ae893753123b9422cb"
    ]
    }
   
]

mongoose.connect(URIDB, { useNewUrlParser: true, useUnifiedTopology: true }).then(async () => {
    const allTeams = await Team.find();
    if (allTeams.length) {
        await Team.collection.drop();
        console.log('TODO BORRADO')
    }
}).catch((err) => console.error('HAY UN ERROR EN EL BORRADO')).then(async () => {
    await Team.insertMany(teams);
    console.info('Creado')
}).catch((err) => console.error('HAY UN ERROR EN EL CREADO')).finally(() => mongoose.disconnect());