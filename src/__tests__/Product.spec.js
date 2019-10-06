import React from 'react';
import { 
  render, 
  waitForElement, 
  fireEvent,
} from '@testing-library/react'
import '@testing-library/jest-dom';

import Product from '../components/Product';
import ModalContext from '../ModalContext';
import data from '../__mocks__/apiResponse.json';

describe('Product', () => {
  const product1 = data[0];
  const product2 = data[1];
  const context = {
    toggleModal: jest.fn()
  }

  test('Rendered Properly', () => {
    const { asFragment } = render(
      <ModalContext.Provider value={context}>
        <Product data={product1}/>
      </ModalContext.Provider>
    )

    expect(asFragment()).toMatchSnapshot();
  });

  test('Price comes as priceRange property form the data prop', async () => {
    const { getByText } = render(
      <ModalContext.Provider value={context}>
        <Product data={product2}/>
      </ModalContext.Provider>
    )

    const price  = await waitForElement(() => getByText(/559.20/i));

    expect(price).toBeInTheDOM;
  });

  test('Triggers conext property method when image clicked', async () => {
    const { getByRole } = render(
      <ModalContext.Provider value={context}>
        <Product data={product1}/>
      </ModalContext.Provider>
    )
    const image = await waitForElement(() => getByRole('button'));

    fireEvent.click(image);

    expect(context.toggleModal).toHaveBeenCalledTimes(1);
  });

});