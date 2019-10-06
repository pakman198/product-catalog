import React from 'react'
import { render } from '@testing-library/react'

import Header from '../components/Header';

test('Header.js', () => {
  const { asFragment } = render(<Header />);
  
  expect(asFragment()).toMatchSnapshot();
});