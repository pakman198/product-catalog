import './ProductList.scss';
import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';

import Product from '../Product';
import Modal from '../../Modal/Modal';
import { ModalContext } from '../../../contexts/ModalContext';

const ProductList = () => {
  const modalContext = useContext(ModalContext);
  const [ products, setProducts ] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/').then(({data}) => {
      setProducts(data.groups);
    }).catch(e => {
      console.log(e);
    })
  }, [])

  let items = null;
  if ( products || products.length !== 0) {
    items =  products.map(product => {
      return (
        <div key={product.id} className="column">
          <Product data={product} />   
        </div>
      );
    });
  }

  return (
    <>
      <div className="product-list ui stackable three column grid">
        { items }
      </div>
      { modalContext.isModalVisible ? <Modal /> : null }
    </>
  );
  
}

export default ProductList;