/*class Travel {
	constructor() {
		this.origin = null;
		this.destination = null;
	}
	// Returns the current location
	getLocation() {}

	// Sets the destination
	// Only works before travelling
	bookTrip(destination) {}

	// Sets the origin
	// Only works before travelling
	setOrigin(origin) {}

	// Moves from origin to destination
	// Should throw an Error if origin or destination has not been set
	// Origin and destination also need to be different strings
	goOnTrip() {}
}*/

const Travel = require('../12-travel.js');

describe('Travel, exercise 12', () =>
{
  test('setOrigin and getLocation', () => {
    var travel = new Travel();
    travel.setOrigin("Gothenburg");
    expect(travel.getLocation()).toBe('Gothenburg');
  });

  test('goOnTrip with only origin', () => {
    var travel = new Travel();
    travel.setOrigin("Gothenburg");
    expect(() => {
      travel.goOnTrip();
    }).toThrow(
      Error('Travel has no destination')
    );
  });

  test('goOnTrip with only destination', () => {
    var travel = new Travel();
    travel.bookTrip("Hawaii");
    expect(() => {
      travel.goOnTrip();
    }).toThrow(
      Error('Travel has no origin')
    );
  });

  test('goOnTrip with origin and dest set', () => {
    var travel = new Travel();
    travel.setOrigin("Gothenburg");
    travel.bookTrip("Hawaii");
    travel.goOnTrip();
    expect(travel.getLocation()).toBe('Hawaii');
  }); // moves from origin to dest
});
