import React from 'react'
import { render, wait } from '@testing-library/react'

import App from '../components/App';

test('App.js', async () => {
  const { asFragment } = render(<App />);

  await wait(() =>{
    asFragment()
  });
  
  expect(asFragment()).toMatchSnapshot();
});