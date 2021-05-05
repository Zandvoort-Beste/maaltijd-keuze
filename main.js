const prompt = require('prompt-sync')({sigint: true});
const nieuwGerecht = require('./nieuw-gerecht');
const {_bijGrechten,_gerechtenVega,_gerechtenVis,_gerechtenVlees,_hoofdGerechtenVis,_hoofdGerechtenVlees} = require('./gerechten')

// Array van gerechten waar ik mee werk
let gerechtenVlees = [];
let hoofdGerechtenVlees = [];
let bijGrechten = [];
let hoofdGerechtVis = [];
let gerechtenVis = [];
let gerechtenVega = [];

// Gekozen is de uitkomst van de selectie
let gekozen = [];

// Dit is de .pop(index) functie
const pyPop = (arr, index) => {
    let result = arr[index]
    arr.splice(index, 1)
    return result
}

// Random nummer generator naar beneden afgerond
const randomLow = num => {
    return Math.floor(Math.random() * num)
}

//Hier print ik de inhoud van een array
const print = arr => {
    for (let i = 0; i < arr.length; i++) {
        console.log(`${i+1}. ${arr[i]}`);
    }
}

// Dit kiest vis gerechten
const watEtenVis = vis => {
    for (let i = 0; i < vis; i++) {
        if (hoofdGerechtVis.length == 0 && gerechtenVis.length == 0) {
            throw 'Niet genoeg vis gerechten';
        }
        let totaalOfNiet = Math.floor(Math.random()*2);
        if (totaalOfNiet == 1 && hoofdGerechtVis.length > 0) {
            let temp = [];
            temp.push(pyPop(hoofdGerechtVis, randomLow(hoofdGerechtVis.length)) + ' met');
            temp.push(pyPop(bijGrechten, randomLow(bijGrechten.length)));
            gekozen.push(temp.join(' '));
        } 
        else {
            if (gerechtenVis.length == 0) {
                i--;
            }
            else {
                gekozen.push(pyPop(gerechtenVis, randomLow(gerechtenVis.length)));
            }
        }
    }
}

// Dit kiest vlees gerechten
const watEtenVlees = (hoeveelDagen,vega,vis) => {
    for (let i = 0; i < hoeveelDagen - (vega + vis); i++) {
        if (hoofdGerechtenVlees.length == 0 && gerechtenVlees.length == 0) {
            throw 'Niet genoeg vlees gerechten';
        }
        let totaalOfNiet = Math.floor(Math.random()*2);
        if (totaalOfNiet == 1 && hoofdGerechtenVlees.length > 0) {
            let temp = [];
            temp.push(pyPop(hoofdGerechtenVlees, randomLow(hoofdGerechtenVlees.length)) + ' met');
            temp.push(pyPop(bijGrechten, randomLow(bijGrechten.length)));
            gekozen.push(temp.join(' '));
        } 
        else {
            if (gerechtenVlees.length == 0) {
                i--;
            }
            else {
                gekozen.push(pyPop(gerechtenVlees, randomLow(gerechtenVlees.length)));
            }
        }
    }
}

// Dit kiest vega gerechten
const watEtenVega = vega => {
    for (let i = 0; i < vega; i++) {
        if (gerechtenVega.length == 0) {
            throw 'Niet genoeg Vega gerechten';
        }
        gekozen.push(pyPop(gerechtenVega, randomLow(gerechtenVega.length)));
    }
}

// Dit stuurt het geheel aan
const keuze = (hoeveelDagen,vega,vis) => {
    watEtenVis(vis);
    watEtenVega(vega);
    watEtenVlees(hoeveelDagen,vega,vis);
}

// Deze functie maakt er een mooi zinnetje van
const wijEten = (hoeveelDagen,vega,vis) => {
    keuze(hoeveelDagen,vega,vis)
    if (gekozen.indexOf('Nieuw gerecht') >= 0) {
        gekozen[gekozen.indexOf('Nieuw gerecht')] = nieuwGerecht();
    }
    print(gekozen)
}

let happy = '';
console.clear();
let dagen = Number(prompt('Voor hoeveel dagen eten? '));
let vega = Number(prompt('Hoeveel vegetarisch? '));
let vis = Number(prompt('Hoevaak vis? '));
if (dagen - vega - vis > _gerechtenVlees.length + _hoofdGerechtenVlees.length) {
    console.log(`Maximaal vlees gerechten overschreden, max is ${_gerechtenVlees.length + _hoofdGerechtenVlees.length} gerechten`);
    dagen = Number(prompt('Voor hoeveel dagen eten? '));
};
if (vega > _gerechtenVega.length) {
    console.log(`Maximaal vega gerechten overschreden, max is ${_gerechtenVega.length} gerechten`);
    vega = Number(prompt('Hoeveel vegetarisch? '));
};
if (vis > _hoofdGerechtenVis.length + _gerechtenVis.length) {
    console.log(`Maximaal vis gerechten overschreden, max is ${_gerechtenVis.length + _hoofdGerechtenVis.length} gerechten`);
    vis = Number(prompt('Hoevaak vis? '));
};

do {
gekozen = [];
gerechtenVlees = _gerechtenVlees.map(x => x);
hoofdGerechtenVlees = _hoofdGerechtenVlees.map(x => x);
bijGrechten = _bijGrechten.map(x => x);
hoofdGerechtVis = _hoofdGerechtenVis.map(x => x);
gerechtenVis = _gerechtenVis.map(x => x);
gerechtenVega = _gerechtenVega.map(x => x);
console.log('');
wijEten(dagen,vega,vis);
console.log('');
happy = prompt('Ben je blij met dit resultaat? Ja, Nee of getal van gerecht te vervangen: ').toLowerCase();
console.log('')
if (happy != 'ja') {
    let getallen = ['1','2','3','4','5','6','7','8','9','10']
    if (getallen.includes(happy)) {
        gekozen[happy - 1] = gerechtenVega[0];
        print(gekozen)
        console.log('');
        happy = prompt('Ben je blij met dit resultaat? Ja of Nee: ').toLowerCase();
    }
}
} while (happy != 'ja');

console.log('Dit is de develop brach')