const prompt = require('prompt-sync')({sigint: true});
const nieuwGerecht = require('./nieuw-gerecht');
const {_gerechten} = require('./gerechten')

const pyPop = (array, index) => {
    let result = array[index]
    array.splice(index, 1)
    return result
}

const randomLaag = arrayLength => {
    return Math.floor(Math.random() * arrayLength);
}

// Gekozen is de uitkomst van de selectie
let gekozen = [];

// Hier kies ik vlees
const watEtenVlees = (vlees) => {
    let hoeveelVlees = 0;
    while (hoeveelVlees < vlees) {
        let random = randomLaag(_gerechten.length)
        if (_gerechten[random]._type == 'vlees') {
            if (hoeveelVlees < vlees) {
                gekozen.push(pyPop(_gerechten, random));
                hoeveelVlees++;
            }
        }
    }
}

// Hier kies ik vis
const watEtenVis = (vis) => {
    let hoeveelVis = 0;
    while (hoeveelVis < vis) {
        let random = randomLaag(_gerechten.length)
        if (_gerechten[random]._type == 'vis') {
            if (hoeveelVis < vis) {
                gekozen.push(pyPop(_gerechten, random));
                hoeveelVis++;
            }
        }
    }
}

// Hier kies ik vega
const watEtenVega = (vega) => {
    let hoeveelVega = 0;
    while (hoeveelVega < vega) {
        let random = randomLaag(_gerechten.length)
        if (_gerechten[random]._type == 'vega') {
            if (hoeveelVega < vega) {
                gekozen.push(pyPop(_gerechten, random));
                hoeveelVega++;
            }
        }
    }
}

const aansturen = (vis,vlees,vega) => {
    watEtenVega(vega);
    watEtenVis(vis);
    watEtenVlees(vlees);
}

const boodschappen = array  => {
    console.log('\n Deze boodschappen zijn nodig \n');
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]._name);
        array[i].ingredients;
        console.log('');
    }
}
console.clear()
//let hoevaak = prompt('Hoe vaak vega? ');
aansturen(1,2,2)
for (let i = 0; i < gekozen.length; i++) {
    console.log(`${i+1}: ${gekozen[i]._name} uit ${gekozen[i]._source}`);
}
let happy = prompt('Blij met die resultaat? ').toLowerCase();
if (happy == "ja") {
    boodschappen(gekozen);
}