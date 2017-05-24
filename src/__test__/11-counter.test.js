/*
Uppgift 11
Skriv testfall för metoderna countUp och countDown.
1. countUp ska räkna upp egenskapen value med ett.
2. countDown ska räkna ner med ett om värdet är större än noll, annars ska funktionen kasta ett Error.
*/
const Counter = require('../11-counter.js');

describe("Counter (#11)", () =>
{

  test("init counter", () => {
    var counter = new Counter();
    expect(counter.value).toBe(1);
  });

  test("count up two times", () => {
    var counter = new Counter();
    counter.countUp();
    counter.countUp();
    expect(counter.value).toBe(3);
  });

  test("count down below zero throws error", () => {
    var counter = new Counter();
    counter.countDown();
    expect(() => {
      counter.countDown();
    }).toThrow(
      Error('Count would be less then zero')
    );
  });

  test("count up three times, down one", () => {
    var counter = new Counter();
    counter.countUp();
    counter.countUp();
    counter.countUp();
    counter.countDown();
    expect(counter.value).toBe(3);
  });

});
