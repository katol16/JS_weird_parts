// Greetr

// Lekcja nr 75 "Our Object and its prototype"
// i
// Lekcja nr 76 "Properties and Chainable Methods"
// Tworzymy new execution context, żeby nasz kod był bezpieczny
(function(global, $) {

    // W definowaniu naszego obiektu, posłużymy się podobną metodą co biblioteka jQuery
    // Chcemy wywoływać naszą funkcję w taki sposób G$(firstname, lastname, language)
    // tak żeby nie wpisywać "new" przez cały czas
    var Greetr = function(firstName, lastName, language) {
        return new Greetr.init(firstName, lastName, language);
    };

    // Utworzymy teraz zmienną, która dzięki clousures, bedzie dostępna tylko tutaj, w tym pliku, ale przez to, że jest to IIFE nie będzie dostępna poza nim.
    // W ten sposób, mozemy udostępnic pewne zmienne do widoku, ale nie dajemy możliwości ich zmiany, bez dostępu do kodu źródłowego.
    var supportedLangs = ['en', 'es'];

    var greetings = {
        en: 'Hello',
        es: 'Hola'
    };
    var formalGreetings = {
        en: 'Greetings',
        es: 'Saludos'
    };
    var logMessages = {
        en: 'Logged in',
        es: 'Inicio sesion'
    };

    // Tutaj wrzucimy metody, które będą dostępne na tym co zostanie zwrócone z Greetr
    Greetr.prototype = {

        fullName: function() {
            return this.firstName + ' ' + this.lastName;
        },

        validate: function() {
            if (supportedLangs.indexOf(this.language) === -1) {
                throw "Invalid language"
            }
        }
    };

    Greetr.init = function(firstName, lastName, language) {
        // Dla bezpieczeństwa tego użyjemy, tzn. self, będzie tym samym co this, czyli pustym obiektem utworzonym przez "new"
        var self = this;
        // Poniżej ustawimy wartości lub default, co w naszym przyapdku będzie pustym ciągiem znaków i językiem angielskim
        self.firstName = firstName || '';
        self.lastName = lastName || '';
        self.language = language || 'en';
    };

    // Teraz ten utworzonu obiekt, przypiszemy do prototypu
    // Dzieki tej lini kodu, możemy umieścić nasze metody w Greetr.prototype, to lepsze rowiżanie niż przypisywać metody bezpośrednio w obiekcie Greetr.init
    Greetr.init.prototype = Greetr.prototype;

    // teraz chcemy udostepnić ten obiekt do użytku. Dodatkowo chcemy mieć aliasa, żeby wywołąć naszą metodę za pomocą 'G$'
    global.Greetr = global.G$ = Greetr;

}(window, jQuery));


// Lekcja nr 75 "Our Object and its Prototype"