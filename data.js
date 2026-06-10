const cocktails = [
  {
    id: 1,
    nome: "Americano",
    alcolico: true,
    bicchiere: "Old Fashioned",
    ingredienti: [
      { nome: "Campari", quantita: "30 ml" },
      { nome: "Sweet Vermouth", quantita: "30 ml" },
      { nome: "Soda Water", quantita: "Top up" }
    ],
    preparazione: "Versare Campari e Sweet Vermouth in un old fashioned colmo di ghiaccio. Completare con soda e mescolare delicatamente.",
    garnish: "Orange Slice",
    immagine: "img/americano.png",
    tag: ["Classico", "Aperitivo", "Amaro"]
  },
  {
    id: 2,
    nome: "Angel Face",
    alcolico: true,
    bicchiere: "Cocktail Glass",
    ingredienti: [
      { nome: "Gin", quantita: "30 ml" },
      { nome: "Apricot Brandy", quantita: "30 ml" },
      { nome: "Calvados", quantita: "30 ml" }
    ],
    preparazione: "Shakerare tutti gli ingredienti con ghiaccio. Filtrare in una coppetta cocktail ben fredda.",
    garnish: "Nessuna",
    immagine: "img/angel-face.png",
    tag: ["Classico", "Fruttato", "Strong"]
  },
  {
    id: 3,
    nome: "Aperol Spritz",
    alcolico: true,
    bicchiere: "Wine Glass",
    ingredienti: [
      { nome: "Prosecco", quantita: "90 ml" },
      { nome: "Aperol", quantita: "60 ml" },
      { nome: "Soda Water", quantita: "30 ml" }
    ],
    preparazione: "Riempire il calice di ghiaccio. Versare Prosecco, Aperol e soda. Mescolare delicatamente.",
    garnish: "Orange Slice",
    immagine: "img/aperol-spritz.png",
    tag: ["Aperitivo", "Fresco", "Party"]
  },
  {
    id: 4,
    nome: "Apple Martini",
    alcolico: true,
    bicchiere: "Cocktail Glass",
    ingredienti: [
      { nome: "Vodka", quantita: "45 ml" },
      { nome: "Apple Schnapps", quantita: "30 ml" },
      { nome: "Lemon Juice", quantita: "15 ml" }
    ],
    preparazione: "Shakerare tutti gli ingredienti con ghiaccio. Filtrare in una coppetta cocktail raffreddata.",
    garnish: "Apple Slice",
    immagine: "img/apple-martini.png",
    tag: ["Fruttato", "Dolce", "Party"]
  },
  {
    id: 5,
    nome: "Aviation",
    alcolico: true,
    bicchiere: "Cocktail Glass",
    ingredienti: [
      { nome: "Gin", quantita: "45 ml" },
      { nome: "Maraschino Liqueur", quantita: "15 ml" },
      { nome: "Crème de Violette", quantita: "7.5 ml" },
      { nome: "Lemon Juice", quantita: "15 ml" }
    ],
    preparazione: "Shakerare tutti gli ingredienti con ghiaccio. Filtrare in una coppetta cocktail ben fredda.",
    garnish: "Maraschino Cherry",
    immagine: "img/aviation.png",
    tag: ["Classico", "Floreale", "Asprigno"]
  },
  {
    id: 6,
    nome: "B-52",
    alcolico: true,
    bicchiere: "Shot Glass",
    ingredienti: [
      { nome: "Coffee Liqueur", quantita: "20 ml" },
      { nome: "Irish Cream", quantita: "20 ml" },
      { nome: "Grand Marnier", quantita: "20 ml" }
    ],
    preparazione: "Versare i liquori a strati nello shot glass usando il dorso di un cucchiaio. Prima Coffee Liqueur poi Irish Cream e Grand Marnier",
    garnish: "Nessuna",
    immagine: "img/b-52.png",
    tag: ["Shot", "Dolce", "Party"]
  },
  {
    id: 7,
    nome: "Bahama Mama",
    alcolico: true,
    bicchiere: "Hurricane Glass",
    ingredienti: [
      { nome: "White Rum", quantita: "30 ml" },
      { nome: "Coconut Rum", quantita: "30 ml" },
      { nome: "Dark Rum", quantita: "15 ml" },
      { nome: "Orange Juice", quantita: "60 ml" },
      { nome: "Pineapple Juice", quantita: "60 ml" },
      { nome: "Grenadine", quantita: "10 ml" }
    ],
    preparazione: "Shakerare tutti gli ingredienti con ghiaccio. Versare in un hurricane glass con ghiaccio tritato.",
    garnish: "Pineapple Wedge",
    immagine: "img/bahama-mama.png",
    tag: ["Tropicale", "Fruttato", "Party"]
  },
  {
    id: 8,
    nome: "Bellini",
    alcolico: true,
    bicchiere: "Flute",
    ingredienti: [
      { nome: "White Peach Purée", quantita: "50 ml" },
      { nome: "Prosecco", quantita: "100 ml" }
    ],
    preparazione: "Versare la purea di pesca nella flute ben fredda. Completare delicatamente con Prosecco.",
    garnish: "Nessuna",
    immagine: "img/bellini.png",
    tag: ["Classico", "Fruttato", "Aperitivo"]
  },
  {
    id: 9,
    nome: "Between the Sheets",
    alcolico: true,
    bicchiere: "Cocktail Glass",
    ingredienti: [
      { nome: "White Rum", quantita: "30 ml" },
      { nome: "Cognac", quantita: "30 ml" },
      { nome: "Triple Sec", quantita: "30 ml" },
      { nome: "Lemon Juice", quantita: "20 ml" }
    ],
    preparazione: "Shakerare tutti gli ingredienti con ghiaccio. Filtrare in una coppetta cocktail raffreddata.",
    garnish: "Lemon Twist",
    immagine: "img/between-the-sheets.png",
    tag: ["Classico", "Asprigno", "Strong"]
  },
  {
    id: 10,
    nome: "Black Russian",
    alcolico: true,
    bicchiere: "Old Fashioned",
    ingredienti: [
      { nome: "Vodka", quantita: "50 ml" },
      { nome: "Coffee Liqueur", quantita: "20 ml" }
    ],
    preparazione: "Versare gli ingredienti in un old fashioned con ghiaccio. Mescolare delicatamente.",
    garnish: "Nessuna",
    immagine: "img/black-russian.png",
    tag: ["After Dinner", "Caffè", "Strong"]
  },
  {
    id: 11,
    nome: "Blood and Sand",
    alcolico: true,
    bicchiere: "Cocktail Glass",
    ingredienti: [
      { nome: "Scotch Whisky", quantita: "25 ml" },
      { nome: "Sweet Vermouth", quantita: "25 ml" },
      { nome: "Cherry Brandy", quantita: "25 ml" },
      { nome: "Orange Juice", quantita: "25 ml" }
    ],
    preparazione: "Shakerare tutti gli ingredienti con ghiaccio. Filtrare in una coppetta cocktail ben fredda.",
    garnish: "Orange Peel",
    immagine: "img/blood-and-sand.png",
    tag: ["Classico", "Fruttato", "Whisky"]
  },
  {
    id: 12,
    nome: "Bloody Mary",
    alcolico: true,
    bicchiere: "Highball",
    ingredienti: [
      { nome: "Vodka", quantita: "45 ml" },
      { nome: "Tomato Juice", quantita: "90 ml" },
      { nome: "Lemon Juice", quantita: "15 ml" },
      { nome: "Worcestershire Sauce", quantita: "2 dash" },
      { nome: "Tabasco", quantita: "2 dash" },
      { nome: "Celery Salt", quantita: "1 pinch" },
      { nome: "Black Pepper", quantita: "1 pinch" }
    ],
    preparazione: "Versare gli ingredienti in uno shaker con ghiaccio e miscelare delicatamente. Servire in highball.",
    garnish: "Celery Stick",
    immagine: "img/bloody-mary.png",
    tag: ["Classico", "All Day", "Speziato"]
  },
  {
    id: 13,
    nome: "Blue Hawaiian",
    alcolico: true,
    bicchiere: "Hurricane Glass",
    ingredienti: [
      { nome: "White Rum", quantita: "30 ml" },
      { nome: "Blue Curaçao", quantita: "30 ml" },
      { nome: "Pineapple Juice", quantita: "90 ml" },
      { nome: "Cream of Coconut", quantita: "30 ml" }
    ],
    preparazione: "Shakerare tutti gli ingredienti con ghiaccio. Versare in un hurricane glass con ghiaccio tritato.",
    garnish: "Pineapple Wedge",
    immagine: "img/blue-hawaiian.png",
    tag: ["Tropicale", "Dolce", "Party"]
  },
  {
    id: 14,
    nome: "Blue Lagoon",
    alcolico: true,
    bicchiere: "Highball",
    ingredienti: [
      { nome: "Vodka", quantita: "40 ml" },
      { nome: "Blue Curaçao", quantita: "20 ml" },
      { nome: "Lemonade", quantita: "Top up" }
    ],
    preparazione: "Versare gli ingredienti in un highball pieno di ghiaccio. Mescolare delicatamente.",
    garnish: "Lemon Slice",
    immagine: "img/blue-lagoon.png",
    tag: ["Fresco", "Fruttato", "Party"]
  },
  {
    id: 15,
    nome: "Bramble",
    alcolico: true,
    bicchiere: "Old Fashioned",
    ingredienti: [
      { nome: "Gin", quantita: "50 ml" },
      { nome: "Lemon Juice", quantita: "25 ml" },
      { nome: "Simple Syrup", quantita: "12.5 ml" },
      { nome: "Crème de Mûre", quantita: "15 ml" }
    ],
    preparazione: "Shakerare Gin, Lemon Juice e Simple Syrup. Filtrare su ghiaccio tritato e completare con Crème de Mûre.",
    garnish: "Blackberry",
    immagine: "img/bramble.png",
    tag: ["Classico", "Asprigno", "Fruttato"]
  },
  {
    id: 16,
    nome: "Brandy Alexander",
    alcolico: true,
    bicchiere: "Cocktail Glass",
    ingredienti: [
      { nome: "Cognac", quantita: "30 ml" },
      { nome: "Crème de Cacao", quantita: "30 ml" },
      { nome: "Fresh Cream", quantita: "30 ml" }
    ],
    preparazione: "Shakerare tutti gli ingredienti con ghiaccio. Filtrare in una coppetta cocktail.",
    garnish: "Nutmeg",
    immagine: "img/brandy-alexander.png",
    tag: ["After Dinner", "Dolce", "Cremoso"]
  },
  {
    id: 17,
    nome: "Bronx",
    alcolico: true,
    bicchiere: "Cocktail Glass",
    ingredienti: [
      { nome: "Gin", quantita: "45 ml" },
      { nome: "Dry Vermouth", quantita: "15 ml" },
      { nome: "Sweet Vermouth", quantita: "15 ml" },
      { nome: "Orange Juice", quantita: "30 ml" }
    ],
    preparazione: "Shakerare tutti gli ingredienti con ghiaccio. Filtrare in una coppetta cocktail ben fredda.",
    garnish: "Orange Peel",
    immagine: "img/bronx.png",
    tag: ["Classico", "Fruttato", "All Day"]
  },
  {
    id: 18,
    nome: "Brooklyn",
    alcolico: true,
    bicchiere: "Cocktail Glass",
    ingredienti: [
      { nome: "Rye Whiskey", quantita: "60 ml" },
      { nome: "Dry Vermouth", quantita: "30 ml" },
      { nome: "Maraschino Liqueur", quantita: "7.5 ml" },
      { nome: "Amer Picon", quantita: "7.5 ml" }
    ],
    preparazione: "Mescolare gli ingredienti in mixing glass con ghiaccio. Filtrare in una coppetta cocktail raffreddata.",
    garnish: "Maraschino Cherry",
    immagine: "img/brooklyn.png",
    tag: ["Classico", "Whisky", "Strong"]
  },
  {
  id: 19,
  nome: "Caipirinha",
  alcolico: true,
  bicchiere: "Old Fashioned",
  ingredienti: [
    { nome: "Cachaça", quantita: "60 ml" },
    { nome: "Lime", quantita: "1/2" },
    { nome: "Sugar", quantita: "2 tsp" }
  ],
  preparazione: "Pestare il lime con lo zucchero nel bicchiere. Aggiungere ghiaccio tritato e Cachaça. Mescolare delicatamente.",
  garnish: "Lime Wedge",
  note: [
    "Possibile aggiungere un top di soda."
  ],
  immagine: "img/caipirinha.png",
  tag: ["Classico", "Fresco", "Party"]
},
{
  id: 20,
  nome: "Caipiroska",
  alcolico: true,
  bicchiere: "Old Fashioned",
  ingredienti: [
    { nome: "Vodka", quantita: "60 ml" },
    { nome: "Lime", quantita: "1/2" },
    { nome: "Sugar", quantita: "2 tsp" }
  ],
  preparazione: "Pestare il lime con lo zucchero nel bicchiere. Aggiungere ghiaccio tritato e Vodka. Mescolare delicatamente.",
  garnish: "Lime Wedge",
  varianti: ["Fragola", "Maracuya", "Frutti Rossi", "Kiwi", "Mango"],
  note: [
    "Le varianti possono essere preparate con purea o frutta fresca.",
    "Possibile aggiungere un top di soda."
  ],
  immagine: "img/caipiroska.png",
  tag: ["Classico", "Fresco", "Party"]
},
{
  id: 21,
  nome: "Clover Club",
  alcolico: true,
  bicchiere: "Cocktail Glass",
  ingredienti: [
    { nome: "Gin", quantita: "45 ml" },
    { nome: "Lemon Juice", quantita: "15 ml" },
    { nome: "Raspberry Syrup", quantita: "15 ml" },
    { nome: "Egg White", quantita: "15 ml" }
  ],
  preparazione: "Eseguire dry shake senza ghiaccio. Aggiungere ghiaccio e shakerare di nuovo. Filtrare in una coppetta cocktail.",
  garnish: "Raspberry",
  immagine: "img/clover-club.png",
  tag: ["Classico", "Fruttato", "Elegante"]
},
{
  id: 22,
  nome: "Cosmopolitan",
  alcolico: true,
  bicchiere: "Cocktail Glass",
  ingredienti: [
    { nome: "Vodka Citron", quantita: "40 ml" },
    { nome: "Triple Sec", quantita: "15 ml" },
    { nome: "Cranberry Juice", quantita: "30 ml" },
    { nome: "Lime Juice", quantita: "15 ml" }
  ],
  preparazione: "Shakerare tutti gli ingredienti con ghiaccio. Filtrare in una coppetta cocktail raffreddata.",
  garnish: "Orange Twist",
  immagine: "img/cosmopolitan.png",
  tag: ["Classico", "Fruttato", "Party"]
},
{
  id: 23,
  nome: "Cuba Libre",
  alcolico: true,
  bicchiere: "Highball",
  ingredienti: [
    { nome: "White Rum", quantita: "50 ml" },
    { nome: "Lime Juice", quantita: "10 ml" },
    { nome: "Cola", quantita: "Top up" }
  ],
  preparazione: "Versare Rum e Lime Juice in un highball con ghiaccio. Completare con Cola e mescolare delicatamente.",
  garnish: "Lime Wedge",
  immagine: "img/cuba-libre.png",
  tag: ["Classico", "Fresco", "Party"]
},
{
  id: 24,
  nome: "Daiquiri",
  alcolico: true,
  bicchiere: "Cocktail Glass",
  ingredienti: [
    { nome: "White Rum", quantita: "60 ml" },
    { nome: "Lime Juice", quantita: "30 ml" },
    { nome: "Simple Syrup", quantita: "15 ml" }
  ],
  preparazione: "Shakerare tutti gli ingredienti con ghiaccio. Filtrare in una coppetta cocktail ben fredda.",
  garnish: "Lime Wheel",
  immagine: "img/daiquiri.png",
  tag: ["Classico", "Asprigno", "Fresco"]
},
{
  id: 25,
  nome: "Dark 'n' Stormy",
  alcolico: true,
  bicchiere: "Highball",
  ingredienti: [
    { nome: "Dark Rum", quantita: "60 ml" },
    { nome: "Ginger Beer", quantita: "100 ml" },
    { nome: "Lime Juice", quantita: "15 ml" }
  ],
  preparazione: "Riempire un highball di ghiaccio. Versare Lime Juice e Ginger Beer. Aggiungere il Dark Rum in superficie.",
  garnish: "Lime Wedge, Mint",
  immagine: "img/dark-n-stormy.png",
  tag: ["Fresco", "Speziato", "Party"]
},

];