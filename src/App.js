import React from 'react';

import ProductList from './ProductList';
import Header from './Header';

const App = () => {
    return (
        <div className="ui container">
          <Header />
          <ProductList />
        </div>
    );
}

export default App;
