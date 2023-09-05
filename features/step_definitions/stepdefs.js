/* eslint-disable */
const { Builder, webdriver, By, wait, until} = require('selenium-webdriver');
const { Given, When, Then } = require('@cucumber/cucumber');

let driver;
let urlJuego= 'http://localhost:3000/game.html?language=spanish&level=test';

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
    driver.quit();
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
    driver.quit();
});


// Test usuario gana partida

Given('el juego comienza con la palabra secreta', async () => {
    driver = await new Builder().forBrowser('chrome').build();
    await driver.get(urlJuego);
});

When('usuario adivina la letra {string},{string},{string},{string},{string}', async (letter1, letter2, letter3, letter4, letter5) => {
    letters = [letter1, letter2, letter3, letter4, letter5];
    for await(let letter of letters){
        await driver.wait(until.elementLocated(By.id(letter))).click();
    }
});

Then('el usuario recibe mensaje ganaste {string}', function (word) {
    // driver.quit();
});



// Test usuario pierde partida

let intentos=7;

Given('el jugador erra', async () => {
    letters = ['a', 'r', 'w', 'v', 'q', 'o', 'p', 'b', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n'];
    driver = await new Builder().forBrowser('chrome').build();
    await driver.get(urlJuego);
});

When('usuario ingresa la letra incorrecta', async () => {
    for await(let letter of letters){
        await driver.wait(until.elementLocated(By.id(letter))).click();
        if (!"scrum".includes(letter)){
            intentos--;
        }
        if(intentos == 0){
            break;
        }
    }
});

Then('el usuario recibe mensaje perdiste', async () => {
    // driver.quit();
});

