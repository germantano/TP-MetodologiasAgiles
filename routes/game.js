var counter = 0;

var arrayPalabrasDifBajaES = ["scrum", "perro", "casa", "gato", "sol", "libro", "mesa", "amarillo", "planta", "auto"];
var arrayPalabrasDifMediaES = ["historia", "esfuerzo", "persona", "agilidad", "equilibrio", "cascada", "ceremonia", "usuario",
                                "cliente", "iteracion"];
var arrayPalabrasDifAltaES = ["simplicidad", "retrospectiva", "impresionante", "manifiesto", "colaboracion", "compromiso",
                            "refactorización", "inigualable", "requerimiento", "mantenimiento"];

var arrayPalabrasDifBajaEN = ["scrum", "daily", "sprint"];
var arrayPalabrasDifMediaEN = ["review", "refactoring", "ceremony"];
var arrayPalabrasDifAltaEN = ["retrospective", "incremental", "development"];

// Palabra que se va formando a medida que el jugador adivina
var palabra = [];
var palabraSecreta = "";

// Palabra ingresada por el usuario
var palabraUsuario = "";

const gameMethods = {

    getRandomNumber: function() {
        return Math.floor(Math.random() * 10);
    },

    startGame: function(){
        let randomNumber = this.getRandomNumber();
        let language = "spanish";
        let dificultad = "baja";
        let arrayPalabras = this.getArray(language, dificultad);
        palabraSecreta = arrayPalabras[randomNumber];
        for (let i = 0; i < palabraSecreta.length; i++) {
            palabra[i] = "_";
        }
        console.log(`La palabra es: ${palabra}`);
    
        for(let i = 0; i < palabraUsuario.length; i++){
            this.guess(palabraUsuario[i]);
            if(!this.counterOfAttempts(counter)){
                break;
            }
        }
        console.log(`Perdiste, la palabra era ${palabraSecreta}`);
    },
    
    checkWord: function(word) {
        if (word == "hola") {
            return word;
        } else {
            return "La palabra ingresada no coincide con la palabra secreta";
        }
    },
    
    checkEmptyWord: function(word) {
        if (word == "") {
            return true;
        }
        return false;
    },
    
    checkLetter: function(letra){
        if (palabraSecreta.includes(letra)){
            for(let posicion in palabraSecreta){
                if(palabraSecreta[posicion] == letra){
                    palabra[posicion] = letra;
                    console.log(`La palabra es: ${palabra.join("")}`);
                }
            }
            return true;
        }else{
            counter++;
            console.log(`La letra ${letra} no se encuentra en la palabra. Intentos restantes: ${ 7 - counter}`);
            return false;
        }
    },
    
    guess: function(p){
        var flag = this.counterOfAttempts(counter);
        if (flag){
            this.checkLetter(p);
        }
    },
    
    counterOfAttempts: function(numeroDeIntento){
        if (numeroDeIntento < 7){
            return true;
        }
        else{
            return false;
        }
    },
    
    getArray: function(language, dificultad){
        let option = this.chooseLanguage(language);
        if (option == 1){
            return this.chooseLevelES(dificultad);
        }
        else if (option == 2){
            return this.chooseLevelEN(dificultad);
        }
    },
    
    
    chooseLevelES: function(dificultad){
        switch(dificultad) {
            case "baja":
                return arrayPalabrasDifBajaES;
            case "media":
                return arrayPalabrasDifMediaES;
            case "alta":
                return arrayPalabrasDifAltaES;
            default:
                return arrayPalabrasDifBajaES; // Por default se juega en dificultad baja
        }
    },
    
    chooseLevelEN: function(dificultad){
        switch(dificultad) {
            case "baja":
                return arrayPalabrasDifBajaEN;
            case "media":
                return arrayPalabrasDifMediaEN;
            case "alta":
                return arrayPalabrasDifAltaEN;
            default:
                return arrayPalabrasDifBajaEN; // Por default se juega en dificultad baja
        }
    },
    
    chooseLanguage: function(language){
        if(language == "spanish"){
            return 1;
        }
        else if (language == "english"){
            return 2;
        }
    },
    
};

gameMethods.startGame();

module.exports = {gameMethods,
                   arrayPalabrasDifBajaES, arrayPalabrasDifMediaES, arrayPalabrasDifAltaES,
                   arrayPalabrasDifBajaEN, arrayPalabrasDifMediaEN, arrayPalabrasDifAltaEN};