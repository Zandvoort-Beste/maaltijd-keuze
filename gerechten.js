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
    get alleGerechten () {
        if (this._type == 'bijGerecht') {
            return `Bijgerechten kunnen niet gekozen worden`
        } else {
            return `${this._name} uit ${this._source}`;
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

const pastaPesto = new Gerechten('Pasta pesto',undefined,false,false,'vlees',['Pasta','Pesto','Rucola','Pijnboom pitten','Parmezaanse kaas','Kip','Cherry tomaten','Knoflook'])
const beefBasil = new Gerechten('Beef Basil',2,false,false,'vlees',['300g gehakt','2 el vissaus','2 el sojasaus','1tl suiker','Basilicum','Verse rode pepers','Rijst','Kokosmelk'],'Thai keuken bijbel')
const jackFruit = new Gerechten('Jackfruit Stoofschotel',4,false,false,'vega',['1 blik jackfruit 500 ml','2 teentjes knoflook fijngehakt','1 ui in ringen','1 winterwortel in blokjes','2 stengels bleekselderij in blokjes','1 laurierblad','2 kruidnagels','1 tl korianderpoeder','1 tl gemberpoeder','0,5 tl nootmuskaatpoeder','1 tl mosterd','40 gram ontbijtkoek','1 el bloem','70 gram tomatenpuree','350 ml groentebouillon','Zonnebloemolie','Peper en zout'],'https://miljuschka.nl/jackfruitstoofschotel/')
const couscous = new Gerechten('Couscous',undefined,false,false,'vlees',['Worst','Bouillon', 'Rozijnen', 'Feta', 'Pijnboompitten', 'Knoflook', 'Zongedroode Tomaat', 'Rucola', 'Honing'],'Notitie iOS')
const nacho = new Gerechten('Nacho',2,false,false,'vlees',['300 gram gehakt',"Nacho's",'1 Rode ui','2 tenen knoflook','2 stengels Bleekselderij','1/2 bunch Koriander','Tijm','Tomaten Pure','2 Jalapeno chillies','2 Limoenen','Gemalen komijn','75g geraspte kaas','Zure room','Olijf olie'],'Jamie Recipes App')
const fettuccine = new Gerechten('Fettuccine met pittige cherrytomatensaus',4,false,false,'vega',['2 tenen knoflook','1 kg cherrytomaatjes','suiker','1 gedroogde peper','20g basilicum','400g fettucine','35g parmezaan'],'Simpel pg. 187')
const kabeljauwMosterd = new Gerechten('Kabeljauw met mosterd-sojasaus en tomaten',2,false,false,'vis',['2 kabeljauwfilets','4 tomaten','moterd','sojasaus'],'Puur genieten pg. 96')
const zalmGehakt = new Gerechten('Gehakt van zalm met kruiden en wasabimoyanaise',2,true,false,'vis',['2 zalm filets','2 lente-uitjes','1/2 verse rode chilipeper','2 knoflookteentjes','1 bofje koriander','Sap van 1 limoen','Sesamzaad','Geroosterde sesamolie'],'Puur genieten pg. 86')
const gelakteKip = new Gerechten('Gelakte kip met boontjes',2,true,false,'vlees',['2 kipfilets','Balsamicoazijn','Sojasaus'],'Puur genieten pg. 46')
const zoeteAardappel = new Gerechten('Zoete Aardappel met Cajun',4,false,false,'bijGerecht',['4 zoete aardappels van 250g elk','1 bol knoflook','1 tl cajunkruiden','200ml Griekse yoghurt','4 lente-uitjes'],'5 ingredienten pg. 174')
const spinazieCurry = new Gerechten('Speedy Spinaziecurry',2,false,false,'bijGerecht',['20g ongezouten cashewnoten','1 ui','2tl rogan josh-currypasta','100g feta','200g jonge spinazie'],'5 ingredienten pg. 162')
const kabeljauwKomijnPaprika = new Gerechten('Kabeljauw met Komijn en Parika',undefined,true,false,'vis',['Kabeljauw','Komijn poeder','Paprika poeder','Koriander'])
const ZalmGeitenkaas = new Gerechten('Zalm met geitenkaas saladebolletjes',undefined,true,false,'vis',['Zalm filet','Geitenkaas saladebolletjes','Italiaanse kruiden'],'https://www.geitenkaas.nl/recepten/zalmpapillot-met-geitenkaas-saladebolletjes')
const visragout = new Gerechten('Visragout',4,true,false,'vis',['500g kabelfauwfilet','50g boter','60g bloem','viskruiden','1 visbouillion tablet','200g creme fraiche','peterselie','ragoutbakjes','bieslook'],'https://www.geitenkaas.nl/recepten/zalmpapillot-met-geitenkaas-saladebolletjes')
const aardbeiRisotto = new Gerechten('Aardbeid Risotto',2,false,false,'vega',['Risotto','Ui','Witte Wijn','Groente Bouillon','20 Aardbeien','Boter','Parmezaanse kaas','Balsamico azijn','Munt'],'Notitie in iOS')
const rodeCurry = new Gerechten('Thaise rode curry',2,false,false,'vlees',['140 gram kipfilet','2 el red curry paste','2 cups kokosmelk','2 spaanse pepers','2 cups basilicum','4 kaffir lime leaves','2 el vissaus','2 tl suiker','Broccoli','Paprika','Wortel'],'Somphong cooking guide')
const tomKhaKai = new Gerechten('Tom Kha Kai',2,false,false,'vlees',['140 gram kip','1 cup kokos melk','2 cups bouillon','16 slices galangal','10 slices lemongrass','4 karrif lime leaves','2 el lime juice','2 el vissaus','1 tl suiker','2 el koriander'],'Somphong cooking guide')
const rodeCurryVega = new Gerechten('Thaise rode curry Vega',2,false,false,'vega',['Broccoli','Paprika','Wortel','2 el red curry paste','2 cups kokosmelk','2 spaanse pepers','2 cups basilicum','4 kaffir lime leaves','2 el vissaus','2 tl suiker'],'Somphong cooking guide')
const tomKhaKaiVega = new Gerechten('Tom Kha Kai Vega',2,false,false,'vega',['Broccoli','Paprika','Wortel','1 cup kokos melk','2 cups bouillon','16 slices galangal','10 slices lemongrass','4 karrif lime leaves','2 el lime juice','2 el vissaus','1 tl suiker','2 el koriander'],'Somphong cooking guide')
const gebakkenRijst = new Gerechten('Gebakken rijst',4,false,false,'bijGerecht',['4 kopjes rijst','1 wortel','1 ui','1 teen knoflook','1 tl verse gember','90 gram tauge','3 eieren','3 eetlepels sojasaus','2 eetlepels olie','2 eetlepels sesamolie','bosui'],'https://nl.wikihow.com/Gebakken-rijst-maken')
const tomatenSalade = new Gerechten('Tomaten Salade',2,false,false,'bijGerecht',['2 tomaten','verse kruiden naar keuze','3 stengels bosui','extra virge olijfolie','wijn azijn'])
const gemberBeef = new Gerechten("Shakin' Beef met Gember",2,true,false,'vlees',['300g biefstuk','4cm verse gemberwortel','1 el misopasta','2 tl vloeibare honing'],'5 ingredienten pg. 184')
const risottoWorst = new Gerechten('Risotto met worst en rozemarijn',2,false,false,'vlees',['2 takjes rozemarijn','boter','1 ui','1 stengel bleekselderij','2 tenen knoflook','Gedroogde tijm','2 runder worsten','Risotto rijst','Rode wijn','Bouillon','Parmezaanse kaas'],'Italiaanse keuken pg. 76')
const broccoliRisotto = new Gerechten('Creamy Broccoli Risotto',4,false,false,'vega',['1,5 liter bouillon','1 ui','2 anchovy filets','300g risotto','15g peterselie','1 limoen','60g Gorgonzola'],'7 ways pg. 20')
const pappardelleRozenharissa = new Gerechten('Pappardelle met rozenharissa',4,false,false,'vega',['2 el olijfolie','1 ui','3 el rozenharissa','400g cherrytomaatjes','60g ontpitte kalamataolijven','20g fijne kappertjes','15g peterselie','500g pappardelle','120 griekse yoghurt'],'Simpel pg. 188')
const tomatenSoep = new Gerechten('Tomaat-paprikasoep met parelcouscous',2,false,false,'vega',['1 ui','2 knoflooktenen','4 tomaten','1 parika','50g abrikozen stukjes (of rozijnen)','5g verse dragon','60g parelcouscous','1 ciabatta','50g zure room','25g geraspte italiaanse kaas','1 groente boeillon blokje'],'Hello fresh')
const parelcouscousSalade = new Gerechten('Linzen-parelcouscoussalade',2,false,false,'vega',['80g parelcouscous','1/2 pak linzen','1 rode ui','1 limoen','10g walnootstukjes','1 appel','2 gekookte rode bieten','5g verse dille','Yoghurt','Tahine','40g sla','75g verse geitenkaas','Groentebouillon','1 el honing','2 el zwarte balsamicoazijn','2 el extra vierge olijfolie'],'Hello fresh')
const gehaktBal = new Gerechten('Gehakt Bal',2,true,false,'vlees',['300g gehakt','1/2 ui','1 ei','Gehakt kruiden','Cracker','Wat we nog meer willen'])
const chickenPhal = new Gerechten('Fiendish Chicken Phal',4,false,false,'vlees',['4 kippedijen','3 el rogan josh curry paste','2 gedroogde pepers','1 grote rode ui','1 paprika','1 kaneel stok','1/3 blok kip bouillon','1/2 el azijn','1/2 tl suiker','75g yoghurt','10g boter'],'Jamie Recipes App')

let _gerechten = [pastaPesto,beefBasil,jackFruit,couscous,nacho,fettuccine,kabeljauwMosterd,zalmGehakt,gelakteKip,zoeteAardappel,spinazieCurry,kabeljauwKomijnPaprika,ZalmGeitenkaas,visragout,aardbeiRisotto,rodeCurry,tomKhaKai,rodeCurryVega,tomKhaKaiVega,gebakkenRijst,tomatenSalade,gemberBeef,risottoWorst,broccoliRisotto,pappardelleRozenharissa,tomatenSoep,parelcouscousSalade,gehaktBal,chickenPhal]

module.exports = {
    _gerechten
}