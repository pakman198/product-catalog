import React from 'react';

import ProductList from './Products/ProductList/ProductList';
import Header from './Header';
import { ModalProvider } from '../contexts/ModalContext';

const App = () => {
    return (
        <div className="ui container">
          <Header />
          <ModalProvider>
            <ProductList />
          </ModalProvider>
        </div>
    );
}

export default App;
