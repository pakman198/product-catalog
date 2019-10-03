import React, { Component } from 'react';
import axios from 'axios';

import CatalogContext from './CatalogContext';

const apiServer = axios.create({baseURL: 'http://localhost:3001'});
  
class CatalogProvider extends Component {

  state = {
    products: [],
    selectedProduct: null,
    cart: []
  }

  componentDidMount() {
    apiServer.get('/')
    .then(response => {
      console.log({response})
      this.setState({ products: response.data.results })
    })
    .catch(error => {
      console.log({error})
    });
  }

  fetchPhoto = (id) => {
    this.setState({ selectedProduct: null });

    apiServer.get(`/photo/${id}`)
    .then(response => {
      console.log({response})

      this.setState({ selectedProduct: response.data })
    })
    .catch(error => {
      console.log({error})
    });
  }

  addToCart = (product) => {
    const { cart } = this.state;

    this.setState({
      cart: [...cart, product]
    }, () => {
      console.log(this.state)
    });
  }

  render() {
    const contextValue = {
      products: this.state.products,
      selectedProduct: this.state.selectedProduct,
      fetchPhoto: this.fetchPhoto,
      addToCart: this.addToCart
    }

    return (
      <CatalogContext.Provider value={contextValue}>
        {this.props.children}
      </CatalogContext.Provider>
    );
  }
}

export default CatalogProvider;