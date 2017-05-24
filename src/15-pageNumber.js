import React, { Component } from 'react';

/*
  Skapa en ny webbapplikation med en React-komponent som heter Page.
  Den ska spara en variabel pageNumber i state.
  Komponenten Page ska ha en button för att öka pageNumber.
  (VG-nivå: en button för att minska pageNumber också.)
  Värdet ska skrivas ut i render-funktionen.

  Skriv smoke test för alla komponenter,
    samt metoder för att testa så att rätt saker händer när man klickar på knapparna.
*/

class Pages extends Component
{
    constructor() {
      super(...arguments);
      this.state = {
        pageNumber: 1
      }
    }

    inc() {
      this.setState({ pageNumber: this.state.pageNumber + 1 });
    }

    dec() {
      this.setState({ pageNumber: this.state.pageNumber - 1 });
    }

    render() {
      const {pageNumber} = this.state;
      return <div>
        <p>You are at page: <b>{pageNumber}</b></p>
        <button onClick={() => this.inc()}>Increment</button>
        <button onClick={() => this.dec()}>Decrement</button>
      </div>;
    }
}

export default Pages;
