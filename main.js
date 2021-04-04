// Alle mogelijke gerechten
let gerechtenVlees = [   'Risotto Tijm, Rosemarijn (Italiaanse keuken pg 76)',
                    'Thai curry (boek voor mem)',
                    'Thom Kha kai (boek voor mem)',
                    'Beef Basil (bijbel Thai pg 130)',
                    'Nacho’s (Jamie app)',
                    'Spanish-style chicken stew (jamie app)',
                    'Chicken Phal (Jamie app)',]
let hoofdGerechtenVlees = [
                    'Gelakte kip (puur genieten pg 46)',
                    'Beef met Gember (5 ingrediënten 185)',
                    'Gehaktbal met jus',]
let bijGrechten = [ 'Spinaziecurry (5 ingrediënten 162)',
                    'Zoete aardappel met cajun (5 ingrediënten 175)',
                    'Tomaten salade',
                    'Gebakken rijst']
let hoofdGerechtVis = [
                    'Zalm en geitenkaas saladebolletjes',
                    'Visragout',
                    'Zalm gehaktbal (puur genieten pg 86)',
                    'Vis gemalen komijn, paprika en koriander',
                    ]
let gerechtenVis = ['Kabeljauw mosterd sojasaus (puur genieten pg 96)',
                    'Sesame Seared Tuna & Sushi Bar Spinach']
let gerechtenVega = [
                    'Pasta Pesto',
                    'Couscous',
                    'Jackfruit stoofschotel',
                    'Bieten Burger']


// Functie kiest willekeurige gerechten en zit die in een array

// Gekozen is de uitkomst van de selectie

let gekozenVlees = []
let gekozenVis = []
let gekozenVega = []

// Dit kiest vis gerechten
const watEtenVis = vis => {
    do { 
        gekozenVis = []
        for (let i = 0; i < vis; i++) {
            let totaalOfNiet = Math.floor(Math.random()*2)
            if (totaalOfNiet == 1) {
                let temp = []
                const nummer = Math.floor(Math.random()*(hoofdGerechtVis.length-1))
                temp.push(hoofdGerechtVis[nummer] + ' met')
                const nummer2 = Math.floor(Math.random()*(bijGrechten.length-1))
                temp.push(bijGrechten[nummer2])
                let outPut = temp.join(' ')
                gekozenVis.push(outPut)
            } else {
            const nummer = Math.floor(Math.random()*(gerechtenVis.length-1))
            gekozenVis.push(hoofdGerechtVis[nummer])
            }
        }
    } while (vergelijk(gekozenVis))
}

// Dit kiest vleesgerechten
const watEtenVlees = (hoeveelDagen,vega,vis) => {
    do {
        gekozenVlees = []
        for (let i = 0; i < hoeveelDagen - (vega + vis); i++) {
            let totaalOfNiet = Math.floor(Math.random()*2)
            if (totaalOfNiet == 1) {
                let temp = []
                const nummer = Math.floor(Math.random()*(hoofdGerechtenVlees.length-1))
                temp.push(hoofdGerechtenVlees[nummer] + ' met')
                const nummer2 = Math.floor(Math.random()*(bijGrechten.length-1))
                temp.push(bijGrechten[nummer2])
                let outPut = temp.join(' ')
                gekozenVlees.push(outPut)
            } else {
            const nummer = Math.floor(Math.random()*(gerechtenVlees.length-1))
            gekozenVlees.push(gerechtenVlees[nummer])
            }
        }
    } while (vergelijk(gekozenVlees));
}

// Dit kiest vega gerechten
const watEtenVega = vega => {
    do { 
        gekozenVega = []
        for (let i = 0; i < vega; i++) {
            const nummer = Math.floor(Math.random()*(gerechtenVega.length-1))
            gekozenVega.push(gerechtenVega[nummer])
        }
    } while (vergelijk(gekozenVega))
}

// Dit stuurt het geheel aan
const keuze = (hoeveelDagen,vega,vis) => {
    watEtenVis(vis);
    watEtenVega(vega);
    watEtenVlees(hoeveelDagen,vega,vis)
}

// functie maakt er een mooi zinnetje van
const wijEten = (hoeveelDagen,vega,vis) => {
    keuze(hoeveelDagen,vega,vis)
    const gekozen = gekozenVlees.concat(gekozenVis,gekozenVega)
    console.log(`Wij eten: ${gekozen.join(' - ')}`)
}

const vergelijk = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let y = i + 1; y < arr.length; y++) {
            if (arr[i] == arr[y]) {
                return true
            }
        }
    }
    return false
}

console.log('')
wijEten(5,2,1)
console.log('')