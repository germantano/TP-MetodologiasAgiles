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
let ingresoLetras = ['s', 'c', 'a', 'r', 'e', 'u', 'm'];


Given('el juego comienza con la palabra scrum', function () {
    palabraAdivinar = "scrum";
    console.log(`Palabra adivinar ${palabraAdivinar}`);
});

When('usuario adivina una letra correcta', async () => {
    for (let letra of ingresoLetras) {
        if (palabraAdivinar.includes(letra)) {
            ultimaLetraUsuario = letra;
            console.log(`El usuario ingreso la letra ${letra}`);
            console.log(`La palabra adivinar contiene la letra ${letra}`);
        }
    }
    driver = await new Builder().forBrowser('chrome').build();
    await driver.get('http://localhost:3000/game.html');
    let array = driver.findElements(webdriver.By.className('keys'));
    for (letra of array){
        letra.click();
    }
});

Then('usuario gana la partida, juego informa situación', function () {
    console.log('¡Felicidades! Ganaste la partida.');
});


// Test usuario pierde partida

let intentos = 3;
let ingresoLetrasPierde = ['a', 'b', 'c', 'd', 'w']

Given('el juego comienza con la palabra agilidad', function () {
    
});

When('usuario ingresa una letra incorrecta', function () {
    for (let letra of ingresoLetrasPierde) {
        if (!gameMethods.checkLetter(letra)) {
          intentos -= 1;
          if (intentos == 0) {
            break;
          }
        }
    }
});

Then('usuario pierde la partida, juego informa situación', function () {
    console.log(`Perdiste la partida`);
});

