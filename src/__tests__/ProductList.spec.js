import React from 'react';
import axiosMock from "axios";
import { 
  render, 
  waitForElement, 
} from '@testing-library/react'
import '@testing-library/jest-dom';

import ProductList from '../components/ProductList';
import ModalContext from '../ModalContext';
import data from '../__mocks__/apiResponse.json';

describe('ProductList', () => {

  const context = {
    currentItem: null,
    isModalVisible: false,
    toggleModal: jest.fn()
  }

  const context2 = {
    currentItem: data[0],
    isModalVisible: true,
    toggleModal: jest.fn()
  }


  test("Is displayed properly", () => {
    axiosMock.get.mockResolvedValueOnce({ data: { groups: data }});
    const { asFragment } = render(
      <ModalContext.Provider value ={context}>
        <ProductList />
      </ModalContext.Provider>
    );
    
    expect(asFragment()).toMatchSnapshot();
  });

  test('Displays a Modal if the value from the context is true', async () => {
    axiosMock.get.mockResolvedValueOnce({ data: { groups: data }});
    
    const modalRoot = document.createElement('div');
    modalRoot.setAttribute('id', 'modal');
    document.body.appendChild(modalRoot)
    
    const { getByText } = render(
      <ModalContext.Provider value ={context2}>
        <ProductList />
      </ModalContext.Provider>
    );

    const modal = await waitForElement(() => getByText(/Tahoe Solid Wood Dining Table - Natural Oak/i));

    expect(modal).toBeInTheDocument;
  });

});

