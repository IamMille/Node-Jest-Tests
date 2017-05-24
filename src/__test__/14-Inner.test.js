import React, { Component } from 'react';
import { shallow } from 'enzyme';

import Inner from '../14-Inner.js';
import App from '../App.js';

describe('Inner.js, (#14)', () =>
{

  test('inner.js', () => {
    shallow(<Inner />);
  });

  test('inner.js App', () => {
    shallow(<App />);
  });

});
