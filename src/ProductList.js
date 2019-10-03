import React from 'react';

import CatalogContext from './CatalogContext';
import Product from './Product';

const ProductList = () => {

  const renderProducts = (products) => {
    return products.map(product => {
      return (
        <div key={product.id} className="four wide column">
          <Product data={product} />
        </div>
      );
    });
  }

  return (
    <CatalogContext.Consumer>
      {
        context => (
          <div className="ui grid">
            { renderProducts(context.products) }
          </div>
        )
      }
    </CatalogContext.Consumer>
  );
}

export default ProductList;