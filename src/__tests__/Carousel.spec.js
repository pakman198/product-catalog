import React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react'
import '@testing-library/jest-dom';

import Carousel from '../components/Modal/Carousel/Carousel';

describe('Carousel.js', () => {

  const images = [
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

  test('Displays slides passed as arguments', () => {
    const { container } = render(<Carousel images={images} />);
    const slides = container.querySelectorAll('.slide')
  
    expect(slides.length).toEqual(2);
  });

  test('Empty Carousel is displayed when no images are passed to the component', () => {
    const { container } = render(<Carousel images={[]} />);
    const slides = container.querySelectorAll('.slide')
  
    expect(slides.length).toEqual(0);
  });

  test('Click on prev image button when first slide is displayed', async() => {
    const { getByTestId, getByLabelText } = render(<Carousel images={images} />);
    const prev = getByLabelText('prev-slide');

    fireEvent.click(prev);

    const currentImage = await waitForElement(() => getByTestId('current-index'));
    expect(+currentImage.textContent).toEqual(0);
  });

  test('Click on next image button', async() => {
    const { getByTestId, getByLabelText } = render(<Carousel images={images} />);
    const next = getByLabelText('next-slide');

    fireEvent.click(next);

    const currentImage = await waitForElement(() => getByTestId('current-index'));
    expect(+currentImage.textContent).not.toEqual(0);
  });

  test('Click on next image button when reached the last slide', async() => {
    const { getByTestId, getByLabelText } = render(<Carousel images={images} />);
    const next = getByLabelText('next-slide');

    fireEvent.click(next);
    fireEvent.click(next);

    const currentImage = await waitForElement(() => getByTestId('current-index'));
    expect(+currentImage.textContent).toEqual(0);
  });

  test('Click on prev image button', async() => {
    const { getByTestId, getByLabelText } = render(<Carousel images={images} />);
    const prev = getByLabelText('prev-slide');
    const next = getByLabelText('next-slide');

    fireEvent.click(next);
    fireEvent.click(prev);

    const currentImage = await waitForElement(() => getByTestId('current-index'));
    expect(+currentImage.textContent).toEqual(0);
  });

})



