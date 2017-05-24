/*
Uppgift 11
Skriv testfall för metoderna countUp och countDown.
1. countUp ska räkna upp egenskapen value med ett.
2. countDown ska räkna ner med ett om värdet är större än noll, annars ska funktionen kasta ett Error.
*/

class Counter
{
	constructor() {
		this.value = 1;
	}
	countUp() {
		this.value += 1;
	}
	countDown() {
		if (this.value === 0)
			throw Error('Count would be less then zero')
		else
			this.value -= 1;
	}
}

module.exports = Counter;
