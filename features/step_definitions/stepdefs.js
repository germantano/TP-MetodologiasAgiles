/* eslint-disable */
const { Builder } = require('selenium-webdriver');
const { Given, When, Then, After } = require('@cucumber/cucumber');

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

After(async () => {
    if (driver) {
      await driver.quit();
    }
});