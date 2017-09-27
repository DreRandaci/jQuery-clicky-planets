'use strict';

let planets = [];

$.get('../db/planets.json').done((data) => {
    planets = data.planets;
}).fail((error) => {
    console.log(error);
});

const getPlanets = () => {
    return planets;
};

module.exports = {getPlanets};