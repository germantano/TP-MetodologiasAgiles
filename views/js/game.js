/* eslint-disable */

var counter = 0;

var arrayPalabrasDifBajaES = ["scrum", "perro", "casa", "gato", "sol", "libro", "mesa", "amarillo", "planta", "auto"];
var arrayPalabrasDifMediaES = ["historia", "esfuerzo", "persona", "agilidad", "equilibrio", "cascada", "ceremonia", "usuario",
                                "cliente", "iteracion"];
var arrayPalabrasDifAltaES = ["simplicidad", "retrospectiva", "impresionante", "manifiesto", "colaboracion", "compromiso",
                            "refactorización", "inigualable", "requerimiento", "mantenimiento"];

var arrayPalabrasDifBajaEN = ["scrum", "daily", "sprint", "hello", "bye", "morning", "code", "kanban", "lean", "key"];
var arrayPalabrasDifMediaEN = ["review", "agile", "ceremony", "software", "backend", "frontend", "programming", 
                                "backlog", "product", "testing"];
var arrayPalabrasDifAltaEN = ["retrospective", "incremental", "development", "methodology", "refactoring", "coverage", "waterfall",
                                "scenario", "devops", "engineering"];

// Palabra que se va formando a medida que el jugador adivina
var palabra = [];
var palabraSecreta = "";
var intentos = 7;

function setSettings(){
    var language = document.getElementById('idioma').value;
    var level = document.getElementById('dificultad').value;
    var url = 'game.html?language=' + encodeURIComponent(language) + '&level=' + encodeURIComponent(level);
    location.href = url;
}

document.addEventListener('DOMContentLoaded', function() {
    var urlParams = new URLSearchParams(window.location.search);
    var language = urlParams.get('language');
    var level = urlParams.get('level');
    startGame(language, level);
});


const keys = document.getElementsByClassName('key');
document.getElementById('inputField').value += palabra.join(" ");


Array.from(keys).forEach(key => {
    key.addEventListener('click', () => {
      checkLetter(key.textContent.toLowerCase());
      key.disabled = true;
    });
});

function startGame(idioma, dificultad){
    document.getElementById('intentos').innerHTML = intentos;
    palabraSecreta = getWord(idioma, dificultad);
    for (let i = 0; i < palabraSecreta.length; i++) {
        palabra[i] = "_";
    }
    console.log(`La palabra secreta es: ${palabraSecreta}`);
}

function checkLetter(letra){
    if (palabraSecreta.includes(letra)){
        for(let posicion in palabraSecreta){
            if(palabraSecreta[posicion] == letra){
                palabra[posicion] = letra;
                document.getElementById('inputField').value = palabra.join(" ");
                console.log(`La palabra es: ${palabra.join("")}`);
            }
        }
        if(palabra.join("") === palabraSecreta){
            alert('Felicitaciones! Haz ganado..');
            location.href = "index.html";
        }
        return true;
    }else{
        //counter++;
        intentos--;
        console.log(`La letra ${letra} no se encuentra en la palabra. Intentos restantes: ${ intentos}`);
        document.getElementById('intentos').innerHTML = `: ${intentos}`;
        console.log(`La palabra es: ${palabra}`);
        if(intentos== 0){
            alert("Perdiste :(");
            location.href = "index.html";
        }
        return false;
    }
}

function getWord(idioma, dificultad){
    switch(true){
        case (dificultad=="baja") && (idioma=="spanish"):
            return arrayPalabrasDifBajaES[getRandomNumber()];
        
        case (dificultad=="media") && (idioma=="spanish"):
            return arrayPalabrasDifMediaES[getRandomNumber()];

        case (dificultad=="alta") && (idioma=="spanish"):
            return arrayPalabrasDifAltaES[getRandomNumber()];

        case (dificultad=="baja") && (idioma=="english"):
            return arrayPalabrasDifBajaEN[getRandomNumber()];
            
        case (dificultad=="media") && (idioma=="english"):
            return arrayPalabrasDifMediaEN[getRandomNumber()];
    
        case (dificultad=="alta") && (idioma=="english"):
            return arrayPalabrasDifAltaEN[getRandomNumber()];
    }
}

function getRandomNumber() {
    return Math.floor(Math.random() * 10);
}