const urlTeams = 'http://localhost:8000/api/teams'
let teams = [];
let players = [];
window.onload = () => {
    init();
}

const init = async () => {
    document.querySelector('main').innerHTML = '';
    await getTeams();
    await paintTeams();
}

const getTeams = async() => {
    const result = await fetch(urlTeams);
    const resultjs = await result.json();
    teams = [...resultjs]
}

const paintTeams = () => {
    const teamsDiv = document.createElement('div');
    const teamsList = document.createElement('ul');
    teamsList.className = 'teamsList';
    document.querySelector('main').appendChild(teamsDiv);
    teamsDiv.appendChild(teamsList);
    for (const team of teams) {
        const teamItem = document.createElement('div');
        teamItem.className = 'teamDiv';
        teamItem.innerHTML = `<li class="teamItem"><div class="imgDiv"><img class="team${team._id}" src="${team.img}" alt="${team.name}"></div><div class="textDiv"><h2>${team.name}</h2><h3>${team.stadium}</h3><h3>${team.year}</div></li>`;
        document.querySelector('.teamsList').appendChild(teamItem);
        document.querySelector(`.team${team._id}`).addEventListener('click', () => paintTeam(team._id))
    }
}

const paintTeam = async (id) => {
    for (const team of teams) {
        if (team._id == id) {
            const main = document.querySelector('main');
            main.innerHTML = '';
            const teamDiv = document.createElement('div');
            teamDiv.innerHTML = `<div class="teamLogo"><img src="${team.img}" alt="${team.name}"></div class="playersDiv"><div><ul class="playersList"></ul></div>`;
            main.appendChild(teamDiv);
            const playersList=document.querySelector('.playersList');
            for (const player of team.players) {
                playersList.innerHTML += `<li class ="playersItem"><div class="playerImg"><img src="${player.img}" alt="${player.name}"></div><div class="playerText"><h2>${player.name}</h2><p>Edad: ${player.age}</p><p>${player.nationality}<p></div></li>`;
            }
        }
    }
}