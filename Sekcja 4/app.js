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


