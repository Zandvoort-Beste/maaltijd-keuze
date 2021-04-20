const prompt = require('prompt-sync')({sigint: true});
const nieuwGerecht = require('./nieuw-gerecht')

// Alle mogelijke gerechten
let _gerechtenVlees = ['Nieuw gerecht','Risotto Tijm, Rozemarijn (Italiaanse keuken pg 76)','Thai curry (boek voor mem)','Thom Kha kai (boek voor mem)','Beef Basil (bijbel Thai pg 130)','Nacho’s (Jamie app)','Spanish-style chicken stew (jamie app)','Chicken Phal (Jamie app)',]
let _hoofdGerechtenVlees = ['Gelakte kip (puur genieten pg 46)','Beef met Gember (5 ingrediënten 185)','Gehaktbal met jus',]
let _bijGrechten = ['Spinaziecurry (5 ingrediënten 162)','Zoete aardappel met cajun (5 ingrediënten 175)','Tomaten salade','Gebakken rijst']
let _hoofdGerechtVis = ['Zalm en geitenkaas saladebolletjes','Visragout','Zalm gehaktbal (puur genieten pg 86)','Vis gemalen komijn, paprika en koriander',]
let _gerechtenVis = ['Kabeljauw mosterd sojasaus (puur genieten pg 96)','Sesame Seared Tuna & Sushi Bar Spinach']
let _gerechtenVega = ['Pasta Pesto','Couscous','Jackfruit stoofschotel','Tomatensoep hello fresh','Parel Couscous salade hello fresh']

// Array van gerechten waar ik mee werk
let gerechtenVlees = []
let hoofdGerechtenVlees = []
let bijGrechten = []
let hoofdGerechtVis = []
let gerechtenVis = []
let gerechtenVega = []

// Gekozen is de uitkomst van de selectie
let gekozen = []

// Hier hussel ik een array
const hussel = array => {
  for (let i = array.length - 1; i > 0; --i) {
    let p = Math.floor(Math.random() * (i + 1));
    tmp = array[p];
    array[p] = array[i];
    array[i] = tmp;
  }
}

// Dit kiest vis gerechten
const watEtenVis = vis => {
    for (let i = 0; i < vis; i++) {
        if (hoofdGerechtVis.length == 0 && gerechtenVis.length == 0) {
            throw 'Niet genoeg vis gerechten'
        }
        hussel(hoofdGerechtVis)
        hussel(gerechtenVis)
        hussel(bijGrechten)
        let totaalOfNiet = Math.floor(Math.random()*2)
        if (totaalOfNiet == 1 && hoofdGerechtVis.length > 0) {
            let temp = []
            temp.push(hoofdGerechtVis.pop() + ' met')
            temp.push(bijGrechten.pop())
            gekozen.push(temp.join(' '))
        } 
        else {
            if (gerechtenVis.length == 0) {
                i--
            }
            else {
                gekozen.push(gerechtenVis.pop())
            }
        }
    }
}

// Dit kiest vlees gerechten
const watEtenVlees = (hoeveelDagen,vega,vis) => {
    hussel(gerechtenVlees);
    hussel(hoofdGerechtenVlees);
    hussel(bijGrechten);
    for (let i = 0; i < hoeveelDagen - (vega + vis); i++) {
        if (hoofdGerechtenVlees.length == 0 && gerechtenVlees.length == 0) {
            throw 'Niet genoeg vlees gerechten';
        }
        let totaalOfNiet = Math.floor(Math.random()*2);
        if (totaalOfNiet == 1 && hoofdGerechtenVlees.length > 0) {
            let temp = [];
            temp.push(hoofdGerechtenVlees.pop() + ' met');
            temp.push(bijGrechten.pop());
            gekozen.push(temp.join(' '));
        } 
        else {
            if (gerechtenVlees.length == 0) {
                i--;
            }
            else {
                gekozen.push(gerechtenVlees.pop());
            }
        }
    }
}

// Dit kiest vega gerechten
const watEtenVega = vega => {
    hussel(gerechtenVega)
    for (let i = 0; i < vega; i++) {
        if (gerechtenVega.length == 0) {
            throw 'Niet genoeg Vega gerechten'
        }
        gekozen.push(gerechtenVega.pop())
        
    }
}

// Dit stuurt het geheel aan
const keuze = (hoeveelDagen,vega,vis) => {
    watEtenVis(vis);
    watEtenVega(vega);
    watEtenVlees(hoeveelDagen,vega,vis)
}

// Deze functie maakt er een mooi zinnetje van
const wijEten = (hoeveelDagen,vega,vis) => {
    keuze(hoeveelDagen,vega,vis)
    if (gekozen.indexOf('Nieuw gerecht') >= 0) {
        gekozen[gekozen.indexOf('Nieuw gerecht')] = nieuwGerecht() 
    }
    for (let i = 0; i < gekozen.length; i++) {
        console.log(`${i+1}. ${gekozen[i]}`)
    }
}

let happy = ''
console.clear()
const dagen = Number(prompt('Voor hoeveel dagen eten? '));
const vega = Number(prompt('Hoeveel vegetarisch? '));
const vis = Number(prompt('Hoevaak vis? '));

do {
gekozen = []
console.log(gerechtenVlees)
gerechtenVlees = _gerechtenVlees.map(x => x)
hoofdGerechtenVlees = _hoofdGerechtenVlees.map(x => x)
bijGrechten = _bijGrechten.map(x => x)
hoofdGerechtVis = _hoofdGerechtVis.map(x => x)
gerechtenVis = _gerechtenVis.map(x => x)
gerechtenVega = _gerechtenVega.map(x => x)
console.log(gerechtenVlees)
console.log('');
wijEten(dagen,vega,vis);
console.log('');
happy = prompt('Ben je blij met dit resultaat? Ja of Nee: ').toLowerCase()
} while (happy != 'ja');
