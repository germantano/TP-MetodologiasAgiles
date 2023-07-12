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

  it('checks included letter', () => {
    const letra = 'a';
    const resultado = gameMethods.checkLetter(letra);
    if (resultado){
      expect(resultado).toBe(true);
    }
    else{
      expect(resultado).toBe(false);
    }
    
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

  // it('choose level 1 english', () => {
  //   expect(gameMethods.chooseLevelES("baja")).toBe(arrayPalabrasDifBajaEN);
  // });

  // it('choose level 2 english', () => {
  //   expect(gameMethods.chooseLevelES("media")).toBe(arrayPalabrasDifMediaEN);
  // });

  // it('choose level 3 english', () => {
  //   expect(gameMethods.chooseLevelES("alta")).toBe(arrayPalabrasDifAltaEN);
  // });

  // it('choose spanish language', ()=>{
  //   expect(gameMethods.chooseLanguage("spanish").toBe(1));
  // });

  // it('choose english language', ()=>{
  //   expect(gameMethods.chooseLanguage("english").toBe(2));
  // });

  it('get random number', ()=>{
    var randomNumber = gameMethods.getRandomNumber();
    expect(randomNumber).toBeGreaterThanOrEqual(0);
    expect(randomNumber).toBeLessThan(10);
  });


});