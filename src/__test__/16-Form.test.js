import React, { Component } from 'react';
import { shallow, mount } from 'enzyme';
/*
Uppgift 16 [Inlämningsuppgift]

Skapa en ny webbapplikation.
- App-komponenten ska innehålla ett formulär där användaren kan fylla i namn och epostadress.
- Formuläret ska ligga i en egen komponent.
* När man skriver i något av formulärelementen så ska texten sparas i App-komponentens state.
- Skriv tester för komponenten innan du implementerar den.
- Skapa sedan en button som ligger i en egen komponent.
- När man klickar på den ska namn och epostadress rensas från App-komponentens state.
- Det ska finnas testfall som testar
-   att formuläret innehåller input-element och
-   att button-komponenten innehåller ett element med CSS-klassen "buttonClass".
- Använd Enzyme API.
*/
import MyForm from '../16-Form.js';

describe('Form (#16)', () =>
{

  test('Form renders', () => {
    shallow(<MyForm />);
  });

  test('Form has two inputs', () => {
    expect(
      shallow(<MyForm />)
      .find("input")
      .length
    ).toBe(2);
  });

  test('Form have a button', () => {
    expect(
      shallow(<MyForm />)
      .render()
      .find('button')
      .length
    ).toBe(1);
  });

  test('Form button has class buttonClass', () => {
    expect(
      shallow(<MyForm />)
      .render() // mount ... m.m.
      .find('button')
      .hasClass('buttonClass')
    ).toBe(true);
  });

  test('Writing name updates state', () => {
    var html = shallow(<MyForm />);

    html.find('input').at(0).simulate('change', {
      target: {name: "name", value: "JSninja"}
    });

    expect(
      html.state('name')
    ).toBe('JSninja'); //.toBe(undefined);
  });

  test('Writing email updates state', () => {
    var html = shallow(<MyForm />);

    html.find('input[name="email"]').simulate('change', {
      target: {name: 'email', value: 'JSninja@example.com'}
    });

    expect(
      html.state('email')
    ).toBe('JSninja@example.com'); //.toBe('JSninja');
  });

  test('Clicking button clears state name', () => {
    var html = mount(<MyForm />); // using mount so the onClick event triggers

    html.find('input[name="name"]').simulate('change', {
      target: {name: 'name', value: 'NameValue'}
    });

    html.find('button').simulate('click');

    expect(
      html.state('name')
    ).toBe('');
  });

  test('Clicking button clears input email', () => {
    var html = mount(<MyForm />); // using mount so the onClick event triggers

    html.find('button').simulate('click');

    expect(
      html
      .find('input[name="email"]')
      .props().value
    ).toBe('');
  });

});
