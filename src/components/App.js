import React from 'react';

import ProductList from './ProductList';
import Header from './Header';
import ModalProvider from './ModalProvider';

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
