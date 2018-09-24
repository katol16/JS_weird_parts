// Sekcja nr 3

// Lekcja nr 19 "Conceptual aside: Types and JavaScript"

// Dynamic Typing: You don't tell the engine what type of data a varibale holds, it figures it out while Your code is running

// Variables can hold different types of values because it's figured out during execution

// Static Typing (np. w C# albo w JAVA)
// bool isNew = "Chuj"; // Zwróci błąd

// Dynamic Typing 

// Nie będzie błędów
// var isNew = true; 
// isNew = 'chuj';
// isNew =1;

// Czyli w niektórych językach porgramowania trzeba podać, ze to bedize boolean, string albo number.
// W JS nie trzeba tego robić, bo jest 'Dynamic Typing'
// Oczywiście to ma swoje plusy i minusy, jeśli nie wiesz jak to działa, to może to spowodować problemy

// Lekja nr 20 "Primitive Types"

// Primitive type: A type of data that represent a single value
// That is not an object


// w JS mamy 6 typów prymitywnych:
// 1) UNDEFINED - undefined represents lack of exictence (you sholudn't set a variable to this)
// 2) NULL - represents lack of existence (you can set a variable to this) -  Jeśli chcesz aby zmienna była psuta, to dobrze uzyc "null"
// 3) BOOLEAN - true or false
// 4) NUMBER - Floating point number (there's always some decimals). 
// Unlike other programming languages, there's only 'number' type...and it can make a math weird
// 5) STRING - a sequence of characters (both '' and "" can be used)
// 6) SYMBOL - Used in ES6 (the next version of JavaScript). We won't talk about this here...


// Lekcja nr 21 "Conceptual aside: Operators"

// Operator: A special function that is syntactically (written) differently.
// Genrally, operatos take two parameters and return one result


// Lekcja nr 22 "Operator precedence and associativity"

// Operator precedence: Which operator function gets called first.
// Function are called in orderd of precedence (HIGHER precedence wins)

// Associativity: What order operator functions get called in: Left-to-right or Right-to-left
// When functions have the same precedence

// Przykłady 
var a = 3+4*5;
console.log(a);
// na MDN masz też sporo o Operator precedence, masz tam też listę od najwyższych "precedence" do najniższych

// Co się dzieję gdy funckje maja ten sam numer "precedence"
var a = 2, b = 3, c = 4;

a = b = c;

// dla operatora "=" mamy assiociativity "right-to-left"
// więc na początku wywołuje " b=c "
console.log(a);
console.log(b);
console.log(c);
// wszystkie będa równe 4 

// Jeśli kilka operatorów ma takie same "Precedence", to JS sprawdza associativity, które jest albo left-to-tight albo right-to-left


// Lekcja nr 24 "Conceptual aside: Coercion" 

// Coercion: Converting a value from one type to another 
// This happens quite often in Javascript because it's dynamically typed.

var e = 1 + '2';
console.log(e);
// będzie 12
// Stało się tak ponieważ ta 1, została skonwertowana przez JS na string
// Ponieważ JS jest dynamiclly type, intuicyjnie sam stara się skonwertować odpowiednie wartości


// Lekcja nr 25 "Comparison Operators"

console.log(1<2<3);// zwróci true
console.log(3<2<1);// też zwróci true, co jest dziwne, poniżej masz dlaczego tak się dzieję
// w powyższym przykłądzie dzieje się tak ze względu na Precedence i Associativity
// Przy znaku '<' czyli 'less then' mamy associativity left to right.
// Poniważ mamy dwa znaki '<', to mamy ten sam Precedence i left to right associativity
// Więc to co widzi JS to w sumie będzie console.log(false < 1); 
// A ponieważ false jest przez coercion konwertowane na zero, to zwraca nam "true"
// console.log(Number(false)); zwróci 0

// 3 == 3 // zwróci true
// '3' == 3 // zwróci true
// false == 0 // true
// "" == 0 // true

// To wszystko powyżej dzieje się ponieważ zachodzi coercion
// Jeśli chcemy, żeby coercion nie zachodziło, to robimy '==='

// Uwaga! Coercion zachodzi w inny sposób dla null np:
// null == 0 // zwróci false
// null < 0 // zwróci true
// Czyli w niektórych przypadkach null jest konwertowany na zero, a w niektórych nie jest

// Pamiętaj, że coercion może powodować problemy, dlatego warto używać '==='
// w tym przypadku, nie będzie konwertował wartości
// 3 === 3 // true
// "3" === "3" // true
// "3" === 3 // false
// 0 === false // false

// Pamiętaj! Używaj '===', chyba, że chcesz, zeby coercion zachodziło wtedy mzoesz '=='
// Na temt '===', masz więcej na MDN


// Lekcja nr 27 "Existence and Booleans"

Boolean(undefined); // false
Boolean(null); // false
Boolean(""); // false

var a;
// tak samo bedzie jak a=0

// własnie w tym przypadku coercion jest przydatne, bo skonwertuje wartosc "a", na boolead, w tym przypadku na false.
if (a) {
	console.log('Wykona się');
	// nie ywkona się
}


// Lekcja nr 28 "Default values"

// Pamiętaj, że "lub" czyli || moze zwracać konkretną wartość, a nie tylko true/false
// undefined || "hello" // zwróci "hello"
// null || "hello" // zwróci "hello"
// "" || "hello" // zwróci "hello"

function greet(name) {
	console.log('Hello ' + name);
	// wyświetli 'Hello undefined'
}

greet();

// Teraz funkcja z ustawioną wartością defaultową
function greet2(name) {
	name = name || '<Your name here>'
	console.log('Hello ' + name);
}

greet2();
greet2('Karol');


// Lekcja nr 29 "Framework aside: default values"

// Załóżmy, ze do swojej apki podpinasz 2 bilbioteki i swój skrypt
// czyli:
// <script src="lib1.js"></script>
// <script src="lib2.js"></script>
// <script src="app.js"></script>
// Pamiętaj, że ten kod wykona się tak jakby był w pojedynczym pliku

// i masz tam taki kod 
// <script src="lib1.js">
	var libraryName = "lib1";
// </script>

// <script src="lib2.js">
	var libraryName = "lib2";
// </script>

// <script src="app.js">
 	console.log(libraryName); // zwróci 'lib2'
// </script>

// Pamietaj, że zmienna libraryName jest globalna, siedzi w global execution context

// Jeśli np. przypadkowo nadpiszemy naszą zmienną z biblioteki? 
// Co zrobić w biblitoekach, żeby zabezpieczyć nasze zmienne przed przypadkowm nadpisaniem?
// Poniżej przykład

// Więc sprawdzam, czy już w global cotext istnieje libraryName, jesli nie, to ustawiam mu wartość
// window.libraryName = window.libraryName || "Lib 2";
// więc wstawiając taki kob do lib2.js, sprawimy, że libraryName w poniższym przykąłdzie będzie równe "lib1"

// <script src="lib1.js">
	var libraryName = "lib1";
// </script>

// <script src="lib2.js">
	window.libraryName = window.libraryName || "Lib 2";
// </script>

// <script src="app.js">
 	console.log(libraryName); // zwróci 'lib2'
// </script>
