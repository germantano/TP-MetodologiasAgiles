/* eslint-disable */
const { Builder } = require('selenium-webdriver');
const { Given, When, Then, After } = require('@cucumber/cucumber');
const {gameMethods} = require('../../routes/game.js');

let driver;


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
    await driver.get('http://localhost:3000/index.html');
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
    palabraAdivinar = gameMethods.getWord("spanish", "baja");
});

When('usuario selecciona la última letra correcta', function () {
    ultimaLetraUsuario = palabraAdivinar.slice(-1); // Obtenemos la última letra de la palabra a adivinar
});

Then('usuario gana la partida, juego informa situación', function () {
    if (gameMethods.checkLetter(ultimaLetraUsuario)) { 
        usuarioGano = true;
        console.log('¡Felicidades! Ganaste la partida.');
    }
});


// Test usuario pierde partida

let intentos = 0;
const letrasAbecedario = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
  ];



Given('contador de intentos restantes igual 1', function () {
    palabraAdivinar = gameMethods.getWord("spanish", "baja");
});

When('usuario ingresa una letra incorrecta', function () {
    for (let letra of letrasAbecedario) {
        if (!gameMethods.checkLetter(letra)) {
          intentos -= 1;
          if (intentos == 0) {
            break;
          }
        }
    }
});

Then('usuario pierde la partida, juego informa situación', function () {
    
});