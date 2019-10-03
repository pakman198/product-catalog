import './ProductList.scss';
import React, { Component } from 'react';
import axios from 'axios';

import Product from './Product';
import Modal from './Modal';
import ModalContext from '../ModalContext';

class ProductList extends Component {
  static contextType = ModalContext;

  state = {
    products: []
  }

  componentDidMount() {
    axios.get('http://localhost:3001/').then(({data}) => {
      this.setState({ products: data.groups })
    })
  }

  renderProducts() {
    const { products } = this.state;
    if ( products.length === 0 ) return null;


    return products.map(product => {
      return (
        <div key={product.id} className="column">
          <Product data={product} />   
        </div>
      )
    })
  }

  renderModal() {
    const { toggleModal, currentItem: { name, images }} = this.context;

    return (
      <Modal title={name} images={images} onDismiss={toggleModal} />
    )
  }

  render() {

    console.log(this.context)

    const products = this.renderProducts();
    return (
      <>
        <div className="product-list ui stackable three column grid">
          { products }
        </div>
        { this.context.isModalVisible ? this.renderModal() : null }
      </>
    );
  }
}

export default ProductList;