import React, { Component } from 'react';
import { shallow } from 'enzyme';
/*
  Skapa en ny webbapplikation med en React-komponent som heter Page.
  Den ska spara en variabel pageNumber i state.
  Komponenten Page ska ha en button för att öka pageNumber.
  (VG-nivå: en button för att minska pageNumber också.)
  Värdet ska skrivas ut i render-funktionen.

  Skriv smoke test för alla komponenter,
    samt metoder för att testa så att rätt saker händer när man klickar på knapparna.
*/
import Pages from '../15-pageNumber.js';


describe('pageNumber (#15)', () =>
{

  test('pageNumber renders', () => {
    shallow(<Pages />);
  });

  test('pageNumber renders a paragraph', () => {
    var actual = shallow(<Pages />).html().indexOf("<p>") > -1;
    var expected = true;
    expect(actual).toBe(expected);
  });

  test('pageNumber has a start value', () => {
    var actual = shallow(<Pages />).state('pageNumber');
    var expected = 1;
    expect(actual).toBe(expected);
  });

  test('pageNumber increments', () => {
    var html = shallow(<Pages />);
    html.find('button').at(0).simulate('click');

    expect(
      html.state('pageNumber')
    ).toBe(2);
  });

  test('pageNumber increments', () => {
    var html = shallow(<Pages />);
    html.find('button').at(1).simulate('click');

    expect(
      html.state('pageNumber')
    ).toBe(0);
  });
});

//test('pageNumber increments', () => {});
//test('pageNumber decrements', () => {});
