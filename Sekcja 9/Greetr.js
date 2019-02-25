// Greetr

// Lekcja nr 75 "Our Object and its prototype"
// i
// Lekcja nr 76 "Properties and Chainable Methods"
// i
// Lekcja nr 77 "Adding jQuery support"
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
            // this, będzie tu wskazywać na obiekt, który wywołał tę funkcję
            if (supportedLangs.indexOf(this.language) === -1) {
                throw "Invalid language"
            }
        },

        greeting: function() {
            return greetings[this.language] + ' ' + this.firstName + '!';
        },

        formalGreetings: function() {
            return formalGreetings[this.language] + ', ' + this.fullName();
        },

        greet: function(formal) {
            var msg;

            // if undefined or null it will be coerced to 'false'
            if (formal) {
                msg = this.formalGreetings();
            }
            else {
                msg = this.greeting();
            }

            if (console) {
                console.log(msg);
            }

            // 'this' refers to the calling object at execution time
            // makes the method chainable, by returning this
            return this;
        },

        log: function() {
            if (console) {
                console.log(logMessages[this.language] + ': ' + this.fullName());
            }

            return this;
        },

        // Poniższa metoda może się przydać, jeśli będziemy chcieli w locie zmienić język
        setLang: function(lang) {
            this.language = lang;

            this.validate();

            return this;
        },

        HTMLGreeting: function(selector, fomral) {
            if (!$) {
                throw 'jQuery not loaded'
            }

            if (!selector) {
                throw 'Missing jQuery selector'
            }

            var msg;
            if (formal) {
                msg = this.formalGreetings();
            }
            else {
                msg = this.greeting();
            }

            $(selector).html(msg);

            return this;
        }
    };

    // Pamiętaj, że Greetr będzie miał dostep do zmiennych supportedLangs, greeting, formalGreetings, itd. ze względu na clousures
    // Pamietaj też, ze te zmienne są bezpieczne, bo zyją tytlko wewnątrz tej funkcji. Możemy z nich korzystać, ale są bezpieczne dla cudzego kodu.
    // Po prostu nie chcemy aby inni deveoperzy zmeiniali te zmienne, ale chcemy mieć do nich dostęp
    Greetr.init = function(firstName, lastName, language) {
        // Dla bezpieczeństwa tego użyjemy, tzn. self, będzie tym samym co this, czyli pustym obiektem utworzonym przez "new"
        var self = this;
        // Poniżej ustawimy wartości lub default, co w naszym przyapdku będzie pustym ciągiem znaków i językiem angielskim
        self.firstName = firstName || '';
        self.lastName = lastName || '';
        self.language = language || 'en';
    };

    // Teraz ten utworzonu obiekt, przypiszemy do prototypu
    // Dzieki tej lini kodu, możemy umieścić nasze metody w Greetr.prototype, to lepsze rozwiąnie niż przypisywać metody bezpośrednio w obiekcie Greetr.init
    Greetr.init.prototype = Greetr.prototype;

    // teraz chcemy udostepnić ten obiekt do użytku. Dodatkowo chcemy mieć aliasa, żeby wywołąć naszą metodę za pomocą 'G$'
    global.Greetr = global.G$ = Greetr;

}(window, jQuery));


// Lekcja nr 75 "Our Object and its Prototype"