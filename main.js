const prompt = require('prompt-sync')({sigint: true});
const nieuwGerecht = require('./nieuw-gerecht');
const {_gerechten} = require('./gerechten');
let vleesGerechten = [];
let visGerechten = [];
let vegaGerechten = [];
let bijGerechten = [];
let kiesGerecht = [];

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
    if (nieuwProberen == 'ja') {
        gekozen.push(nieuwGerecht());
    }
    if (kiezen == 'ja') {
        gekozen.push(kiesGerecht[0]);
    }
}

// Dit is om de boodschappen te tonen
const boodschappen = array  => {
    console.log('\n Deze boodschappen zijn nodig: \n');
    for (let i = 0; i < array.length; i++) {
        array[i].ingredients;
        console.log('');
    }
}

// Hier print ik de inhoud van gekozen op de console
const gekozenPrint = () => {
    let print
    for (print = 0; print < gekozen.length; print++) {
        if (gekozen[print]._bijGerechtReq && gekozen[print]._bijGerecht == undefined) {
        bijGerechtToevoegen(gekozen[print]);
        }
        console.log(`${print + 1}: ${gekozen[print].naam}`);
    }
}

// Hier zoek ik uit welk gerecht er vervangen moet worden
const vervangen = () => {
    let welke = happy - 1
            let random
        switch (gekozen[welke]._type) {
            case 'vlees':
                random = randomLaag(vleesGerechten)
                gekozen[welke] = pyPop(vleesGerechten, random);
                break;
            case 'vis':
                random = randomLaag(visGerechten)
                gekozen[welke] = pyPop(visGerechten, random);
                break;
            case 'vega':
                random = randomLaag(vegaGerechten)
                gekozen[welke] = pyPop(vegaGerechten, random);
                break;       
            default:
                gekozen[welke] = nieuwGerecht();
                break;
        }
}

// Hier check is of Suus en Juul kut zijn
const kutSuusJuul = () => {
    if (happy !== 'ja' && happy !== 'nee' && isNaN(happy)) {
        happy = prompt('Antwoord moet Ja, Nee of het nummer van het gerecht dat vervangen moet worden: ')
        console.log('')
    }
    if (happy !== 'ja' && happy !== 'nee' && isNaN(happy)) {
        throw 'Kut Suus en Juul!'
    }
    if (happy > gekozen.length) {
        happy = prompt(`Niet bestaand gerecht, kies een getal onder de ${gekozen.length}: `);
    }
    if (happy > gekozen.length) {
        throw 'Kut Suus en Juul!';
    }
}

// Hier kun je een specifiek gerecht kiezen
const kies = () => {
    console.clear();
    for (const i in _gerechten) {
        console.log(`${Number(i) + 1}: ${_gerechten[i].alleGerechten}`);
    }
    console.log('');
    let kiezen = prompt(`Welk gerecht moet erbij zitten? `) - 1;
    switch (_gerechten[kiezen]._type) {
        case 'vlees':
            if (vlees == 0) {
                kies();
            }
            vlees -= 1;
            break;
        case 'vis':
            if (vis == 0) {
                kies();
            }
            vis -= 1;
            break;
        case 'vega':
            if (vega == 0) {
                kies();
            }
            vega -= 1;
            break;
        default:
            throw 'Een bijgerecht kan niet op deze manier gekozen worden'
    }
    kiesGerecht.push(pyPop(_gerechten, kiezen));
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
dagen = Number(dagen);
let vega = Number(prompt('Hoeveel vegetarisch? '));
let vis = Number(prompt('Hoevaak vis? '));
if (dagen < vega + vis) {
    throw 'Kut Suus en Juul!';
}
let nieuwProberen = prompt('Nieuw gerecht proberen? ').toLowerCase();
let kiezen = prompt('Wil je een gerecht kiezen? ').toLowerCase();
if (nieuwProberen == 'ja') {
    dagen -= 1;
}
let vlees = dagen - vega - vis;
if (kiezen == 'ja') {
    kies()
}

do {
    aansturen(vlees,vis,vega);
    console.log('');
    gekozenPrint();
    happy = prompt('Blij met dit resultaat? ').toLowerCase();
    kutSuusJuul();
    while (!isNaN(happy)) {
        console.log('');
        vervangen();
        gekozenPrint();
        happy = prompt('Blij met dit resultaat? ').toLowerCase();
        kutSuusJuul();
    }
} while (happy != 'ja');
boodschappen(gekozen);