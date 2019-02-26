// Sekcja 9 "Let's Build a Framework / Library!

// Lekcja nr 73 "Requirements"

// Lekcja nr 75 "Our Object and its prototype"

// gets a new object (the architecture allows us to not have to use the 'new' keyword here)
var g = G$('John', 'Doe');
console.log(g);

// ze względu na methods chainable, mozesz tak dodawać metody pokolei
g.greet().greet(true);

// kolejny przykład - wyrzuci błąd, bo nie mamy dostępnego języka francuskeigo
// g.greet().setLang('fr').greet(true);

// use our chainable methods
g.greet().setLang('es').greet(true);

// Użycie naszej bilbioteki
// let's use our object on the click of the login button
$('#login').click(function() {
    // create a new 'Greetr' object (let's pretend we know the name from the login)
   var loginGrtr = G$('John', 'Doe');

   // hide the login on the screen
   $('#logindiv').hide();

   // fire off an HTML greeting, passing the '#greeting' as the selector and the chosen language, and log the welcome as well
   loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();

});