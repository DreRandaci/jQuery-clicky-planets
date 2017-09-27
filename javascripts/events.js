'use strict';

const planets = require('./planets');

$('#showButton').mouseover(() => {
    //shows all the planets
    createDomString(planets.getPlanets());
});

const createDomString = (planetsData) => {
    let planetString = '';
    for(var i=0; i<planetsData.length; i++){
        var newPlanet = "";
        newPlanet+=`<div class="planetBox"  id="planetBox-${i}">`;
        newPlanet+=`<div class="planetName hidden">${planetsData[i].name}</div>`;
        newPlanet+=`<img class="planetImage" src="${planetsData[i].url}">`;
        newPlanet+= `</div>`;
        planetString += newPlanet;
    }
    printToDom(planetString);
};

const printToDom = (string) => {
    $('#planetHolder').html(string);
};

module.exports = {};