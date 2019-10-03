import React from 'react';

import CatalogProvider from './CatalogProvider';
import ProductList from './ProductList';
import ProductDetail from './ProductDetail';
import CatalogContext from './CatalogContext';
import Header from './Header';

const App = () => {
    return (
      <CatalogProvider>
        <div className="ui container">
          <Header />
          <CatalogContext.Consumer>
            {
              ({selectedProduct}) => {
                return selectedProduct ? <ProductDetail /> : null
              }
            }
          </CatalogContext.Consumer>
          <ProductList />
        </div>
      </CatalogProvider>
    );
}

export default App;
