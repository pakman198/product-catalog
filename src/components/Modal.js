import React from 'react';
import ReactDOM from 'react-dom';

import Carousel from './Carousel';

class Modal extends React.Component {

  renderModal() {
    const { title, images, onDismiss } = this.props;

    return (
      <div 
        className="ui dimmer modals visible active"
        onClick={() => onDismiss()}
      >
        <div 
          className="ui modal tiny visible active"
          onClick={e => e.stopPropagation()}
        >
          <div className="header">{title}</div>
          <div className="content">
            <Carousel images={images} />
          </div>
        </div>
      </div>
    );
  }

  componentWillUnmount() {
    document.querySelector('#modal').classList.remove('visible');
  }

  render() {
    const node = document.querySelector('#modal')
    node.classList.add('visible');
    const modal = this.renderModal();

    return ReactDOM.createPortal(modal, node);
  }
}

export default Modal;