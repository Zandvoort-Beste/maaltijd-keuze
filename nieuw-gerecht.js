const prompt = require('prompt-sync')({sigint: true});
let antwoord = ''
class Boeken {
    constructor (name,pages,intro) {
        this._name = name;
        this._pages = pages;
        this._intro = intro;
    }
    get contents () {
        return this._intro + Math.floor(Math.random()*(this._pages-this._intro));
    }
    get name () {
        return this._name;
    }
}

const silverSpoon = new Boeken('The Silver Spoon',354,68);
const simpel = new Boeken('Simpel',293,6);
const veg = new Boeken('Veg',265,14);
const ways = new Boeken('Jamie Oliver 7 ways',301,17);
const ingredients = new Boeken('Jamie Oliver 5 ingredienten',302,15);
const chicksLoveFood = new Boeken('Chicks love food',139,13);
const thaiseKeuken = new Boeken('Minibijbel Thaise keuken',249,72);
const minuten = new Boeken('Jamie in 15 Minuten',260,24);
const puurGenieten = new Boeken('Puur genieten',176,34);
const italiaanseKeuken = new Boeken('Italiaanse keuken',238,8);
const bierEnSpijs = new Boeken('Bier & Spijs',168,30);
const nogEnvoudiger = new Boeken('Nog eenvoudiger',203,24);
const alleBoeken = [silverSpoon,simpel,veg,ways,ingredients,chicksLoveFood,thaiseKeuken,minuten,puurGenieten,italiaanseKeuken,bierEnSpijs,nogEnvoudiger];


console.clear();
let randomBoek = Math.floor(Math.random()* alleBoeken.length);
console.log(`Wij proberen recept op pagina ${alleBoeken[randomBoek].contents} uit ${alleBoeken[randomBoek].name}`);

do {
    antwoord = prompt(`Durven we dit aan? `).toLowerCase();
    if (antwoord == 'nee') {
        randomBoek = Math.floor(Math.random()* alleBoeken.length);
        console.log('');
        console.log(`Wij proberen recept op pagina ${alleBoeken[randomBoek].contents} uit ${alleBoeken[randomBoek].name}`);
    }
} while (antwoord != 'ja');
console.log('\nEet smakelijk!\n');

