var counter = 0;

var arrayPalabras = ["manzana", "perro", "casa", "gato", "sol", "libro", "mesa", "amarillo", "planta", "auto"];

// Palabra que se va formando a medida que el jugador adivina
var palabra = [];
var palabraSecreta = "";

startGame();
document.getElementById('inputField').value += palabra.join(" ");

Array.from(keys).forEach(key => {
    key.addEventListener('click', () => {
      checkLetter(key.textContent.toLowerCase());
      key.disabled = true;
    });
});

function startGame(){
    let randomNumber = getRandomNumber();
    palabraSecreta = arrayPalabras[randomNumber];
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
            alert(`Ganaste! La palabra era ${palabraSecreta}.`);
            location.href = "index.html";
        }
        return true;
    }else{
        counter++;
        console.log(`La letra ${letra} no se encuentra en la palabra. Intentos restantes: ${ 7 - counter}`);
        console.log(`La palabra es: ${palabra}`);
        if(7-counter == 0){
            alert("Perdiste");
            location.href = "index.html";
        }
        return false;
    }
}

function chooseLevel(dificultad){
    if (dificultad == "dificultad baja"){
        return 1;
    }
    else if (dificultad == "dificultad media"){
        return 2;
    }
    else if (dificultad == "dificultad alta"){
        return 3;
    }
}

function getRandomNumber() {
    return Math.floor(Math.random() * 10);
}