import React, { Component } from 'react';
/*
Uppgift 16 [Inlämningsuppgift]

Skapa en ny webbapplikation.
App-komponenten ska innehålla ett formulär där användaren kan fylla i namn och epostadress.
Formuläret ska ligga i en egen komponent.
När man skriver i något av formulärelementen så ska texten sparas i App-komponentens state.
Skriv tester för komponenten innan du implementerar den.
Skapa sedan en button som ligger i en egen komponent.
När man klickar på den ska namn och epostadress rensas från App-komponentens state.
Det ska finnas testfall som testar att formuläret innehåller input-element och
  att button-komponenten innehåller ett element med CSS-klassen "buttonClass". Använd Enzyme API.
*/

class MyForm extends Component
{
  constructor() {
    super(...arguments);
    this.state = {};
  }

  render() {
    return <div>
      <input name="name" placeholder="Enter your name" />
      <input name="email" placeholder="Enter your e-mail" />
      <MyButton doClear={() => this.buttonDoClear()} />
    </div>;
  }
  buttonDoClear() {

  }
}

class MyButton extends Component
{
  render() {
    const {doClear} = this.props;
    return <button
      className="buttonClass"
      onClick={() => doClear()}>
        Clear Input
    </button>;
  }
}

export default MyForm;
