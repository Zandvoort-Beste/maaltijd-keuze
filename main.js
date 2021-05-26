const prompt = require('prompt-sync')({sigint: true});
const nieuwGerecht = require('./nieuw-gerecht');
const {_gerechten} = require('./gerechten');
let vleesGerechten = []
let visGerechten = []
let vegaGerechten = []

const pyPop = (array, index) => {
    let result = array[index]
    array.splice(index, 1)
    return result
}

const randomLaag = array => {
    return Math.floor(Math.random() * array.length);
}

const sorteren = (gerechtenArray) => {
    vleesGerechten = []
    visGerechten = []
    vegaGerechten = []
    for (let i = 0; i < gerechtenArray.length; i++) {
        switch (gerechtenArray[i]._type) {
            case 'vlees':
                vleesGerechten.push(gerechtenArray[i]);
                break;
            case 'vis':
                visGerechten.push(gerechtenArray[i]);
                break;
            case 'vega':
                vegaGerechten.push(gerechtenArray[i]);
                break;
            default:
                throw 'Sorten is mislukt'
                break;
        }
        
    }
}

// Gekozen is de uitkomst van de selectie
let gekozen = [];

// Hier kies ik de gerechten
const watEten = (type,hoeveel) => {
    for (let i = 0; i < hoeveel; i++) {
        let random = randomLaag(type);
        gekozen.push(pyPop(type, random));
    }
}

const aansturen = (vis,vlees,vega) => {
    sorteren(_gerechten)
    gekozen = []
    watEten(vegaGerechten,vega);
    watEten(visGerechten,vis);
    watEten(vleesGerechten,vlees);
}

const boodschappen = array  => {
    console.log('\n Deze boodschappen zijn nodig: \n');
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]._name);
        array[i].ingredients;
        console.log('');
    }
}

console.clear()
//let hoevaak = prompt('Hoe vaak vega? ');
let happy = ''
do {
    aansturen(1,1,1)
for (let i = 0; i < gekozen.length; i++) {
    if (gekozen[i]._bijGerechtReq) {
        gekozen[i].bijGerecht;
    }
    console.log(`${i+1}: ${gekozen[i].naam}`);
}
happy = prompt('Blij met die resultaat? ').toLowerCase();
if (happy == "ja") {
    boodschappen(gekozen);
}
} while (happy != 'ja');

