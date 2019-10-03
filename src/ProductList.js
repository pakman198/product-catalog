import React, { Component } from 'react';
import axios from 'axios';

class ProductList extends Component {

  state = {
    products: []
  }

  componentDidMount() {
    axios.get('http://localhost:3001/').then(({data}) => {
      this.setState({ products: data.groups })
    })
  }

  

  render() {
    return (
      <div className="ui grid">
        HOLA
      </div>
    );
  }
}

export default ProductList;