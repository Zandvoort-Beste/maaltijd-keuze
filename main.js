const prompt = require('prompt-sync')({sigint: true});
const nieuwGerecht = require('./nieuw-gerecht');
const {_gerechten} = require('./gerechten');
let vleesGerechten = [];
let visGerechten = [];
let vegaGerechten = [];
let bijGerechten = [_gerechten[9]];

// Mijn befaamde pyPop functie!
const pyPop = (array, index) => {
    let result = array[index]
    array.splice(index, 1)
    return result
}

// Dit maakt kiest een willekeurig nummer op basis van de array lengte
const randomLaag = array => {
    return Math.floor(Math.random() * array.length);
}

// Hier worden alle gerechten in catagorie gesorteerd
const sorteren = (gerechtenArray) => {
    vleesGerechten = []
    visGerechten = []
    vegaGerechten = []
    bijGerechten = []
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
            case 'bijGerecht':
                bijGerechten.push(gerechtenArray[i])
                break;
            default:
                throw 'Sorten is mislukt'
        }
        
    }
}

// Als een gerecht een bijgerecht nodig heeft wordt dat hier geregeld
const bijGerechtToevoegen = (gerecht) => {
    let random = Math.floor(Math.random() * bijGerechten.length);
    gerecht._bijGerecht = bijGerechten[random];
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

// Dit stuurt de functies aan
const aansturen = (vis,vlees,vega) => {
    sorteren(_gerechten)
    gekozen = []
    watEten(vegaGerechten,vega);
    watEten(visGerechten,vis);
    watEten(vleesGerechten,vlees);
}

// Dit is om de boodschappen te tonen
const boodschappen = array  => {
    console.log('\n Deze boodschappen zijn nodig: \n');
    for (let i = 0; i < array.length; i++) {
        array[i].ingredients;
        console.log('');
    }
}

console.clear()
let happy = '';
do {
    aansturen(2,2,2);
    for (let i = 0; i < gekozen.length; i++) {
        if (gekozen[i]._bijGerechtReq) {
        bijGerechtToevoegen(gekozen[i]);
        }
        console.log(`${i+1}: ${gekozen[i].naam}`);
    }
    happy = prompt('Blij met die resultaat? ').toLowerCase();
    if (happy == "ja") {
        boodschappen(gekozen);
    }
} while (happy != 'ja');

