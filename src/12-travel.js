class Travel {
	constructor() {
		this.origin = null;
		this.destination = null;
	}
	// Returns the current location
	getLocation() {
    return this.origin;
  }

	// Sets the destination
	// Only works before travelling
	bookTrip(destination) {
    this.destination = destination;
  }

	// Sets the origin
	// Only works before travelling
	setOrigin(origin) {
    this.origin = origin;
  }

	// Moves from origin to destination
	// Should throw an Error if origin or destination has not been set
	// Origin and destination also need to be different strings
	goOnTrip() {
    if (!this.origin)
      throw Error('Travel has no origin');
    if (!this.destination)
      throw Error('Travel has no destination');
    else {
      this.origin = this.destination;
      this.destination = null;
    }
  }
}

module.exports = Travel;
