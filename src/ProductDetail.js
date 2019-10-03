import React, { Component } from 'react';

import CatalogContext from './CatalogContext';

import { capitalize } from './utils';

class ProductDetail extends Component {

  state = {
    qty: 0
  }

  componentDidUpdate(prevProps, prevState) {
    console.log({prevState})
    console.log(this.state)
  }

  shoppingCartHandler(product, addToCart) {
    const { qty } = this.state;

    if (qty === 0) return;

    const { id, alt_description } = product;
    const item = {
      sku: id,
      description: alt_description,
      qty
    };

    addToCart(item);
  }

  decrementHandler = () => {
    const { qty } = this.state;
    if (qty > 0) {
      this.setState({ qty: qty - 1 })
    } 
  }

  incrementHandler = () => {
    const { qty } = this.state;
    this.setState({ qty: qty + 1 })
  }

  renderProduct(product, addToCart) {
    if(!product) {
      return null;
    }

    const { alt_description, description, urls } = product
    const { qty } = this.state;

    return (
      <div className="ui item">
        <div className="ui image large">
          <img src={urls.regular} alt={alt_description}/>
        </div>
        <div className="middle aligned content">
          <div className="header">{ capitalize(alt_description) }</div>
          <div className="description">{ description }</div>
          <div className="extra">
            <div className="ui buttons">
              <button className="ui button" onClick={this.decrementHandler}>-</button>
              <div className="or" data-text={qty}></div>
              <button className="ui positive button" onClick={this.incrementHandler}>+</button>
            </div>

            <div>
              <button 
                className="medium ui primary button" 
                onClick={() => this.shoppingCartHandler(product, addToCart)}
              >
                <i className="icon shopping cart"></i>
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <CatalogContext.Consumer>
        {
          ({selectedProduct, addToCart}) => (
            <div className="ui segment">
              <div className="ui items">
                { this.renderProduct(selectedProduct, addToCart) }
              </div>
            </div>
          )
        }
      </CatalogContext.Consumer>
    );
  }
}

export default ProductDetail;