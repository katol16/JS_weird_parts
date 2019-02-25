// Sekcja 9 "Let's Build a Framework / Library!

// Lekcja nr 73 "Requirements"

// Lekcja nr 75 "Our Object and its prototype"
var g = G$('John', 'Doe');
console.log(g);

// ze względu na ethods chainable, mozesz tak dodawać metody pokolei
g.greet().greet(true);

// kolejny przykład - wyrzuci błąd, bo nie mamy dostępnego języka francuskeigo
g.greet().setLang('fr').greet(true);