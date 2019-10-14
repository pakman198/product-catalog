import React from 'react';
import { 
  render, 
  fireEvent, 
  waitForElement,
} from '@testing-library/react'
import '@testing-library/jest-dom';

import Modal from '../components/Modal/Modal';
import { ModalContext } from '../contexts/ModalContext'; 

describe('Modal.js', () => {

  const props = {
    toggleModal: jest.fn(),
    currentItem: {
      name: "Modal Header",
      images: [
        {
          "size": "m",
          "meta": "",
          "alt": "",
          "rel": "althero",
          "width": 363,
          "href": "https://www.westelm.com/weimgs/rk/images/wcm/products/201938/0011/tahoe-solid-wood-dining-table-natural-oak-m.jpg",
          "height": 363
        },
        {
          "size": "m",
          "meta": "",
          "alt": "",
          "rel": "althero",
          "width": 363,
          "href": "https://www.westelm.com/weimgs/rk/images/wcm/products/201938/0012/tahoe-solid-wood-dining-table-natural-oak-2-m.jpg",
          "height": 363
        },
      ]
    },
  }
  const ModalContainer = () => {
    return (
      <ModalContext.Provider value={props}>
        <Modal />
      </ModalContext.Provider>
    )
  }
  
  const modalRoot = document.createElement('div')
  modalRoot.setAttribute('id', 'modal')
  
  test('Modal is displayed', () => {
    const { asFragment } = render(<ModalContainer />, {
      container: document.body.appendChild(modalRoot),
    });
    
    expect(asFragment()).toMatchSnapshot();
  });

  test('Click on modal does nothing', async () => {
    const { container, getByText, asFragment } = render(<ModalContainer />, {
      container: document.body.appendChild(modalRoot),
    });

    let header = await waitForElement(() => container.querySelector('.header')); 

    fireEvent.click(header);
    header = await waitForElement(() => getByText('Modal Header'))

    expect(header.classList).toContain('header');
    expect(props.toggleModal).toHaveBeenCalledTimes(0)
    expect(asFragment()).toMatchSnapshot();
  });

  test('Click outside modal closes it', async() => {
    const { container } = render(<ModalContainer />, {
      container: document.body.appendChild(modalRoot),
    });
    let dimmer = await waitForElement(() => container.querySelector('.dimmer'));

    fireEvent.click(dimmer)
    
    expect(props.toggleModal).toHaveBeenCalledTimes(1);
  });

});