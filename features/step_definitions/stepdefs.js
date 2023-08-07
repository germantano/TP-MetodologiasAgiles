/* eslint-disable */
const { Builder, webdriver } = require('selenium-webdriver');
const { Given, When, Then } = require('@cucumber/cucumber');
const {gameMethods} = require('../../routes/game.js');

let driver;
const letrasAbecedario = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];

// Test juego


Given('que el usuario ha ingresado al juego', async () => {
    driver = await new Builder().forBrowser('chrome').build();
    await driver.get('http://localhost:3000/game.html');
});

When('el usuario juega al juego', async () => {
    // No code needed
});

Then('la URL del juego debería ser {string}', async (expectedUrl) => {
    const currentUrl = await driver.getCurrentUrl();
    if (currentUrl !== expectedUrl) {
        throw new Error(`La URL actual es ${currentUrl}, se esperaba ${expectedUrl}`);
    }
});


// Test inicio


Given('que el usuario ha ingresado a la página principal', async () => {
    driver = await new Builder().forBrowser('chrome').build();
    await driver.get('http://localhost:3000/');
});

When('el usuario navega por la página principal', async () => {
    // No code needed
});

Then('la URL de la página principal debería ser {string}', async (expectedUrl) => {
    const currentUrl = await driver.getCurrentUrl();
    if (currentUrl !== expectedUrl) {
        throw new Error(`La URL actual es ${currentUrl}, se esperaba ${expectedUrl}`);
    }
});


// Test usuario gana partida


let palabraAdivinar;
let ultimaLetraUsuario;
let usuarioGano = false;


Given('última letra para adivinar la palabra', function () {
    gameMethods.startGame();
    palabraAdivinar = gameMethods.getWord("spanish", "alta");
    console.log(`Palabra adivinar ${palabraAdivinar}`);
    posicionRandom = Math.floor(Math.random() * palabraAdivinar.length);
    letraFaltante = palabraAdivinar.charAt(posicionRandom);
    palabraCambiada = palabraAdivinar.replace(palabraAdivinar[posicionRandom], "_");
});

When('usuario selecciona la última letra correcta', function () {
    for (let letra of letrasAbecedario) {
        if (letra == letraFaltante){
            console.log(`La última letra fue adivinada: ${letra}`)
            console.log(`PALABRA: ${palabraAdivinar}`); 
        }
    }
});

Then('usuario gana la partida, juego informa situación', function () {
    console.log('¡Felicidades! Ganaste la partida.');
});


// Test usuario pierde partida

let intentos;


Given('contador de intentos restantes igual 1', async () => {
    intentos = 1;
    gameMethods.startGame("spanish", "baja");
});

When('usuario ingresa una letra incorrecta', async () => {
    for (let letra of letrasAbecedario) {
        if (!gameMethods.checkLetter(letra)) {
          intentos -= 1;
          if (intentos == 0) {
            break;
          }
        }
    }
});

Then('usuario pierde la partida, juego informa situación', async () => {
    console.log(`Perdiste la partida. Intentos restantes: ${intentos}`);
});

