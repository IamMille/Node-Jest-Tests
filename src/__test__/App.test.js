import React, { Component } from 'react';
import App from '../App';
import { shallow } from 'enzyme';


describe('<h1>Hello</h1> (#13)', () =>
{

  test('renders without crashing, shallow smoke test', () => {
  	shallow(<App />);  // shallow smoke test
  });

  test('renders without crashing, deep smoke test', () => {
	   shallow(<App />).render();  // deep smoke test
  });

  test('renders hello', () => {
    let wrapper = shallow(<App />);
    const greeting = <h1>Hello world</h1>;
    expect(wrapper.contains(greeting)).toBe(true);
  });

  test('initial state value=0', () => {
  	let wrapper = shallow(<App />);
  	expect( wrapper.state('value') ).toBe(0);
  });

  test('state increases when clicked', () => {
  	let wrapper = shallow(<App />);
  	wrapper.find('button').simulate('click');
  	expect( wrapper.state('value') ).toBe(1);
  });

});
