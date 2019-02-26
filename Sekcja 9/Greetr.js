// Greetr

// Lekcja nr 75 "Our Object and its prototype"
// i
// Lekcja nr 76 "Properties and Chainable Methods"
// i
// Lekcja nr 77 "Adding jQuery support"
// i
// Lekcja nr 78 "Good commenting"
// i
// Lekcja nr 79 "Let's use our framework (library)"

// Tworzymy new execution context, żeby nasz kod był bezpieczny
// Poniżej widać, że kod zaczyna się od ";", robimy to po to żeby się w pewien sposób zabezpieczyć. Jeśli ktoś podpina kilka bilbiotek i któraś z nich
// jest załączona przed naszą i nie ma zakońćzenia kodu jako ";", to na wszelki wypadek my dodamy zakonczenie kodu na początku i wszystko zadziała.
// Oczywiście nie zaburz to działania naszej bilbilioteki, nawet jesli tylko ona jest podpięta
;(function(global, $) {

    // W definowaniu naszego obiektu, posłużymy się podobną metodą co biblioteka jQuery
    // Chcemy wywoływać naszą funkcję w taki sposób G$(firstname, lastname, language)
    // tak żeby nie wpisywać "new" przez cały czas
    // 'new' an object
    var Greetr = function(firstName, lastName, language) {
        return new Greetr.init(firstName, lastName, language);
    };

    // Utworzymy teraz zmienną, która dzięki clousures, bedzie dostępna tylko tutaj, w tym pliku, ale przez to, że jest to IIFE nie będzie dostępna poza nim.
    // W ten sposób, mozemy udostępnic pewne zmienne do widoku, ale nie dajemy możliwości ich zmiany, bez dostępu do kodu źródłowego.
    // hidden within the scope of the IIFE and never directly accessible
    var supportedLangs = ['en', 'es'];

    // informal greetings
    var greetings = {
        en: 'Hello',
        es: 'Hola'
    };

    // formal greetings
    var formalGreetings = {
        en: 'Greetings',
        es: 'Saludos'
    };

    // logger messages
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
                throw "Invalid language";
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

            // make chainable
            return this;
        },

        // Poniższa metoda może się przydać, jeśli będziemy chcieli w locie zmienić język
        setLang: function(lang) {
            // set the language
            this.language = lang;

            // validate
            this.validate();

            // make chainable
            return this;
        },

        HTMLGreeting: function(selector, formal) {
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
    // the actual object is created here, allowing us to 'new' an object without calling 'new'
    Greetr.init = function(firstName, lastName, language) {
        // Dla bezpieczeństwa tego użyjemy, tzn. self, będzie tym samym co this, czyli pustym obiektem utworzonym przez "new"
        var self = this;
        // Poniżej ustawimy wartości lub default, co w naszym przyapdku będzie pustym ciągiem znaków i językiem angielskim
        self.firstName = firstName || '';
        self.lastName = lastName || '';
        self.language = language || 'en';

        self.validate();
    };

    // Teraz ten utworzonu obiekt, przypiszemy do prototypu
    // Dzieki tej lini kodu, możemy umieścić nasze metody w Greetr.prototype, to lepsze rozwiąnie niż przypisywać metody bezpośrednio w obiekcie Greetr.init
    // trick borrowed from jQuery so we don't have to use the 'new' keyword
    Greetr.init.prototype = Greetr.prototype;

    // teraz chcemy udostepnić ten obiekt do użytku. Dodatkowo chcemy mieć aliasa, żeby wywołąć naszą metodę za pomocą 'G$'
    // attach our Greetr to the global object, and provide a shothand '$G' gor ease our poor fingers
    global.Greetr = global.G$ = Greetr;

}(window, jQuery));

