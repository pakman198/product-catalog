import React from 'react';
import axiosMock from "axios";
import { 
  render, 
  waitForElement,
  wait
} from '@testing-library/react'
import '@testing-library/jest-dom';

import ProductList from '../components/Products/ProductList/ProductList';
import { ModalContext } from '../contexts/ModalContext';
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

  test("Is displayed properly", async () => {
    axiosMock.get.mockResolvedValueOnce({ data: { groups: data }});
    
    const { asFragment, debug } = render(
      <ModalContext.Provider value ={context}>
        <ProductList />
      </ModalContext.Provider>
    );

    // this actually helped to display the content after the axios request
    await wait(() =>{
      asFragment()
    });
    
    expect(asFragment()).toMatchSnapshot();
  });

  test('Displays a Modal if the value from the context is true', async () => {
    axiosMock.get.mockResolvedValueOnce({ data: { groups: data }});
    
    const modalRoot = document.createElement('div');
    modalRoot.setAttribute('id', 'modal');
    document.body.appendChild(modalRoot)
    
    const { getByTestId, asFragment } = render(
      <ModalContext.Provider value ={context2}>
        <ProductList />
      </ModalContext.Provider>
    );

    await wait(() =>{
      asFragment()
    });

    const modal = await waitForElement(() => getByTestId('modal-header'));

    expect(modal).toBeInTheDocument;
  });

  test("The async request is rejected and an empty container is displayed", async () => {
    axiosMock.get.mockRejectedValueOnce(new Error('Async error'));
    
    const { asFragment } = render(
      <ModalContext.Provider value ={context}>
        <ProductList />
      </ModalContext.Provider>
    );

    // this actually helped to display the content after the axios request
    await wait(() =>{
      asFragment()
    });
    
    expect(asFragment()).toMatchSnapshot();
  });

});

