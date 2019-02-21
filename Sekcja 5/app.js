// Sekcja nr 7 Odds and ends


// Lekcja nr 65 "Initialization"


// Lekcja nr 66 "typeof, instance of, AND FIGURING OUT WHAT SOMETHING IS"

var d = [];
console.log(typeof d); // zwróci object

// Dlatego jak chcesz zoabczyć "bardziej poprawny" typ tablicy mozesz:
console.log(Object.prototype.toString.call(d));

// function contructor
function Person(name) {
	this.name = name;
}

var e = new Person('Jane');
console.log(typeof e); // zwróci object
console.log(e instanceof Person); // zwróci true, bo e jest instancją Person

console.log(typeof undefined); // zwróci undefined, więc spoko
console.log(typeof null); // a bug since, like, forever... zwróci object


// Lekcja nr 67 "Strict Mode"

var person;

// załóżmy teraz, że się jebłeś i zamaist person wpisałeś persom
persom = {};
console.log(persom); // zwróci Ocject{}, który siedzi w window, mozesz to sprawdzić poniższą consola
console.log(window.persom);

// Powyższy błąd, jeśli masz duży projekt, często ciężko jest wyłapać

// dlatego można użyć "use strict";

function logNewPerson() {
	"use strict";

	var person2;
	persom2 = {};
	console.log(persom2); // wyjebie błąd, że persom2 is not defined
}

// logNewPerson();

// Trzeba też uważać z use strict, bo nie wszystkie silniki JS interpetują use strict w taki sam sposób