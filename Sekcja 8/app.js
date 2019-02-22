// Sekcja nr 8 Examining Famous Frameworks and Libraries


// Lekcja nr 69 "Learning From Other's Good Code"


// Lekcja nr 70 "Deep Dive into Source Code: jQuery - Part 1"
// Lekcja nr 71 "Deep Dive into Source Code: jQuery - Part 2"

// JQuery pozwala Ci wyszkuwiać elementu tak jak w css
var q = $("ul.people li");
console.log(q); // zwróci to jQuery.fn.init(3)


// Lekcja nr 72 "Deep Dive into Source Code: jQuery - Part 3"

// Poniżej "Method chaining" z którego można korzystać w jQuery (w czystym JS, raczej ciężko)
var q = $("ul.people").addClass("newclass").removeCLass("people");
console.log(q);

// METHOD CHAINING: Calling one method after another, and each method affects the parent object.
// So obj.method1().method2() where both methods end up with "this" variable pointing at "obj".