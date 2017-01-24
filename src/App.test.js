import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, mount } from 'enzyme';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('renders correctly', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.state().ballWidth).toEqual(100);
});
