import './Product.scss';
import React, { useContext } from 'react';

import ModalContext from '../ModalContext';

const currency = (num) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  }).format(num)
}

const Product = (props) => {
  const context = useContext(ModalContext);
  // console.log({context})
  const { data, data: { name, hero }} = props;

  const price = data.price || data.priceRange;
  const selling = typeof price.selling === 'number' ? price.selling : price.selling.low;


  return (
    <div className="ui centered card">
      <div className="image" onClick={() => context.toggleModal(data)} role="button">
        <img src={hero.href} alt={name} />
      </div>
      <div className="content">
        <div className="header">{name}</div>
      </div>
      <div className="extra content">
          {currency(selling)}
      </div>
    </div>
  );
}

export default Product;