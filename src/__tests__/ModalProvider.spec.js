import React, { useContext } from 'react';
import { 
  render, 
  waitForElement, 
  fireEvent,
} from '@testing-library/react'
import '@testing-library/jest-dom';

import { ModalContext, ModalProvider } from '../contexts/ModalContext';

import data from '../__mocks__/apiResponse.json';

describe('ModalProvider', () => {


  const renderComponent = (item = null) => {
    return render(
      <ModalProvider>
        <ModalContext.Consumer>
        {context => (
          <div>
            <button onClick={() => context.toggleModal(item)}>Click Me</button>
            <span data-testid="item">{ context.currentItem ? 'Item' : 'Select an Item' }</span>
          </div>
        )}
      </ModalContext.Consumer>
      </ModalProvider>
    )
  }

  test('It renders properly', () => {
    const { asFragment } = renderComponent(data[0]);

    expect(asFragment()).toMatchSnapshot();
  });

  test('Set Context.currentItem when Context.toggleModal function is called', async () => {
    const { getByText, getByTestId } = renderComponent(data[0]);
    const button = await waitForElement(() => getByText('Click Me'));
    fireEvent.click(button);

    const item = await waitForElement(() => getByTestId('item'));
    
    expect(item.innerHTML).toBe('Item');
  });

  test('Set Context.currentItem to null when Context.toggleModal function is called without a parameter', async () => {
    const { getByText, getByTestId } = renderComponent();
    const button = await waitForElement(() => getByText('Click Me'));
    fireEvent.click(button);

    const item = await waitForElement(() => getByTestId('item'));
    
    expect(item.innerHTML).toBe('Select an Item');
  });
});