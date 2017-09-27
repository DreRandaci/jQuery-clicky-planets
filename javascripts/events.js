'use strict';

const planets = require('./planets');

$('#showButton').mouseover(() => {
    //shows all the planets
    createDomString(planets.getPlanets());
});

$('#clearText').click(() => {
    $('#searchText').val('');
});

$('#clearPlanets').click(() => {
    let imageInfo = planets.getImageData();
    $('#planetHolder').html(`<h2>${imageInfo.title}</h2>`);
    $('#planetHolder').append(`<p>${imageInfo.explanation}</p>`);
});

$('#searchText').keypress((e) => {
    if (e.key === 'Enter') {
        let txt = $('#searchText').val();
        let results = planets.getPlanets().filter(function(thing){
            //filters planets by first letter
            if (thing.name.indexOf(txt) === 0) {
                return thing.name.indexOf(txt) > -1;
            }
        });
    createDomString(results);
    $('.planetName').removeClass('hidden');
    }
});

const createDomString = (planetsData) => {
    let planetString = '';
    for(var i=0; i<planetsData.length; i++){
        let newPlanet = "";
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

$('body').on('click', '.planetImage', (e) => {
    //removing the hidden planet name by removing the class
    $(e.target).prev().removeClass('hidden');
    // if $(e.target).prev().hasClass('')
});

module.exports = {};