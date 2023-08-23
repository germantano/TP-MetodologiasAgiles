/* eslint-disable */
const { Builder, webdriver } = require('selenium-webdriver');
const { Given, When, Then } = require('@cucumber/cucumber');
const {gameMethods} = require('../../routes/game.js');
const assert = require('assert');

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
let alertaPartidaGanada;
let alertShown = false;

Given('el juego comienza con la palabra secreta {string}', function (word) {
    palabraAdivinar = word;
    console.log(`Palabra adivinar ${palabraAdivinar}`);
});

When('usuario adivina la letra {string},{string},{string},{string},{string}', function (letter1, letter2, letter3, letter4, letter5) {
    letters = [letter1, letter2, letter3, letter4, letter5];
    letters.forEach(letter => {
        alertaPartidaGanada = gameMethods.checkLetter(letter, palabraAdivinar);
    });
    if (alertaPartidaGanada === "Felicitaciones! Haz ganado.."){
        alertShown = true;
    }
});

Then('el usuario recibe mensaje ganaste {string}', function (word) {
    assert.equal(alertShown, true); // Verificar que la alerta fue mostrada
    alertShown = false; // Reiniciar para el siguiente escenario
});



// Test usuario pierde partida
let palabraAdivinarPierde;
let intentos = 7;
let letraCorrecta;
let mensajeAlertaPierde;

Given('el juego comienza con la palabra {string}', function (word) {
    palabraAdivinarPierde = word;
    console.log(`Palabra adivinar ${palabraAdivinarPierde}`);
});

When('usuario ingresa la letra incorrecta {string},{string},{string},{string},{string},{string},{string}', function (letter1, letter2, letter3, letter4, letter5, letter6, letter7) {
    letters = [letter1, letter2, letter3, letter4, letter5, letter6, letter7];
    letters.forEach(letter => {
        letraCorrecta = gameMethods.checkLetter(letter, palabraAdivinarPierde);
        if (!letraCorrecta){
            intentos--;
        }
        if (intentos == 0){
            mensajeAlertaPierde = "Perdiste";
            alertShown = true;
        }
    });
});

Then('el usuario recibe mensaje perdiste {string}', function (word) {
    assert.equal(alertShown, true);
});

