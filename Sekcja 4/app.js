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

// zapsizemys tring w obiekcie address w person
person.address.street = "111 Main St.";
person.address.city = "New York";

console.log(person.address.street);
console.log(person.address.city);
console.log(person['address']['city']);

// Z tej lekcji pamietaj, zeby używać '.' zamiast '[]', bo kropka jest czystsza i abrdziej powszechna,
// chyba, ze z jakeigoś powodu potrzebuejsz użyć '[]'.
// Pamiętaj też , ze metoda na tworzenie obiektów 'new Object();', nie jest najlepsza


// Lekcja nr 31 "Objects and Objects Literals"

// skrót do tworzenia obiektu, nazywany "Object literal"
var person2 = {};

// plusem tego rozwiazania, jest to, że mozesz od razu wprwoadzać key-value pair do obiektu
// więc szybciej się tworzy (pisze) takie obiekty
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

greet(Karol);

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

// Generalnie tych faking namespaces uzywmay przy budownaiu np. frameworka, albo biblioteki
// Chodzi o to, żeby tworzyć dla naszych zmeinnych pewien konterner w postaci obiektu,
// żeby te zmeinne nie było dostępne globalnie i nikt ich nie nadpisał

// Poniżej dwa sposby jak możesz taki kontener utworzyć
// "engilsh" jest przykąłdem gdzie musimy bardziej zagnieździć nasz kontener
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
// ale błędem ejst myślenie, że to to samo! 

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
// ale było to mało wydajne, bo zauważ ile chociażby znaków trzeba użyć do takeigo formatu danych
// Stąc programiscie zainspirowani Object Literals, wpadli na pomysł JSON'a

// JSON:
// Pamiętaj, że proporties, musza być w cudzysłowie ("").
// Pamietaj, że to jest również poprawny Object Literal, bo proporties mogą być w "" w oObject Literals
// ale MOGĄ! A w JSON'ie MUSZĄ
// Wieć można powiedzieć, że każdy JSON, jest Object Literal, ale nie każdy Object Literal jest JSON'em
// {
// 	"firstName": "Mary",
// 	"isAProgrammer": true	
// }

// Ponieważ JSON, jest łatwo czytany i kownertowany w JS, to częśt o w JS używamy JSON'a

console.log(JSON.stringify(objectLiteral));

// podobnie poniżej. Weźmie JSON'a i zamieni go w obiekt
var jsonValue = JSON.parse('{"firstName": "Mary","isAProgrammer": true }');
console.log(jsonValue);


// Lekcja nr 34 "Functions are Objects"

// Functions are Objects

// First Class Functions: Everything you can do with other types(object, strings, booleans) you can do with functions.
// Assign them to variables, pass them (functions)  around, creare them on the fly.

// Function is a special type of Obect!
// Poneiważ funkcje to specjalne obiekty, możesz do nich (funkcji) dołączyć: Primitive, Object, Function
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


// Lekcja nr 35 "Function Statements and Function Expressions"

// Expression: A unit of a code that results in a Value
// It doesn't have to save to a variable
// Expression returns a value! 
// Przykłady: 
// a = 3;
// 1 + 2;
// a = {greeting: 'hi'}

// Statement: np. 'if', czyli statement, tylko robi jakąs robotę, ale wartośc zwraca expression
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
// JS is variable HOISTED! 

// Skończyłeś na 13:00 !!!
// Skończyłeś na 13:00 !!!
// Skończyłeś na 13:00 !!!
// Skończyłeś na 13:00 !!!
// Skończyłeś na 13:00 !!!
// Skończyłeś na 13:00 !!!
// Skończyłeś na 13:00 !!!
// Skończyłeś na 13:00 !!!
// Skończyłeś na 13:00 !!!
// Skończyłeś na 13:00 !!!
// Skończyłeś na 13:00 !!!
// Skończyłeś na 13:00 !!!
// Skończyłeś na 13:00 !!!
// Skończyłeś na 13:00 !!!
// Skończyłeś na 13:00 !!!
// Skończyłeś na 13:00 !!!
// Skończyłeś na 13:00 !!!
// Skończyłeś na 13:00 !!!
// Skończyłeś na 13:00 !!!
// Skończyłeś na 13:00 !!!
// Skończyłeś na 13:00 !!!
// Skończyłeś na 13:00 !!!
// Skończyłeś na 13:00 !!!
// Skończyłeś na 13:00 !!!
// Skończyłeś na 13:00 !!!
// Skończyłeś na 13:00 !!!
// Skończyłeś na 13:00 !!!
// Skończyłeś na 13:00 !!!
// Skończyłeś na 13:00 !!!
// Skończyłeś na 13:00 !!!
// Skończyłeś na 13:00 !!!
// Skończyłeś na 13:00 !!!
// Skończyłeś na 13:00 !!!
// Skończyłeś na 13:00 !!!
// Skończyłeś na 13:00 !!!
// Skończyłeś na 13:00 !!!
// Skończyłeś na 13:00 !!!
// Skończyłeś na 13:00 !!!
// Skończyłeś na 13:00 !!!
