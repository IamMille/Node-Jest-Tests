import React, { Component } from 'react';

/*
  Ändra i App.js så att App-komponenten renderar Inner.
  Skriv smoke tests för båda komponenterna, både deep och shallow.
  Ändra sedan i Inner.js så att render-funktionen kastar ett Error.
    Vilka test ska faila? Kontrollera genom att köra npm test.
*/

class Inner extends Component
{
  render() {
    //throw Error("throw something");
    return <div>
      <p>Hello dog</p>
    </div>;
  }

}

export default Inner;
