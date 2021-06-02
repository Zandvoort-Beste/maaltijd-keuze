const prompt = require('prompt-sync')({sigint: true});
const nieuwGerecht = require('./nieuw-gerecht');
const {_gerechten} = require('./gerechten');
let vleesGerechten = [];
let visGerechten = [];
let vegaGerechten = [];
let bijGerechten = [];

// Mijn befaamde pyPop functie!
const pyPop = (array, index) => {
    let result = array[index];
    array.splice(index, 1);
    return result;
}

// Dit maakt kiest een willekeurig nummer op basis van de array lengte
const randomLaag = array => {
    return Math.floor(Math.random() * array.length);
}

// Hier worden alle gerechten in catagorie gesorteerd
const sorteren = (gerechtenArray) => {
    vleesGerechten = [];
    visGerechten = [];
    vegaGerechten = [];
    bijGerechten = [];
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
                bijGerechten.push(gerechtenArray[i]);
                break;
            default:
                throw 'Sorten is mislukt';
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
        if (type.length == 0) {
            throw `Niet genoeg gerechten`;
        }
        let random = randomLaag(type);
        gekozen.push(pyPop(type, random));
    }
}

// Dit stuurt de functies aan
const aansturen = (vlees,vis,vega) => {
    sorteren(_gerechten);
    gekozen = [];
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

let happy = '';
console.clear();
let dagen = prompt('Voor hoeveel dagen eten? ');
if (dagen == 'hoeveel') {
    sorteren(_gerechten);
    console.log(`${vleesGerechten.length} vlees gerechten`);
    console.log(`${vegaGerechten.length} vega gerechten`);
    console.log(`${visGerechten.length} vis gerechten`);
    dagen = prompt('Voor hoeveel dagen eten? ');
}
dagen = Number(dagen)
let vega = Number(prompt('Hoeveel vegetarisch? '));
let vis = Number(prompt('Hoevaak vis? '));
if (dagen < vega + vis) {
    throw 'Kut Suus en Juul!';
}
let nieuwProberen = prompt('Nieuw gerecht proberen? ').toLowerCase()
if (nieuwProberen == 'ja') {
    dagen -= 1
}
let vlees = dagen - vega - vis;


do {
    aansturen(vlees,vis,vega);
    let newBook = nieuwGerecht()
    console.log('')
    let print
    for (print = 0; print < gekozen.length; print++) {
        if (gekozen[print]._bijGerechtReq) {
        bijGerechtToevoegen(gekozen[print]);
        }
        console.log(`${print + 1}: ${gekozen[print].naam}`);
    }
    if (nieuwProberen == 'ja') {
        gekozen.push(newBook)
        console.log(`${print + 1}: ${gekozen[gekozen.length - 1].naam}`);
    }
    happy = prompt('Blij met dit resultaat? ').toLowerCase();
    if (happy !== 'ja' && happy !== 'nee' && isNaN(happy)) {
        happy = prompt('Antwoord moet Ja, Nee of het nummer van het gerecht dat vervangen moet worden: ')
        console.log('')
    }
    if (happy !== 'ja' && happy !== 'nee' && isNaN(happy)) {
        throw 'Kut Suus en Juul!'
    }
    if (!isNaN(happy)) {
        let welke = happy - 1
            let type = gekozen[welke]._type
        switch (type) {
            case 'vlees':
                gekozen[welke] = vleesGerechten[0];
                break;
            case 'vis':
                gekozen[welke] = visGerechten[0];
                break;
            case 'vega':
                gekozen[welke] = vegaGerechten[0];
                break;       
            default:
                gekozen[welke] = nieuwGerecht();
                break;
        }
        for (let i = 0; i < gekozen.length; i++) {
            if (gekozen[i]._bijGerechtReq) {
            bijGerechtToevoegen(gekozen[i]);
            }
            console.log(`${i+1}: ${gekozen[i].naam}`);
        }
        happy = prompt('Blij met dit resultaat? ').toLowerCase();
    }
} while (happy != 'ja');
boodschappen(gekozen)