class Gerechten {
    constructor (name,personen,bijGerechtReq,difficult,type,ingredients,source) {
        this._name = name;
        this._personen = personen;
        this._bijGerechtReq = bijGerechtReq;
        this._difficult = difficult;
        this._type = type;
        this._ingredients = ingredients;
        this._source = source;
    }
    get ingredients () {
        console.log(`${this._name}`)
        if (this._personen) {
            console.log(`${this._personen} porties \n`)
        }
        for (let index = 0; index < this._ingredients.length; index++) {
            console.log(`${index+1}: ${this._ingredients[index]}`);
        }
        if (this._bijGerecht) {
            console.log(`\n ${this._bijGerecht._name}`)
            if (this._personen) {
                console.log(`${this._bijGerecht._personen} porties \n`)
            }
            for (let index = 0; index < this._bijGerecht._ingredients.length; index++) {
                console.log(`${index+1}: ${this._bijGerecht._ingredients[index]}`);
            }
        }
    }
    get naam () {
        if (this._bijGerechtReq == false) {
            return `${this._name} uit ${this._source}`;
        } else {
            return `${this._name} uit ${this._source} met ${this._bijGerecht._name}`
        }
    }
}

const bijGerechten = require('./main')
// Alle mogelijke hoofd gerechten


const pastaPesto = new Gerechten('Pasta pesto',undefined,false,false,'vlees',['Pasta','Pesto','Rucola','Pijnboom pitten','Parmezaanse kaas','Kip','Cherry tomaten','Knoflook']),
const beefBasil = new Gerechten('Beef Basil',2,false,false,'vlees',['300g gehakt','2 el vissaus','2 el sojasaus','1tl suiker','Basilicum','Verse rode pepers'],'Thai keuken bijbel'),
const jackFruit = new Gerechten('Jackfruit Stoofschotel',4,false,false,'vega',['1 blik jackfruit 500 ml','2 teentjes knoflook fijngehakt','1 ui in ringen','1 winterwortel in blokjes','2 stengels bleekselderij in blokjes','1 laurierblad','2 kruidnagels','1 tl korianderpoeder','1 tl gemberpoeder','0,5 tl nootmuskaatpoeder','1 tl mosterd','40 gram ontbijtkoek','1 el bloem','70 gram tomatenpuree','350 ml groentebouillon','Zonnebloemolie','Peper en zout'],'https://miljuschka.nl/jackfruitstoofschotel/'),
const couscous = new Gerechten('Couscous',undefined,false,false,'vega',['Bouillon', 'Rozijnen', 'Feta', 'Pijnboompitten', 'Knoflook', 'Tomaat', 'Rucola', 'Honing'],'Notitie iOS'),
const nacho = new Gerechten('Nacho',2,false,false,'vlees',['300 gram gehakt',"Nacho's",'1 Rode ui','2 tenen knoflook','2 stengels Bleekselderij','1/2 bunch Koriander','Tijm','Tomaten Pure','2 Jalapeno chillies','2 Limoenen','Gemalen komijn','75g geraspte kaas','Zure room','Olijf olie'],'Jamie Recipes App'),
const fettuccine = new Gerechten('Fettuccine met pittige cherrytomatensaus',4,false,false,'vega',['2 tenen knoflook','1 kg cherrytomaatjes','suiker','1 gedroogde peper','20g basilicum','400g fettucine','35g parmezaan'],'Simpel pg. 187'),
const kabeljauwMosterd = new Gerechten('Kabeljauw met mosterd-sojasaus en tomaten',2,false,false,'vis',['2 kabeljauwfilets','4 tomaten','moterd','sojasaus'],'Puur genieten pg. 96'),
const zalmGehakt = new Gerechten('Gehakt van zalm met kruiden en wasabimoyanaise',2,false,false,'vis',['2 zalm filets','2 lente-uitjes','1/2 verse rode chilipeper','2 knoflookteentjes','1 bofje koriander','Sap van 1 limoen','Sesamzaad','Geroosterde sesamolie'],'Puur genieten pg. 86'),
const gelakteKip = new Gerechten('Gelakte kip met boontjes',2,true,false,'vlees',['2 kipfilets','Balsamicoazijn','Sojasaus'],'Puur genieten pg. 46'),
const zoeteAardappel = new Gerechten('Zoete Aardappel met Cajun',4,false,false,'bijGerecht',['4 zoete aardappels van 250g elk','1 bol knoflook','1 tl cajunkruiden','200ml Griekse yoghurt','4 lente-uitjes'],'5 ingredienten pg. 174'),
const spinazieCurry = new Gerechten('Speedy Spinaziecurry',2,false,false,'bijGerecht',['20g ongezouten cashewnoten','1 ui','2tl rogan josh-currypasta','100g feta','200g jonge spinazie'],'5 ingredienten pg. 162')


let _gerechten = [pastaPesto,beefBasil,jackFruit,couscous,nacho,fettuccine,kabeljauwMosterd,zalmGehakt,gelakteKip,zoeteAardappel,spinazieCurry]

// Alle bijgerechten


module.exports = {
    _gerechten
}
