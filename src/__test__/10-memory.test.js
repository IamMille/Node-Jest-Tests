const Memory = require('../10-memory.js');

/*
Uppgift 10
Skriv testfall för metoderna remember och forget i klassen Memory.
1. När man skapar ett objekt av klassen Memory, så är det tomt från början.
2. Men om man anropar metoden remember så kan man spara ett värde i klassen.
3. Anropar man forget så ska värdet tas bort.
*/
describe("Memory, excercise 10", () =>
{

  test('initiate memory', () => {
    var memory = new Memory();
    expect( memory.data ).toBe( undefined );
  });

  test('store data', () => {
    var memory = new Memory();
    memory.remember("testvalue");
    expect( memory.data ).toBe( "testvalue" );
  });

  test('forget data', () => {
    var memory = new Memory();
    memory.remember("testvalue");
    memory.forget();
    expect( memory.data ).toBe( null );
  });

});
