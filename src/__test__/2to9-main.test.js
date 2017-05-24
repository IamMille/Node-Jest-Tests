
//import {isOddNumber} from './main.js';
const {
  isOddNumber,
  loopDownFrom,
  isPrime,
  sortList,
  numberOfDays,
  hypotenuse,
  backwards,
  sellProduct,
  isFingerNumber
} = require('../2to9-main.js');

describe('Example tests', () =>
{
  test('if 5 is NOT an odd number', () => {
  	expect(isOddNumber(5)).toBe(false);
  });

  test('if 6 is an odd number', () => {
    expect(isOddNumber(6)).toBe(true);
  });

  test('loop down from 10000000', () => {
    expect(loopDownFrom(10000000)).toBe(0);
  });
});

/**********************************************************************
Uppgift 8
Skriv testfall för funktionen isPrime(n), som ska returnera true om parametern n är ett primtal. https://sv.wikipedia.org/wiki/Primtal
**********************************************************************/

describe('Uppgift 8 - isPrime(n)', () =>
{
    //2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41,
	  // 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97

    test('Fyra, nej', () => {
     expect(isPrime(4)).toBe(false);
    });

    test('Fem', () => {
     expect(isPrime(5)).toBe(true); //toBeCloseTo
    });

    test('Femtionio', () => {
     expect(isPrime(59)).toBe(true);
    });

    test('Sextioett, nej', () => {
     expect(isPrime(63)).toBe(false);
    });

    test('Fem komma tjugofem, nej', () => {
     expect(() => {
       isPrime(5.25);
     }).toThrow(
       'Not an integer!'
     ); //toBeCloseTo
    });

    test('Banan nej', () => {
     expect(()=>{ isPrime('Banan'); })
     .toThrow('Not a positive number!');
    });
});

/**********************************************************************
Uppgift 7
Skriv testfall för funktionen sortList(list). Den ska ta en array som parameter och returnera en ny lista som är sorterad i den naturliga ordningen. Dvs stigande bokstavsordning för strängar och nummerordning för tal.

	Exempel: sortList([1, 3, 5, 2, 4, 6]) → [1, 2, 3, 4, 5, 6]
**********************************************************************/

describe('Uppgift 7 - sortList(list)', () =>
{
  test('3 2 1', () => {
    expect(
      sortList([3,2,1]))
    .toEqual(
      expect.arrayContaining([1,2,3])
    );
  });

  test('c b a', () => {
    expect(
      sortList(['c','b','a'])
    ).toEqual(
      expect.arrayContaining(['a','b','c'])
    );
  });

  test('x null y', () => {
    expect(
      sortList(['x',null,'y'])
    ).toEqual(
      expect.arrayContaining([null,'x','y'])
    );
  });

  test('s, q undefined r', () => {
    expect(
      sortList(['s','q',undefined,'r'])
    ).toEqual(
      expect.arrayContaining(['q','r','s',undefined])
    );
  });

  test('Worm as string', () => {
   expect(() => {
     sortList("Worm as string");
   }).toThrow(
     'Not an Array!'
   );
 });

}); // END sortList(list)

/**********************************************************************
Uppgift 6
Skriv testfall för funktionen numberOfDays(month, year). Funktionen ska ta två parametrar. Den första ska vara de första tre bokstäverna i en månad. Exempel: "jan" för januari, "dec" för december osv. Den andra ska vara ett heltal som är det året det gäller. Funktionen ska returnera hur många dagar den aktuella månaden har. Tips: spara att testa februari till sist.

	https://sv.wikipedia.org/wiki/Skott%C3%A5r#Gregorianska_kalendern

	är skottår om det är jämnt delbart med 4, utom vid sekelskiften (jämna 100 år); då är året endast skottår om det är jämnt delbart med 400.
	År 1700, 1800, 1900, 2100, 2200 och 2300 är alltså inte skottår (vilket de dock är i julianska kalendern), medan år 1600, 2000 och 2400 är det.
**********************************************************************/

describe('Uppgift 6 - numberOfDays(month, year)', () =>
{
  test('Jan 2017', () => {
   expect(numberOfDays('jan', 2017)).toBe(31);
  });

  test('Jan 2017 as String', () => {
   expect(numberOfDays('jan','2017')).toBe(31);
  });

  test('Feb 2016 as String', () => {
   expect(numberOfDays("feb", 2016)).toBe(29);
  });

  test('Month named Sunny', () => {
   expect(() => {
     numberOfDays("Sunny", 2017);
   }).toThrow(
     'Not a positive number!'
   );
  });

  test('Year named Rooster', () => {
   expect(() => {
     numberOfDays('jan','Rooster');
   }).toThrow(
     'Not a positive number!'
   );
  });

}); // END numberOfDays(month, year)

/**********************************************************************
Uppgift 5
Skriv testfall för funktionen hypotenuse(a, b). Parametrarna a och b motsvarar sidorna i en rätvinklig triangel. Därför måste a och b vara positiva tal. Funktionen ska returnera längden på hypotenusan.
	https://www.matteboken.se/lektioner/skolar-9/geometri/pythagoras-sats
**********************************************************************/

describe('Uppgift 5 - hypotenuse(a, b)', () =>
{
  test('One and one is Two', () => {
    expect(hypotenuse(1,1)).toBeCloseTo(1.4142135623731);
  });

  test('Five and ten', () => {
    expect(hypotenuse(5,10)).toBeCloseTo(11.180339887499);
  });

  test('Minus five and eleven', () => {
    expect(() => {
      hypotenuse(-5,11);
    }).toThrow(
      'Not a positive number!'
    );
  });

  test('X and Y', () => {
   expect(() => {
     hypotenuse('x','y');
   }).toThrow(
     'Not a positive number!'
   );
  });
});

/**********************************************************************
Uppgift 4
Skriv testfall för funktionen backwards(x). Det är en funktion som ska ta en sträng som parameter. Den ska returnera en sträng som är den ursprungliga strängen baklänges. Funktionen ska också kunna ta tal som parametrar, genom att göra om dem till strängar.
**********************************************************************/

describe('Uppgift 4 - backwards(x)', () =>
{
  test('A string', () => {
   expect(backwards("bob")).toBe("bob");
  });

  test('A string with case chars', () => {
   expect(backwards("Hello!")).toBe("!olleH");
  });

  test('A number', () => {
   expect(backwards(12345)).toBe("54321");
  });

  test('A undefined', () => {
    expect(() => {
      backwards(undefined);
    }).toThrow(
      'Not a string or number!'
    );
  });

  test('An object', () => {
   expect(() => {
     backwards({a:1});
   }).toThrow(
     'Not a string or number!'
   );
  });

  test('An array', () => {
    expect(() => {
      backwards(['a','b','c']);
    }).toThrow(
      'Not a string or number!'
    );
  });

});

/**********************************************************************
Uppgift 3
Skriv testfall för funktionen sellProduct(product). Funktionen tar ett objekt som parameter, som ska ha följande egenskaper: name, price, count. När funktionen anropas ska antalet produkter minskas med ett. Om det inte finns några kvar ska funktionen kasta ett exception med throw. (Repetition felhantering: här)
**********************************************************************/

describe('Uppgift 3 - sellProduct(product)', () =>
{
  test('A string', () => {
    expect(sellProduct("")).toBe(null);
  });

  test('A null', () => {
    expect(sellProduct(null)).toBe(null);
  });

  test('A undefined', () => {
    expect(sellProduct(undefined)).toBe(null);
  });

  test('Is not a product', () => {
    expect(() => {
      sellProduct({name:'Banana', pricetag:'299', count:3});
    }).toThrow(
      'Not a product object!'
    );
  });

  test('No products left', () => {
    expect(() => {
      sellProduct({name:"a", price:1, count:0});
    }).toThrow(
      'No products left to sell!'
    );
  });

  test('Count is more then zero', () => {
   expect(
     sellProduct({name:"a", price:1, count:1})
   ).toEqual(
     expect.objectContaining({name:"a", price:1, count:0})
   );
  });
});

/**********************************************************************
	Uppgift 2
	Skriv tre testfall (gärna fler) för funktionen isFingerNumber(n). Funktionen tar en parameter och ska returnera true om parametern är lika med ett antal fingrar som en person kan ha.

	Fundera på:
		vilket är det minsta respektive det största antal fingrar man kan ha?
		vad ska hända om funktionen inte får någon parameter? isFingerNumber();
		vilka värden ska funktionen returnera true för?
		vilka datatyper kan parametern vara?
		vilka värden på parametern är tillåtna och vilka är otillåtna?
		vad kännetecknar ett bra testfall?
**********************************************************************/

describe('Uppgift 2 - isFingerNumber(n)', () =>
{
  test('null returns false', () => {
    expect(isFingerNumber(null)).toBe(false );
  });

  test('more then five', () => {
    expect(isFingerNumber(6)).toBe(false);
  });

  test('less then one', () => {
    expect(isFingerNumber(0)).toBe(false);
  });

  test('Empty returns false', () => {
    expect(isFingerNumber("")).toBe(false);
  });

  test('Two as string', () => {
    expect(isFingerNumber("2")).toBe(true);
  });

  test('Number four returns true', () => {
    expect(isFingerNumber(4)).toBe(true);
  });

}); // END isFingerNumber(n)
