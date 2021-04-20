// Alle mogelijke gerechten
let gerechtenVlees = ['Nieuw gerecht','Risotto Tijm, Rozemarijn (Italiaanse keuken pg 76)','Thai curry (boek voor mem)','Thom Kha kai (boek voor mem)','Beef Basil (bijbel Thai pg 130)','Nacho’s (Jamie app)','Spanish-style chicken stew (jamie app)','Chicken Phal (Jamie app)',]
let hoofdGerechtenVlees = ['Gelakte kip (puur genieten pg 46)','Beef met Gember (5 ingrediënten 185)','Gehaktbal met jus',]
let bijGrechten = ['Spinaziecurry (5 ingrediënten 162)','Zoete aardappel met cajun (5 ingrediënten 175)','Tomaten salade','Gebakken rijst']
let hoofdGerechtVis = ['Zalm en geitenkaas saladebolletjes','Visragout','Zalm gehaktbal (puur genieten pg 86)','Vis gemalen komijn, paprika en koriander',]
let gerechtenVis = ['Kabeljauw mosterd sojasaus (puur genieten pg 96)','Sesame Seared Tuna & Sushi Bar Spinach']
let gerechtenVega = ['Pasta Pesto','Couscous','Jackfruit stoofschotel','Tomatensoep hello fresh','Parel Couscous salade hello fresh']

// Gekozen is de uitkomst van de selectie
let gekozen = []

// Gehusselde array maken
const gehusseld = (arr,input) => {
    let y = -1
    input.forEach(i => arr.push(y += 1))
    hussel(arr)
}

// Hier hussel ik een array
function hussel(array)
{
  for (var i = array.length - 1; i > 0; --i) {
    let p = Math.floor(Math.random() * (i + 1)),
    tmp = array[p];
    array[p] = array[i];
    array[i] = tmp;
  }
}

// Dit kiest vis gerechten
const watEtenVis = vis => {
    let nummerHoofd = []
    let nummerBij = []
    let nummerGerecht = []
    gehusseld(nummerHoofd,hoofdGerechtVis)
    gehusseld(nummerBij,bijGrechten)
    gehusseld(nummerGerecht,gerechtenVis)
    for (let i = 0; i < vis; i++) {
        if (nummerHoofd.length == 0 && nummerGerecht.length == 0) {
            throw 'Niet genoeg vis gerechten'
        }
        let totaalOfNiet = Math.floor(Math.random()*2)
        if (totaalOfNiet == 1 && nummerHoofd.length > 0) {
            let temp = []
            temp.push(hoofdGerechtVis[nummerHoofd.shift()] + ' met')
            temp.push(bijGrechten[nummerBij.shift()])
            let outPut = temp.join(' ')
            gekozen.push(outPut)
        } 
        else {
            if (nummerGerecht.length == 0) {
                i--
            }
            else {
                gekozen.push(gerechtenVis[nummerGerecht.shift()])
            }
        }
    }
}

// Dit kiest vlees gerechten
const watEtenVlees = (hoeveelDagen,vega,vis) => {
    let nummerHoofd = []
    let nummerBij = []
    let nummerGerecht = []
    gehusseld(nummerHoofd,hoofdGerechtenVlees)
    gehusseld(nummerBij,bijGrechten)
    gehusseld(nummerGerecht,gerechtenVlees)
    for (let i = 0; i < hoeveelDagen - (vega + vis); i++) {
        if (nummerGerecht.length == 0 && nummerHoofd.length == 0) {
            throw 'Niet genoeg vlees gerechten'
        }
        let totaalOfNiet = Math.floor(Math.random()*2)
        if (totaalOfNiet == 1 && nummerHoofd.length > 0) {
            let temp = []
            temp.push(hoofdGerechtenVlees[nummerHoofd.shift()] + ' met')
            temp.push(bijGrechten[nummerBij.shift()])
            let outPut = temp.join(' ')
            gekozen.push(outPut)
        } 
        else {
            if (nummerGerecht.length == 0) {
                i--
            }
            else {
                gekozen.push(gerechtenVlees[nummerGerecht.shift()])
            }
        }
    }
}

// Dit kiest vega gerechten
const watEtenVega = vega => {
    let nummerGerecht = [];
    gehusseld(nummerGerecht,gerechtenVega);
    for (let i = 0; i < vega; i++) {
        if (nummerGerecht.length == 0) {
            throw 'Niet genoeg vega gerechten'
        }
        gekozen.push(gerechtenVega[nummerGerecht.shift()])
        
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
    for (let i = 0; i < gekozen.length; i++) {
        console.log(`${i+1}. ${gekozen[i]}`)
    }
}

// Hier wordt gekeken of gerechten niet dubbel zijn, niet meer nodig
const vergelijk = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let y = i + 1; y < arr.length; y++) {
            if (arr[i] == arr[y]) {
                return true
            }
        }
    }
    return false;
}

let happy = ''
const prompt = require('prompt-sync')({sigint: true});
console.clear()
const dagen = Number(prompt('Voor hoeveel dagen eten? '));
const vega = Number(prompt('Hoeveel vegetarisch? '));
const vis = Number(prompt('Hoevaak vis? '));

do {
gekozen = []
console.log('');
wijEten(dagen,vega,vis);
console.log('');
happy = prompt('Ben je blij met dit resultaat? Ja of Nee: ').toLowerCase()
} while (happy != 'ja');