import React from 'react';
import { 
  render, 
  fireEvent, 
  waitForElement,
} from '@testing-library/react'
import '@testing-library/jest-dom';

import Modal from '../components/Modal';

describe('Modal.js', () => {

  const props = {
    onDismiss: jest.fn(),
    title: "Modal Header",
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
  }
  
  const modalRoot = document.createElement('div')
  modalRoot.setAttribute('id', 'modal')
  
  test('Modal is displayed', () => {
    const { asFragment } = render(<Modal {...props} />, {
      container: document.body.appendChild(modalRoot),
    });
    
    expect(asFragment()).toMatchSnapshot()
  });

  test('Click on modal does nothing', async () => {
    const { container, getByText } = render(<Modal {...props} />, {
      container: document.body.appendChild(modalRoot),
    });

    let header = await waitForElement(() => container.querySelector('.header')); 

    fireEvent.click(header);
    header = await waitForElement(() => getByText('Modal Header'))

    expect(header.classList).toContain('header');
    expect(props.onDismiss).toHaveBeenCalledTimes(0);
  });

  test('Click outside modal closes it', async() => {
    const { container } = render(<Modal {...props} />, {
      container: document.body.appendChild(modalRoot),
    });
    let dimmer = await waitForElement(() => container.querySelector('.dimmer'));

    fireEvent.click(dimmer)
    
    expect(props.onDismiss).toHaveBeenCalledTimes(1);
  });

});