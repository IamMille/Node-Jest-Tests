class Memory
{
  constructor() {
    this.data = undefined; // this.data är namnet på egenskapen som sparas i klassen
  }
	remember(value) {
    this.data = value;
  }
	forget() {
    this.data = null;
  }
}

module.exports = Memory;
