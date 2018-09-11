// SEKCJA 2 Execution Cotenxt and Lexical Environments

// Execution Context (Global)
// Wszystko tam jest wykonywane, i JS tworzy nam w tym Execution Context takie rzeczy:
// 	- Global Object (window)
// 	- 'this'
//  - Outer Enviroment - np. funkcję 
//  - Yout code

// In the global level(jak nie jesteś w funckji) -> Global Object = 'this'


// Leckja nr 10 "The Execution Context - Creation and Hoisting"

b(); // wywoła porpawnie funkcję
console.log(a) // poda "undefined"
// Więc ten kod tutaj, nie wyrzuci błędu, funckja normalnie się wykona
// zmienna "a" będzie niezdefiniowana "undefined" - ale to nie jest Error
// Dopiero jak całkiem usuniesz zmienna "a", to dostaneisz "ReferenceError - a is not defined"
// To jest właśnie Hoisting!

var a = 'Hello world!';

function b() {
	console.log('Called b!');
}

// Hoisting, generalnie dalczego tak to działa?
// Zobacz sobię na orbazek "hoisting w tej sekcji". Masz tam jak jest tworzony
// Execution Context i widzisz, ze jest tam: Global Obcject, "this", Outer Enviroment i póżniej masz
// Setup Memory Space for variables and funcitons "Hoisting". Czyli generalnie zanim kod zacznie się wykonwyac linia po lini,
// to najpierw utworzy taki placeholder w pamięci komputera na nasze zmienne i funkcję. Dlatego powyżej
// jak masz przykłąd ze zmienną "a' (undefined), to działa to tak, ze widzi tę zmienną, bo hoisitng, ale jeszcze nie widzi jaką ma wartość
// Najpeirw leci ten "Setup Memory Space" dla całego kodu, a później kod się wykonuję linia po lini

// Pamiętaj, że Execution Context wykonuje się w pewnych dwóch fazach (pierwsza faza Execution Context to "Creation pfaze")
// Druga faza to Execution Phase.

// Lekcja nr 11 "Javascript and 'undefined'"

// Pamietaj, że w JS, undefined i not defined, to nie to samo!!!
// not defined wyrzuci błąd!
// undefined - to specjalne słowo(SPECIAL KEY WORD) w JS (tak jak 'null' itd.), które mówi, ze zmienna istneije, ale nie ma przypisanej wartości!

var c;

if (c === undefined) {
	console.log('c is undefined');
} else {
	console.log('c is defined');
}

// Nigdy nie rób tak: a = undefined; tzn. nie ustawiaj sam wartości undefined. To może powodować błedy później.
// Lepiej żeby JS, sam ustawił udefined, bo przecież i tak to robi.  


// Lekcja nr 12 "The Execution Context: Code execution"

// To po prostu faza w której wykonuję się twój kod, linia po lini.