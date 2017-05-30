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

    this.state = {
      name: '',
      email: ''
    };

    this.handleClear = this.handleClear.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    return <div>
      <input
        name="name"
        placeholder="Enter your name"
        onChange={this.handleChange}
        value={this.state.name}
      />

      <input
        name="email"
        placeholder="Enter your e-mail"
        onChange={this.handleChange}
        value={this.state.email}
      />

    <MyButton handleClear={this.handleClear} />
    </div>;
  }

  handleChange(e) {
    if (e.target.name === 'name')
      this.setState({ name: e.target.value });
    else if (e.target.name === 'email')
      this.setState({ email: e.target.value });
  }

  handleClear(e) {
    console.log("button clicked, clear state please");
    this.setState({
      name: '',
      email: ''
    });
  }
}

class MyButton extends Component
{
  render() {
    return <button
      className="buttonClass"
      onClick={this.props.handleClear}
      >
        Clear Input
    </button>;
  }
}

export default MyForm;
