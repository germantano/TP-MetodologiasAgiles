const { gameMethods, 
        arrayPalabrasDifBajaES, arrayPalabrasDifMediaES, arrayPalabrasDifAltaES,
        arrayPalabrasDifBajaEN, arrayPalabrasDifMediaEN, arrayPalabrasDifAltaEN} = require('../routes/game.js');

describe('game module', () => {

  it('checks word', () => {
    expect(gameMethods.checkWord("hola")).toBe("hola");
  });

  it('checks empty word', () => {
    expect(gameMethods.checkEmptyWord("")).toBe(true);
  });

  it('devuleve true: palabra contiene letra', () => {
    const letra = "e";
    const palabra = "ceremonia";
    expect(gameMethods.checkLetter(letra, palabra)).toBe(true);
  });

  it('devuelve false: palabra no contiene letra', () => {
    const letra = "w";
    const palabra = "ceremonia";
    expect(gameMethods.checkLetter(letra, palabra)).toBe(false);
  });

  it('limit attempt', ()=>{
    expect(gameMethods.counterOfAttempts(1)).toBe(true);
  });

  it('choose level 1 spanish', () => {
    expect(gameMethods.chooseLevelES("baja")).toBe(arrayPalabrasDifBajaES);
  });

  it('choose level 2 spanish', () => {
    expect(gameMethods.chooseLevelES("media")).toBe(arrayPalabrasDifMediaES);
  });

  it('choose level 3 spanish', () => {
    expect(gameMethods.chooseLevelES("alta")).toBe(arrayPalabrasDifAltaES);
  });

  it('choose level 1 english', () => {
    expect(gameMethods.chooseLevelEN("baja")).toBe(arrayPalabrasDifBajaEN);
  });

  it('choose level 2 english', () => {
    expect(gameMethods.chooseLevelEN("media")).toBe(arrayPalabrasDifMediaEN);
  });

  it('choose level 3 english', () => {
    expect(gameMethods.chooseLevelEN("alta")).toBe(arrayPalabrasDifAltaEN);
  });

  it('choose spanish language', ()=>{
    expect(gameMethods.chooseLanguage("spanish")).toBe(1);
  });

  it('choose english language', ()=>{
    expect(gameMethods.chooseLanguage("english")).toBe(2);
  });

  it('get random number (between 0 & 3): idioma inglés', ()=>{
    var arrayLengthEN = arrayPalabrasDifBajaEN.length;
    expect(gameMethods.getRandomNumber(arrayLengthEN)).toBeGreaterThanOrEqual(0);
    expect(gameMethods.getRandomNumber(arrayLengthEN)).toBeLessThan(-1);
  });

  it('get random number (between 0 & 10): idioma español', ()=>{
    var arrayLengthES = arrayPalabrasDifBajaES.length;
    expect(gameMethods.getRandomNumber(arrayLengthES)).toBeGreaterThanOrEqual(0);
    expect(gameMethods.getRandomNumber(arrayLengthES)).toBeLessThan(10);
  });


});