import './Product.scss';
import React, {  Component } from 'react';

import CatalogContext from './CatalogContext';

import { capitalize, localizeDate } from './utils';

class Product extends Component {

  renderTags() {
    const { tags } = this.props.data;

    return tags.map(({ title }) => {
      return (
        <button 
          key={title} 
          className="ui teal basic button"
          style={{ marginBottom: '.25em' }}
        >
          { title }
        </button>
      );
    });
  }

  renderProduct(context) {
    const { urls, description, alt_description, created_at, id } = this.props.data;
    
    return (
      <div className="ui card">
        <div className="image" onClick={() => context.fetchPhoto(id)}>
          <img src={urls.regular} alt={alt_description} />
        </div>
        <div className="content">
          <div className="header">{ capitalize(alt_description) }</div>
          <div className="meta">
            <span className="date">{ localizeDate(created_at) }</span>
          </div>
          <div className="description">
            { capitalize(description) }
          </div>
        </div>
        <div className="extra content">
            { this.renderTags() }
        </div>
      </div>
    );

  }
  
  render() {
    return (
      <CatalogContext.Consumer>
        { context => (
            <div>
              { this.renderProduct(context) }
            </div>
          )
        }
      </CatalogContext.Consumer>
    );
  }
}

export default Product;