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


// Lekcja nr 13 "Conceptual Aside: Single Threaded, Synchronous Execution"

// Synchronous - "one an a time" - jedna linia jest wykonywana, w danym czasie, pozniej przychodzi do następnej
// oczywiście są metody Asynchronous, ale w swoim zachowaniu JS jest "Single Threaded, Synchronous"


// Lekcja nr 14 "Function Invocation and the Execution Stack"

// Invocation: Running a function. In JavaScript, by using parenthesis ()
// Every function create Execution Context(2 fazy: create and execute)

// Przykład jak to działa (pokażemy które console.logi wykonają się jako pierwsze)

function a1() {
	b1();
	console.log('Trzeci');
}

function b1() {
	c1();
	console.log('Drugi');
}

function c1() {
	console.log('Pierwszy');
}

function d1() {
	console.log('Czwarty');
}

a1();
d1();


// Lekcja nr 15 "Functions, Context, and Variable Environments"

// Variable Environment: Where the Variables Live and how they relate to each other in memory

function b2() {
	// Tu jesteśmy w b2() Execution context
	var myVar;
	console.log(myVar);
}

function a2() {
	// Tu jesteśmy w a2() Execution context
	var myVar=2;
	console.log(myVar);
	b2();
}

var myVar = 1;
console.log(myVar);
a2();
console.log(myVar);
// Tu jesteśmy w Global Execution context

// W consoli wyświetli pokolei
// 1, 2, undefined, 1
// ta jedynka jest na końcu bo jest SCOPE! Pamietaj o tym!


// Lekcja nr 16 "The Scope Chain"

function b3() {
	console.log(myVar); // wyświetli 1
}

function a3() {
	var myVar=2;
	b3();
}

var myVar = 1;
a3();

// W tym przypadku (powyżej) funckja b3, siedzi fizycznie w Global Execution Context

// UWAGA! Jesli powyżej zaminimy miejscami a3()  z myvVar czyli bedize:
// a3();
// var myVar = 1;
// To będzie ten sam rezultat, bo pamiętaj, że kązdy Execution Context (np. funkcja), ma dostęp do zewnętrznego środowiska,
// czyli jak funkcja b3(), nie znajdzię myVar w swoim wnętrzu, to będzie szukała myVar na zewnątrz, w naszym przypadku będzie to Global Execution Context

function a4() {

	function b4() {
		console.log(myVar); // wyświetli 2
	}	

	var myVar = 2; // jeśli usuniesz tę zmeinną to bedzie znowu w consoli '1', 
	// bo funkcja b4 szuka wg. scope chain, najpierw w funckji a, 
	// a póżniej (jeśli nie znajdzie) zgodnie z scope chain w global execution context
	b4();
}

var myVar = 1;
a4();

// W tym przypadku (powyżej) funckja b4, siedzi fizycznie w a4 Execution Context


// Lekcja nr 17 "Scope, ES6, let"

// Scope: Where a variable is available in your code 
// and if it's truly the same variable, or a new copy

// let - jest "block scoping", więc np nawet w instrukcji if

{
	let zmienna = "nie wyswietli w consoli";
}
// console.log(zmienna); // będzie erro "in not defined"


// Lekcja nr 18 "What about Aynchronous Callbacks?"

// Asynchronous: More then one at a time.

// long running function
function waiThreeSeconds() {
	var ms = 3000 +new Date().getTime();
	while (new Date() < ms){}
	console.log('finished function');
}

function clickHandler() {
	console.log('click event!');
}

// listen for the click event
document.addEventListener('click', clickHandler);

waitThreeSeconds();
console.log('finished execution');