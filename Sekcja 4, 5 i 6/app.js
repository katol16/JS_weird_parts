// Sekcja nr 4 "Objects and Functions"

// Lekcja nr 30 "Objects and the Dot"

// Object - może mieć: Primitive "property", Object "property", Function "method"

// Poniższy sposób na stworzenie obiektu nie jest najlepszy, ale tutaj dla celów demonstracyjnych go użyjemy
var person = new Object();

// ustawimy mu pewną property (Primitive property - string), za pomoca operatora []
// generalnei za pomocą operatora [], mamy dostęp do wartości (property) obiektów
// możemy tworzyć nowe wartości lub edytować stare
person["firstName"] = "Tony";
person["lastName"] = "Smitch";

var firstNameProperty = 'firstName';

console.log(person);
console.log(person[firstNameProperty]);

// Bardziej powszechny operator do edytowania i ustawiania wartości w obiektach to "."
// aczkolwiek peirwszy operator z [], tez jest przydatny
// Poniżej przykłady

console.log(person.firstName);
console.log(person.lastName);

// object inside object
person.address = new Object();

// zapsizemy string w obiekcie address w person
person.address.street = "111 Main St.";
person.address.city = "New York";

console.log(person.address.street);
console.log(person.address.city);
console.log(person['address']['city']);

// Z tej lekcji pamiętaj, żeby używać '.' zamiast '[]', bo kropka jest czystsza i abrdziej powszechna,
// chyba, ze z jakeigoś powodu potrzebuejsz użyć '[]'.
// Pamiętaj też , ze metoda na tworzenie obiektów 'new Object();', nie jest najlepsza


// Lekcja nr 31 "Objects and Objects Literals"

// skrót do tworzenia obiektu, nazywany "Object literal"
var person2 = {};

// plusem tego rozwiazania, jest to, że mozesz od razu wprowadzać key-value pairs do obiektu
// więc szybciej się tworzy (piszę) takie obiekty.
var person3 = {
	firstName: 'Karol',
	lastName: 'Vogelgezang',
	address: {
		street: 'Sobieskiego 16',
		city: 'Narol'
	}
};

console.log(person3);

// przykład z funkcją i przekazaniem obiektu do funkcji
var Karol = {
	firstName: 'Karol',
	lastName: 'Vogelgezang',
	address: {
		street: 'Sobieskiego 16',
		city: 'Narol'
	}
};

function greet(person) {
	console.log('Hi ' + person.firstName);
}

greet(Karol); // wyświetli - Hi Karol

// Pamietaj, że możesz też wywołać funkcję z obiektem utworzonym w locie, za pomoca {}
greet({firstName: 'Mary', lastName: "Smith"});

// dodanie adresu
Karol.address2 = {
	street: 'Sobieskiego'
}


// Lekcja nr 32 "Framework aside: Faking Namespaces"

// Namespace: A container for variables and functions
// Typically to keep variables and functions with the same name seperate

// Teraz o co chodzi z tym "Faking namespaces"

var greet2 = 'Hello!';
var greet2 = 'Hola!';

console.log(greet2);

// Generalnie tych faking namespaces używamy przy budownaiu np. frameworka, albo biblioteki
// Chodzi o to, żeby tworzyć dla naszych zmiennych pewien konterner w postaci obiektu,
// żeby te zmeinne nie były dostępne globalnie i nikt ich nie nadpisał.

// Poniżej dwa sposby jak możesz taki kontener utworzyć
// "engilsh" jest przykładem gdzie musimy bardziej zagnieździć nasz kontener
var english = {
	greetings: {
		basic: 'Hello!'
	}
};

var spanish = {};

spanish.greet = 'Hola!';

console.log(english.greetings);
console.log(spanish.greet);


// Lekcja nr 33 "JSON and Object Literals"

// JSON - JavaScript Object Notation. Jest inspirowany przez Object Literals, wyglada podobnie,
// ale błędem jest myślenie, że to to samo!

var objectLiteral = {
	firstName: 'Mary',
	isAProgrammer: true
}

console.log(objectLiteral);

// Teraz mała uwaga. Kiedyś dane były wysyłane/odbierane w internecie w formacie xml
// np:
// <object>
// 	<firstName>Mary</firstname>
// 	<isAProgrammer>true</isAProgrammer>
// </object>
// ale było to mało wydajne, bo zauważ ile chociażby znaków trzeba użyć do takiego formatu danych
// Stąd programiści zainspirowani Object Literals, wpadli na pomysł JSON'a

// JSON:
// Pamiętaj, że proporties, musza być w cudzysłowie ("").
// Pamietaj, że to jest również poprawny Object Literal, bo proporties mogą być w "" w Object Literals
// ale MOGĄ! A w JSON MUSZĄ
// Wieć można powiedzieć, że każdy JSON, jest Object Literal, ale nie każdy Object Literal jest JSON'em
// {
// 	"firstName": "Mary",
// 	"isAProgrammer": true
// }

// Ponieważ JSON, jest łatwo czytany i kownertowany w JS, to często w JS używamy JSON'a

console.log(JSON.stringify(objectLiteral));

// podobnie poniżej. Weźmie JSON'a i zamieni go w obiekt
var jsonValue = JSON.parse('{"firstName": "Mary","isAProgrammer": true }');
console.log(jsonValue);


// Lekcja nr 34 "Functions are Objects"

// Functions are Objects

// First Class Functions: Everything you can do with other types(object, strings, booleans) you can do with functions.
// Assign them to variables, pass them (functions)  around, creare them on the fly.

// Function is a special type of Object!
// Ponieważ funkcje to specjalne obiekty, możesz do nich (funkcji) dołączyć: Primitive, Object, Function
// Ukryte specjalne włąściwości funkcji:
// Name - Optional, can by anonymous (generalnie imie funkcji)
// CODE - Tutaj siedzą linie kodu, które napisałeś w funkcji (ciało funkcji, body of a function)

// Czyli funckja, która napsiałeś, jest obiektem, który korzysta z wielu właściwości
// np. kod, który napsiałes siedzi we właściwości i korzysta z właściwości "CODE"

// Przykład, do tego co jest w opisie o funkcjach
function greet() {
	console.log('Hi');
}

// ponieważ funckje to obikety, możemy po kropce się odwołać i dodać właściwość do funkcji
greet.language = "english";
console.log(greet); // dostaneisz tekst całej funkcji, którą napsiałeś
console.log(greet.language); // zwróci 'english'


// Lekcja nr 35 "Function Statements(Declaration) and Function Expressions"

// Expression: A unit of a code that results in a Value
// It doesn't have to save to a variable
// Expression returns a value!
// Przykłady:
// a = 3;
// 1 + 2;
// a = {greeting: 'hi'}

// Statement: np. 'if', czyli statement, tylko robi jakąs robotę, ale wartość zwraca expression
// var a;
// if (a===3) {
	// wewnątrz już będzie expression, bo if zwróci 'true' lub 'false'
// }

// Function statement
// bo nie zwraca żadnej wartości
greet3();
function greet3() {
	console.log('hi!');
}

// Function expression
// (Poniżej) bo masz '=' masz jakąś zmienną, która posiada jakąś wartość (w tym przypadku funkcję - czyli special object)
var anonymousGreet = function() {
	console.log('hi!');
}

// wywołanie powżyszej funkcji normalnie po zmiennej: anonymousGreet();
anonymousGreet();

// UWAGA!
// jak zrobimy tak:
	// anonymousGreet();
	// var anonymousGreet = function() {
	// 	console.log('hi!');
	// }
// to będzie 'udefined is not a function', ze względu na hoisting! Pamiętaj!
// Pamiętaj też, że to zadziałą normalnie
	// greet3();
	// function greet3() {
	// 	console.log('hi!');
	// }
// Hoisting jesli widzi funkcję w creation phase to ją zapisuje w pamieci, dla zmiennych tworzy miejsce i daje undefined w creation phase
// Function expressions are not HOISTED! ??????
// JS is variable HOISTED!

// dlatego, żeby działłao musi by tak:

greet3();
function greet3() {
	console.log('hi!');
}

var anonymousGreet = function() {
	console.log('hi!');
}
anonymousGreet();

// Dodatkowo

function log(a) {
	console.log(a);

	// tutaj możesz też wywołać poniżej przekazaną funkcję jako parametr (linia 262)
	// a();
}

log(3); // Wyświetli 3
log("Hello") // Wyświetli "Hello"
log({
	greeting: 'Hi'
}) // Wyświetli obiekt

// możmey też przekazać funkcję
log(function() {
	console.log('Hi');
});


// Lekcja nr 36 "Conceptual aside: By Value VS By Reference"

// By Value
// Masz screena z kursu w folderze "Sekcja 4"
// generalnie jak mamy jakąś zmienną 'a', to zajmuje ona jakieś miejsce w pamięci
// jeśli teraz przypiszemy b=a, to dla 'b' zostanie utworzone nowe miejsce w pamięci, w której będzie skopiowana wartość 'a'

// By Reference
// Masz screena z kursu w folderze "Sekcja 4"
// W tym przypadku jak mamy Obiekt w którym jest 'a' i tworzymy b=a, to 'b', będzie wskazywało na ten sam obiekt
// wiec 'b' będzie wyznaczane na podstawie referencji. 'b' po prostu będzie wskazywało na wczesniej utworzony obiekt,
// żaden nowy obiekt nie będzie tworzony itd. nie będzie tworzona kopia tego obiektu.
// Po prostu mimo tego, że 'a' i 'b' będa miały swoje meijsce w pamięci, to będa wskazywały w to samo miejsce

// Wszystkie obiekty oddziaływują 'by reference'

// Przykłady
// By Value
var a = 3;
var b;

b = a;

// ta dwójka nie wpłynie juz na 'b'
a = 2;
console.log(a); // 2
console.log(b); // 3
// poniważ to jest by value, to jest utworzona kopia 'a' dla 'b' i kolejne nadpsianie 'a' juz nie wplynie na 'b'

// By Reference (all objects (including functions - bo funkcję to specjalny typ obiektu)
var c = {
	greeting: 'hi'
}
var d;

d = c;

c.greeting = 'Hello'; // mutate
// Muttate: To change something
// "Immutable" means it can't be changed

//
console.log(c);
console.log(d);
// zobaczymy ten sam obiekt dwa razy! Z {greeting: "Hello"}

// By Reference (even as parameters)
function changeGreeting(obj) {
	obj.greeting = 'Hola'; // Mutate
}

changeGreeting(d);
console.log(c);
console.log(d);
// Znowu będziemy mieli dwa te same obiekty z "Hola"

// UWAGA!
// Do Powtórzenia!
// Equals operator sets up new memory space (new address in memory)

c = { greeting: 'Howdy'};
console.log(c); // zwróci 'Howdy'
console.log(d); // zwróci "Holla"
// W tym momencie dla 'c' zostanie utworzone nwoe miejsce w pamięci, więc 'c' i 'd' nie będa już wskazywały w to samo miejsce
// więc conolse.logi zwrócą co innego

// All primitive types - "By Value"
// All Objects - "By Reference"


// Lekcja nr 37 "Objects, Functions, and 'this'"

// UWAGA! W zależności od tego gdzie żyje funkcja i jak jest wywołana, będzie zależeć wskazania na obiekt 'this'
// Przykłady:

console.log(this); // wskaże na window, na tym poziomie wskazuje an global object czyli window

function aF() {
	console.log(this); // znowu będzie to window! Zapamiętaj!
}

// Jeśli zwyczajnie wywołasz funckje, to w powyższej consoli zobaczysz, ze'this' wskazuję na window!
aF();


var b = function() {
	console.log(this);
}
// znowu 'this' wskaże na window!
b();

// Tworząc function statement, albo function expressions, 'this' będzie wskazywało na globalny obiekt


// Do Powtórzenia!
var c = {
	name: 'The C Object',
	secondName: 'Imie',
	log: function() {
		console.log(this); // zwróci obiekt c

		this.secondName = 'Drugie imie'
		console.log(this); // zwróci obiekt 'c' z secondName równym 'Drugie imie'

		// Poniżej pokażemy coś co wielu ludzi uważa za błąd w języku JS
		var setname = function(newname) {
			// 'this' ttuaj wskaże na global object 'window'
			this.name = newname;
		}
		setname('Updated name in C  Object');
		// Tutaj będziemy oczekiwać, że w poniższym console.log, zwróci obiekt z wartością name = 'Updated name in C  Object'
		console.log(this);
		// Okazuje się, że nie. W obiekcie 'c', name będzie wciąż jako 'The C Object'!
		// Dzieję się tak daltego, że 'this' w funkcji setname, wskazuję na window
		// czyli funkcję wewnątrz funkcji(metody) mają problem i kierują 'this' na 'window'

		// Kolejna przykład poniżej:
		function testowaFunkcja() {
			console.log("testowaFunkcja this:");
			console.log(this); // również wskaże na window
		};
		testowaFunkcja();

		// żeby powyższy problem rozwiązać, robimy coś co nazywamy często "that" lub "self"
		// Sposób tego rozwiazania działa, ponieważ obiekt zapisywane sa w pamięci za pomocą "reference"
		// Poniżej pokażemy rozwiazanie w metodzie log2 (właśnie z self lub that)
	},
	log2: function() {
		var self = this;

		self.secondName = 'Drugie imie'
		console.log(self); // zwróci obiekt 'c' z secondName równym 'Drugie imie'

		var setname = function(newname) {
			// Ważne!
			// 'self' wskaże teraz na obiekt 'c' !!!
			self.name = newname;
		}
		setname('Updated name in C  Object');
		console.log(self);
	}
}

c.log();
c.log2();
// Kiedy funckja jest metodą danego obiektu, to w tej funkcji 'this', wskazuje na ten obiekt

// Pamiętaj też, ze po części 'let' załatwia ten problem (ale chuj wie w jakim stopniu, bo gość nie mówił)


// Lekcja nr 38 "Arrays - Collections of Anything"

// Array literal syntax
var arr = [1,2,3];

// W innych językach programowania, tablice mogą przechowywać konretny typ danych, np. Numbers, strings itd.
// W JS, mozesz w jednej tablicy mieć wszystko

var arr = [
	1,
	false,
	{
		name: 'Karol',
		age: 27
	},
	function(name) {
		var greeting = 'Hello';
		console.log(greeting + name);
	},
	'hello'
];

console.log(arr);
arr[3](arr[2].name); // zwróci "Hello Karol"


// Lekcja nr 39 "'Arguments' and Spread"

// Arguments: Przechowuje listę wszystkich parametrów, które przekazujesz do funkcji.
// Arguments: The pamaters you pass to a function
// JavaScript gives you a keyword of the same name which contains them all

function greet(firstname, lastname, language) {

	// Możemy ustawić jakiś język jako defaultowy
	language = language || 'En';

	console.log(firstname);
	console.log(lastname);
	console.log(language);
	console.log('------------');
	// Poniżej otrzymamy listę (Nodelist) parametrów, które rpzekazujemy do funkcji
	// Trzeba pamietac, że argumenty zostaną zwrócone w nodelist a nie w tablicy!
	console.log(arguments);
}

// W wielu językach programowania, takie wywolanie funkjci spowoduje błąd
// W JS, nie musimy przekazywać parametrów i funkcja sie normalnie wykona, tylko zwróci 3 razy undefined
// Hoisting to za ciebie załatwia, ze przygotwouje miejsce w pamieci dla tych parametrów, nawet jak ich nie dostarczysz
greet(); // 3 x 'undefined'

greet('John'); // John i 2 x 'undefined'
greet('John', 'Doe', 'Es'); // John Doe Es


// Jeśli chcemy, żeby funkcja nie robiła nic, jak nie przekażemy parametrów to można zrobić cos takiego:
function greet2a(firstname, lastname, language) {

	// Możemy ustawić jakiś język jako defaultowy
	language = language || 'En';

	if (arguments.length === 0 ) {
		console.log('Nie ma parametrów');
		console.log('--------');
		return;
	}

	console.log(firstname);
	console.log(lastname);
	console.log(language);
	console.log('------------');
	// Poniżej otrzymamy listę (Nodelist) parametrów, które rpzekazujemy do funkcji
	// Trzeba pamietac, że argumenty zostaną zwrócone w nodelist a nie w tablicy!
	console.log(arguments);
}
greet2a();

// Spread operator: (jeszcze chyba nie dostępny)

// function greet(firstname, lastname, language , ...other) {

// }
// greet(x,y,z,a,b,c);
// Dzięki '...other' możemy przekazywać więcej parametrów i wszystkie będa w liście arguments


// Lekcja nr 40 Framework aside "Function overloading"

// Function overloading, wystepuje chyba bardziej w innych językach programownaia
// W JS chyba mniej


// Lekcja nr 41 Conceptual aside "Syntax parsers"


// Lekcja nr 42 Dangerous aside "Automatic semicolon insertion"

// w JS, dodawanie ';' teoretycznie nie jest wymagane, bo silnik JS, sam stara się domyśleć gdzie go wstawić
// i wstawia go za nas.
// UWAGA! Takie zachowanie JS, moze doporowadzić do błędów, które ciężko zlokalizować
// Dlatego musisz ZAWSZE sam dodawać ';' !!!

// Przykłady błędów związane z insertion ';'

function getPerson() {

	return // tutaj silnik JS zrobi insertion i doda ';'
	// przez co w consoli zwróci undefined
	// robi tak dlatego, ze jak widzi, ze programsita dał enter, to znaczy
	// ,ze chce przejść do następnej linii i wtedy silnik daje insertion ';'
	{
		firstname: 'Tony'
	}

	// aby to naprawić wystraczy zrobić
	// return {
	// 	firstname: 'Tony'
	// }

	// WAŻNE !!!
	// DLATEGO ZAWSZE DAWAJ '{'' W TEJ SAMEJ LINI JAK POWYŻEJ
}

// zwróci undefined
console.log(getPerson());


// Lekcja nr 43 Framework aside "Whitespace"

// Whitespace: Invisible characters that create literal 'space' in Your written code
// Carriage returns, tabs, spaces.
// Generalnie JS, ignoruje spację i daję to plus, bo mozesz dawać komentarze pomiędzy
// i kod jest czytelniejszy
// Dodawaj dużo komentarzy do kodu! Sam tego nie pożałuejsz,
// bo nawet jak Tobie przyjdzie znowu pracowac nad twoim kodem, bedziesz lepiej pamiętał o co Ci chodziło


// Lekcja nr 44 "Immediately invoked function expressions (IIFE)s"

// function satetement
function greet(name) {
	console.log('Hello '+name);
}
greet('John');

// using a function expression
var greetFunc = function(name) {
	console.log('Hello '+name);
};
greetFunc('John');

// using an IIFE
var greeting = function(name) {
	console.log('Hello '+name);
}('John');


// Całkowicie poprawne JS expressions i statement (które nie wyjebią błędu):
3;
"Hello world";
{
	name: 'Karol'
};


// Poniżej wyjebie nam taki błąd:
// Uncaught SyntaxError: Unexpected token (
// Dlaczego tak się dzieję? Ponieważ syntax parser wymaga po słowie kluczowym nazwy funkcji.
// Wymaga, zeby to było function expression, a w naszym przypadku to będzie function statement!
// UWAGA! Tutaj mamy function statment! A NIE function exporession
// function(name) {
// 	return 'Hello ' + name;
// }

// Więc jeśli chcesz mieć function expression zamiast function statement to robisz taki trik:
(function(name) {
	return 'Hello ' + name;
});
// dzieje się tak ponieważ wewnątrz nawiasów masz function expression, jak gdyby JS zakłąda, ze wewnatrz nawiasu bedzie zwrocona jakas wartość
// w ten sposób mamy funckję która istnieje i nic nie robi

// Pewien przykład, gdzie mamy funckję która coś robi i chcemy ją wykonać, wiec robimy tak:
var imie = 'John';

(function(name) {
	console.log('inside IIFE: Hello ' + name);
}(imie)); // IIFE (klasyczyny przykład)

// UWAGA! Można wywołąć IIFE, na dwa sposoby. Pierwszy powyżej, a drugi poniżej:
(function(name) {
	console.log('inside IIFE: Hello ' + name);
})(imie);
// Drugi przykład to wywołanie na zewnątrz. Obie formy poprawne.
// Wybierz sposób wywołania IIFE, który według Ciebie jest lepszy i ciagle go używaj.


// Lekcja nr 45 Framework aside "IIFEs and Safe Code"

// Tworzymy nowy plik greet.js
// w pliku greet.js tworzymy zmienną greeting, ktora i tak zostanie nadpisna w poniższej funkcji

(function(name) {
	var greetingTwo = "Hello";
	console.log(greetingTwo + ' ' + name);
}('John')); // IIFE

// Pamiętajmy jednak, ze jeśli tutaj zrobimy:
console.log(greetingTwo); // to wyswietli 'Hola' z pliku greet.js

// wiec plus IIFE, jest taki,z e mam pewność, ze np. zmienna zapsiana w IIFE, nie będzie naruszana przez inny kod
// ani nie naruszy innego kodu


// Lekcja nr 46 "Understanding clousures"

function greet(whattosay) {
	return function(name) {
		console.log(whattosay + '' + name);
	}
}

greet('Hi')('Tony');
// wywołasz normlanie funkcję greet, a póżniej jej wewnętrzną funkcję i consola zwróci normlanie "Hi Tony"
// pamiętaj, że greet('Hi'); zwróci funkcję, więc po prostu znowu ją wywołasz ('Tony');

// Tutaj jednak mamy pewne 'dziwne' rzeczy. Przykład:
var sayHi = greet('Hi');
sayHi('Tony');
// To też się wykona poprawnie. Tylko skąd zwracana funkcja wie (pamięta), jaką wartosc ma zmienna "whattosay". itd.
// To działa poprawnie właśnie ze względu na CLOUSURES
// Generalnie CLOUSURES działają tak, że funckja wewnętrza widzi zmienne/argumenty w swoim otoczeniu


// Lekcja nr 47 "Understanding clousures part 2"

function buildFunctions() {
	var arr = [];

	for (var i = 0; i < 3; i++) {
		arr.push(
			function() {
				console.log(i);
			}
		)
	}

	return arr;
}

var fs = buildFunctions();

fs[0]();// zwróci 3
fs[1]();// zwróci 3
fs[2]();// zwróci 3

// będzie 3 razy '3'

// Dzieję się tak ponieważ zmienna "i" jest nadpisywana w pętli. Ostatni jest zapis bedzie i=3 i pętla się skończy

// Teraz żeby otrzymać rezultat 1,2,3 możemy zrobić np:
// za pomocą ES6
function buildFunctions2() {
	var arr = [];

	for (var i = 0; i < 3; i++) {
		let j = i;
		arr.push(
			function() {
				console.log(j);
			}
		)
	}

	return arr;
}

var fs2 = buildFunctions2();

fs2[0]();// zwróci 0
fs2[1]();// zwróci 1
fs2[2]();// zwróci 2

// za pomocą ES5
function buildFunctions3() {
	var arr = [];

	for (var i = 0; i < 3; i++) {
		arr.push(
			(function(j) {
				return function() {
					console.log(j);
				}
			}(i))
		)
	}

	return arr;
}


// Lekcja nr 48 "Framework Aside: Function Factories"

// TO nam obrazuje, jaką kolejną przewagę dają nam CLOUSURES
// Function Factories - Factories means functions that returns or mix other things for you

function makeGreeting(language) {
	return function(firstname, lastname) {
		if (language === 'en') {
			console.log('Hello '+firstname+lastname);
		}

		if (language === 'es') {
			console.log('Hola '+firstname+lastname);
		}
	}
}

var greetEnglish = makeGreeting('en');
var greetSpanish = makeGreeting('es');

greetEnglish('John','Doe');
greetSpanish('John','Doe');


// Lekcja nr 49 "Clousures and Callbacks"
// Mogłeś już korzystać z Clousures o tym nie wiedziałeś
// Przykłąd poniżej:

function sayHiLater() {
	var greeting = 'Hi!';

	setTimeout(function() {
		console.log(greeting);
	}, 3000)
}

sayHiLater();

// jQuery uses function expressions and first-class functions!
// $("button").lick(function() {
// 	// zrób coś
// });

// CALLBACK FUNCTON - A function you give to antoher function, to be run when the other function is finished.
// So the function you call (i.e.invoke), 'calls back' by calling the function you gave it when it finishes.

// Przykłąd z CALLBACK Function

function tellMeWhenDone(callback) {
	var a = 1000; // some work
	var b = 2000; // some work

	callback(); // the 'callback', it runs the function I give it!
}

tellMeWhenDone(function() {
	console.log('I am done!')
});

tellMeWhenDone(function() {
	console.log('I am already done!')
});


// Lekcja nr 50 "call(), apply(), bind()"

var person = {
	firstname: 'John',
	lastname: 'Doe',
	getFullName: function() {
		var fullname = this.firstname + ' ' + this.lastname;
		return fullname;
	}
}

var logName = function(lang1, lang2) {
	// Poniższe "this" wskażę na obiekt globalny, wiec console.log zwróci błąd.
	console.log('Logged: ' + this.getFullName());
	console.log('Arguments: ' + lang1 + ' ' + lang2);
	console.log('---------');
	// Poniższy sposób zadziała
	// console.log('Logged: ' + person.getFullName());
}

// logName();

// Aby teraz naprawić funkcję logName, tak żeby 'this' wskazywało na person
// Tworzymy nową funkcję, która jest kopią funckji logName, ale z bind, który powododuje, że "this" wskaże na person
var logPersonName = logName.bind(person);
logPersonName('en');

// UWAGA! 2 sposób zapisu tego co powyżej, też porpawny

var logName2 = function(lang1, lang2) {
	// Poniższe "this" wskażę na obiekt globalny, wiec console.log zwróci błąd.
	console.log('Logged: ' + this.getFullName());

	// Poniższy sposób zadziała
	// console.log('Logged: ' + person.getFullName());
}.bind(person);

logName2();

// call i apply
// call - od razu wywołuje funkcję, więc nie trzeba robić logName();
// w call podajesz jako peirwszy argument, to co ma się odowływać do this
logName.call(person);
// a po przecinku nastepne parametry
logName.call(person, 'en', 'es');

// apply - działa jak call
logName.apply(person);
// różnica w apply jest taka, że następne parametry podajemy w tablicy
logName.apply(person, ['en', 'es']);

// Inna metoda wywołąnia funckji za pomocą call i applty

(function(lang1, lang2) {
	console.log('Logged: ' + this.getFullName());
	console.log('Arguments: ' + lang1 + ' ' + lang2);
	console.log('---------');
	// Poniższy sposób zadziała
	// console.log('Logged: ' + person.getFullName());
}).apply(person, ['en', 'es']);

// Możesz się zastanawiać kiedy użyjesz tego w praktyce, dlatego poniżej przykłązd z:
// function borrowing

var person2 = {
	firstname: 'Jane',
	lastname: 'Doe'
};

// Teraz pożyczymy funkcję z obiektu person do obiektu person2
person.getFullName.apply(person2);
console.log(person.getFullName.apply(person2));
// Powyżej możesz też oczywiście użyć call

// Nastepny przykłąd użycia z wykorzystaniem function currying
// function currying
function multiply(a,b) {
	return a*b;
};

var multiplyByTwo =  multiply.bind(this, 2);

// Powyższy zapis, to tak jakbyśmy zapisali to w taki sposób:
// function multiplyByTwo(b) {
// 	var a =2;
// 	return a*b;
// }
// czyli nie definiujemy tam "this" jako konretny obiekt, wiec przekauzjemy this, bez zmian, ze this=this
// a "2" to nasz peirwszy parametr "a"

// wywołąnie funckji
multiplyByTwo(4); // 4 bedzie tu parametrem "b"
console.log(multiplyByTwo(4));

// stworzymy nową funckję z funckji multiply z innymi defaultowymi parametrami.
var multiplyByThree =  multiply.bind(this, 3);
console.log(multiplyByThree(4));

// FUNCTION CURRYING - Creating a copy of a function but with some preset parameters.
// Very useful in mathematical situations


// Lekcja nr 51 "Functional programming"

// Poniżej przykład programowania funkcyjnego, zauważ, że tworzysz tu jedną funkcję i za pomocą niej robisz różne rzeczy
// Poniżej masz, ze do funkcji przekazuejsz jako peirwszy parametr tablicę, jako drugi funkcję
// Zauważ. że ta funkcja ma na każdym elemencie przekazanej tablicy, wywołać przekazanć funkcję
function mapForEach(arr, fn) {

	var newArr = [];
	for (var i=0; i < arr.length; i++) {
		newArr.push(
			fn(arr[i])
		)
	};

	return newArr
}

var arr1 = [1,2,3];
console.log(arr1);

var arr2 = mapForEach(arr1, function(item) {
	return item * 2;
});
console.log(arr2);

var arr3 = mapForEach(arr1, function(item) {
	return item > 2;
});
console.log(arr3);


// Teraz stworzymy funkcję taką jak powyżej (arr3), ale chcemy żeby ten limit też był parametrem
// Tu mamy taki problem, ze checkPastLimti, ma dwa parametry a nasza funkcja w mapForEach, ma jeden
// Rozwiązemy ten problem za pomocą bind

var checkPastLimit = function(limiter, item) {
	return item > limiter;
};
// poniżej limiter =1
var arr4 = mapForEach(arr1, checkPastLimit.bind(this, 1));
console.log(arr4);


var checkPastLimitSimplified = function(limiter) {
	return function(limiter, item) {
		return item > limiter;
	}.bind(this, limiter);
};

var arr5 = mapForEach(arr1, checkPastLimitSimplified(1));
console.log(arr5);


// Lekcja nr 52 "Functional Programming"
// underscore.js
var arr6 = _.map(arr1, function(item) { return item * 3});
console.log(arr6);

var arr7 = _.filter([2,3,4,5,6,7], function(item) {
	return item % 2 === 0;
});
console.log(arr7);


// Lekcja nr 53 "Conceptual Aside: Classical vs prototypal Inheritence"

// INHERITANCE: One object gets access to the proporties and metods of another object.

// CLASSICAL INHERITANCE
	// Bywa trudne do ogarnięcia, jest dużo zależności, ale oczywiscie ma swoje plusy i działa
		// Słowa związane z classical inheritance: friend, protected, prviate, interface

// PROTOTYPAL INHERITANCE tego używa JavaScript
	// Prostsze, ale zarówno classical jak i prototypal nei są idealne, oba mają swoje plusy i minusy
		// Słowa związane z prototypal inheritance: flexible, extansible, easy to understand


// Lekcja nr 54 "Understanding the prototype"

// Zrób screena ze schematu o prototype chain

var person = {
	firstname: 'Default',
	lastname: 'Default',
	getFullName: function() {
		return this.firstname + ' ' + this.lastname;
	}
};

var john = {
	firstname: 'John',
	lastname: 'Doe'
};

// Don't do this EVER! For demo purposes only!!!
john.__proto__ = person;
// tutaj trzeba zauważyć, że słowo kluczowe this, porpawnie wskażę na Johna
console.log(john.getFullName());
// prototype chain zaczyna od góry, więc zatrzyma się jak znajdzie Johna, i tutaj imie tez bdzie john a nie default
console.log(john.firstname);

var jane = {
	firstname : 'Jane'
};

jane.__proto__ = person;
// tutaj pokaże Jane Default
console.log(jane.getFullName());


jane.__proto__ = john;
// tutaj pokaże Jane Doe
console.log(jane.getFullName());


// Lekcja nr 55 "Everything is an Object (or a primitive)"

// Teraz jak w consoli w przeglądarce wpsizesz a.__proto__ , zobaczysz, ze pokaże Ci "Base object", czyli Object {}; i ten obiekt będzie miał właściwosci które mamy dostępne na obiektach
var a = {};


// Pamiętaj, że funkcję to obiekty o specjalnych właściwościach
// Teraz jak w consoli w przeglądarce wpsizesz b.__proto__ , zobaczysz, ze pokaże Ci "Base object", czyli function Empty() {}; i ta funkcja będzie miała właściwości które mamy dostępne na funkcjach
// np: bind, apply itd.
var b = function() {};

// Tutaj anaoligcznie przy c.__proto__ zwróci []; i też właściwości na tablicach, np: concat, indexOf, length, push
var c = [];


// Tutaj masz fajny przykłąd jak działa dziedziczenie prototypowe. Wszystkie metody dostępne na funkcjach, tablicach, obiektach są w __proto__
// tam fizycznie siedzą, w prototype chain JS szuka funkcji zapisanych bezpośrednio na tablicy/obiekcie/funckji, jak nie znajdzie to idzie do __proto__ i tam ma np: bind, concat itd.

// Czyli genealnie to w prototypie siedzą właściwości zarówno obektów jak i funkcji jak i tablic

// Pamiętaj, że na samym dole prototype chain jest Object {}, czyli:
// a.__proto__.__proto__ to samo dla b.__proto__.__proto__ i c.__proto__.__proto__ , zawsze będzie tu Object {}, głębiej się nie da zejść


// Lekcja nr 56 "Reflection and extend"

// REFLECTION - An object can look at itself, listing and changing its properties and methods
// Dzięki reflection mamy możliwość użycia "extend"

var person = {
	firstname: 'Default',
	lastname: 'Default',
	getFullName: function() {
		return this.firstname + ' ' + this.lastname;
	}
};

var john = {
	firstname: 'John',
	lastname: 'Doe'
};

// Don't do this EVER! For demo purposes only!!!
john.__proto__ = person;

// Tu mamy pętle for in, podobno do for each
// będzię biegła po "propertis" w obiekcie john (var prop in john)
for (var prop in john) {
	console.log(prop + ': ' + john[prop]);
};

// W powyższej consoli w pętli for in, pokaże nam firstname, lastname i funckcję getFullName, mimo, że nie ma jej bepośrednio w obiekcie, ale jest w protototypie

// Teraz przy założeniu, że chcemy sprawdzić tylko obiekt, ale nie sprawdzać prototypu, możemy:
for (var prop in john) {
	if (john.hasOwnProperty(prop)) {
		console.log(prop + ': ' + john[prop]);
	}
};

var jane = {
	address: '111 Main St.',
	getFormalFullName: function() {
		return this.lastname + ', ' + this.firstname;
	}
};

var jim = {
	getFirstName: function() {
		return firstname;
	}
}

// Użyjemy underscore
_.extend(john, jane, jim);

// Zauważ, że teraz rozszerzyliśmy metody obketu john, o metody obiektu jane i jim
console.log(john);

// Lekcja nr 57 "Function Constructors, 'new', and the History of Javascript"

function Person() {
	// Poniżej "this" będzie kierowało na pusty obiekt Person
	console.log(this);

	// na "this" ustawimy firstname i lastname
	this.firstname = 'John';
	this.lastname = 'Doee';
	console.log('This function is invoked');

	// Pamietaj, że jak bedziesz tu miał return, która zwraca obiekt, to tylko ten obiekt zostanie zwrócony np:
	// return {obiekt: "Tylko to zwróci a nie naszego johna doee"}
};

//
var john = new Person();
// Otrzymamy obiekt Person z firstname: John i lsastname Doee
// Pamiętaj, że słowo kluczowe "new" ustawi this, na pusty obiekt Person
console.log(john);

// Function Constructor
// Powyższy przykład jest troche chujowy, bo ustawiamy na stałę firstname i lastname, a mozemy to zrobić tak:
function Person(firstname, lastname) {
	console.log(this);
	this.firstname = firstname;
	this.lastname =  lastname;
};

var karol = new Person('Karol', 'Vogelgezang');
console.log(karol);
var jakub = new Person('Jakub', 'Vogelgezang');
console.log(jakub);

// FUNCTION CUNSTRUCTORS: A normal function that is used to construct objects.
// The "this" variable points a new empty object, and that object is returned from the function automatically.


// Lekcja nr 58 "Function Constructors and '.prototype'"

function Person(firstname, lastname) {
	console.log(this);
	this.firstname = firstname;
	this.lastname =  lastname;
};

var tomek = new Person('Tomek', 'Tomczyk');
console.log(tomek);
var robert = new Person('Robert', 'Robczyk');
console.log(robert);

// Każdy function contructor, a nawet każda funkcja ma dostęp do .prototype
Person.prototype.getFullName = function() {
	return this.firstname + ' ' + this.lastname;
};

console.log(tomek.getFullName());

// Takie feature w JS, daje przewagę bo za każdym razem jak tworzysz obiekt w taki sposó”, możesz póxniej dodawać do wszystkich tych obiektów różne metody
// tak jak masz w powyższym przykładzie
// np. Utworzysz 100 obiektów za pomocą new Person('Robert', 'Robczyk'); , to do wszystkich możesz później łątwo dodać nową metodę za pomocą
// Person.prototype.getFullName = function() {
// 	return this.firstname + ' ' + this.lastname;
// };

// Takie rozwiązanie jest lepsze niż dodanie tej powyższej metody bezpośrednio w function cotracutor "Person", bo wtedy wsyzstkei 100 obiektów będzie
// zajmować dodatkowe meisjce na tę metodę.
// A dodając do prototypu, masz ją tylko raz a konretne obiekty po prostu z neij korzystają, jest to badziej wydajne.


// Lekcja nr 59 "Dangerous Aside: 'new' and fucntions"

// Pamiętaj, że w powyższym przykałdzie z new Person, tworzysz po prostu funkcję.
// Oczywiśćie przez słowo "new", tworzy ona pusty obiekt, na ktry wskazuje this, wiec przez "new" mamy ddoatkową fukncję, ale wciąż tworzymy funkcję
// Ponieważ jest to wciąż tylko funckja, musimy pamiętać o słowie kluczowym "new" bo inaczej nam to nie zadziała tak jak chcemy

function Person(firstname, lastname) {
	// tutaj this, bedzie wskazywał na window
	console.log(this);
	this.firstname = firstname;
	this.lastname =  lastname;
};

var zjebane = Person('zjebane', 'zjeb');
// poniżej pokaże undifined
console.log(zjebane);

// Konwencja w nazewnictwie jest taka, ze za kazdm razem jak tworzysz function contructor, psizesz go z duzej litery, jak "Person"


// Lekcja nr 60 "Conceptual Aside: Built-in Fuction Constructors"
// Czyli wbudowane w JavaScript function constructor

var n = new Number(3);

console.log(n);
// teraz jak w consoli sprawdzimy "n" to otrzymamy nie wartośc prymitywną tylko obiekt: "__proto__: Number {[[PrimitiveValue]]: 3}"
// bo operator "new" tworzy obiekt
// Ale ponieważ jest to biekt, posiada prototyp, który będziemy mieli w Number.prototype
// Jest to prototyp do którego wszystkie typy "number" mają dostęp, więc bedziesz na tym obiekcie miał te same metody co ma number

// Kolejny przykład
var s =  new String("John");
console.log(s);
// Tutaj to działą pdoobnie, bo console.log(s); zwróci : String {"John"}0: "J"1: "o"2: "h"3: "n"length: 4__proto__: String[[PrimitiveValue]]: "John"
// ale też masz wszystkie metody, które działają na stringach, analogicznie jak z Numner, więc możesz spokojnie zrobić:
console.log(s.indexOf('o')); // i to zadziała

// Więc w powyższych przykałdach wyglada jakbyś tworzył wartości prymitywne, ale tworzysz tak naprawdę obiekty, które przechowują prymitywy

// Teraz jeśli chce dodać metodę do wszystkich Stringow, to mogę tę metodę zapisać w prototypie String, czyli:
String.prototype.isLengthGreaterThen = function(limit) {
	return this.length > limit;
}
console.log("John".isLengthGreaterThen(3));

// Kolejny przykłąd z Number
Number.prototype.isPositive = function() {
	return this > 0;
}
var przykladowyNumer = 9;
console.log(przykladowyNumer.isPositive());


// Lekcja nr 61 "Dangerous Aside: Built-in Fuction Constructors"

// Przykłady niebezpieczeństw

var a = 3;
var b =  new Number(3);

console.log(a==b); // zwróci true
console.log(a===b); // to już zwróci false, bo a jest prymitywem, natomiast b jest obiektem
// Więc trzeba na to uważać. Generalnie lepiej nie używać Built-in Fuction Constructors do prymitywów, chyba, że już kurwa musisz, ale generalnie lepiej używać normalnych wartości prymitywnych

// Pamiętaj, ze mzoesz też użyć samej funckji Number, bez słowa "new", któro tworzy obiekt


// Lekcja nr 62 "Dangerous Aside: Arrays and for... in"

// Ponieważ tablice to obiekty mozmey zrobić coś takiego:
var arrNames = ['John', 'Jane', 'Piter'];

Array.prototype.myCustomFeature = 'cool';

for (var prop in arrNames) {
	console.log(prop + ': ' + arrNames[prop]);
}
// Ponieważ tablice to obiekty, a obiekty posiadają key-value pairs, to key bedzie tutaj index tablicy, czyli 0,1,2, a value to imiona

// W 'for in' mamy taki problem, że jak dodamy Array.prototype.myCustomFeature = 'cool'; to w powyzszej cosnoli to zobaczymy

// Dlatego Powinniśmy używać standarowej wersji iterowania po tablicach, a nie 'for in' czyli:
// for (var i = 0; i < arrNames.length; i++) {
//
// }


// Lekcja nr 63 "Object.create and Pure Prototypal Inheritence"

// Inna metoda tworzenia obiektów

var person = {
	firstName: 'Default',
	lastname: 'Default',
	greet: function() {
		// Pamiętaj, że musisz tu użyć słowa kluczowego 'this'
		// Jeśli go nie użyjesz, metoda greet, będzie szukała wewnątrz funkcji "firstname" nie znajdzie, wiec pójdzie do global i też nie znajdzie, wiec zwróci undefined
		return 'Hi ' + this.firstname;
	}
}

// stworzymy inny obiekt na bazie isnitejącego
var john = Object.create(person);
console.log(john); // tutaj zaważysz, że dostaniesz pusty obiekt, ale w prototypie będziesz miał zapisane wsyzstkie włąściwości i metody tego co przekażesz w nawiasach create
// W naszym przypadku jest to person

// Teraz jeśli chcesz zastąpić właściwości defaultowe, robisz po prostu tak:
john.firstname = 'John';
john.lastname = 'Doe';
console.log(john);
console.log(john.greet()); // zadziała

// Jeśli w jakimś projekcie nie mozesz użyć Object.create, bo np. środowisko Ci nie pozwala, albo musisz wspierać starsze przeglądarki
// To możesz użyć czegoś co nazywa się POLYFILL

// POLYFILL - Code that adds a feature which the engine MAY LACK.
// Za pomocą tego wypełnaisz luki, które mogę mieć starsze przeglądarki.

// Przykład dla wsparcia starszych przeglądarek
// Sprawdzi, czy silnik posiada funckję Object.create, jesli nie, to wykona poniższy kod
if (!Object.create) {
	Object.create = function (o) {
		if (arguments.length > 1) {
			throw new Error('Object.create implementaion' + ' only accepts the first paramter.')
		}
		function F() {}
		F.prototype = o;
		return new F();
	};
}
// Dalej leci jak powyżej (od var person)


// Lekcja nr 64 "ES6 and Classes"

// Generalnie tworzenie obiektów za pomocą "Class" w js, działą tak samo jak "new", function constructing i Obiect.create.
// Jest to tzw. Syntactic sugar
// SYNTACTIC SUGAR - A different way to type something that doesn't change how it works under the hood








































































