// Sekcja nr 3

// Lekcja nr 19 "Conceptual aside: Types and JavaScript"

// Dynamic Typing: You do't tell the engine what type of data a varibale holds, it figures it out while Your code is running

// Variables can hold differnt types of values because it's figured out during execution

// Static Typinh (np. w C# albo w JAVA)
// bool isNew = "Chuj"; // Zwróci błąd

// Dynamic Typing 

// Nie będzie błędów
// var isNew = true; 
// isNew = 'chuj';
// isNew =1;

// Czyli w niektórych językach porgramowania trzeba podać, ze to bedize boolean, string albo number.
// W JS nie trzeba tego robić, bo jest 'Dynamic Typing'
// Oczywiście to ma sowje plusy i minusy, jeśli nie wiesz jak to działa, to może to spowodować problemy

// Lekja nr 20 "Primitive Types"

// Primitive type: A type of data that represent a single value
// That is not an object


// w JS mamy 6 typów prymitywnych:
// 1) UNDEFINED - undefined represents lack of exictence (you sholudn'e set a variable to this)
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

// Jeśli kilka operatorów ma takie same "Precedence", to JS sprawdza associativity, pktóre jest albo left-to-tight albo right-to-left


// Lekcja nr 23 "Conceptual aside: Coercion" 

// Coercion: Converting a value from one type to another 
// This happens quite often in Javascript because it's dynamically typed.

var e = 1 + '2';
console.log(e);
// będzie 12
// Stało się tak ponieważ ta 1, została skonwertowana przez JS na string
// Ponieważ JS jest dynamiclly type, intuicyjnie sam stara się skonwertować odpowiednie wartości