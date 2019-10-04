import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render } from '@testing-library/react';
import Class from './Class';
import Navbar from './NavBar';


it('App renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Class renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Class />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Navbar renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Navbar />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('names found', () => {
  const { getByTestId } = render(<Class />);

  getByTestId(/names/i);
});

it('nav found', () => {
  const { getByTestId } = render(<Navbar />);

  getByTestId(/nav/i);
});