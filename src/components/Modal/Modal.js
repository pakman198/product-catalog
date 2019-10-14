import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

import Carousel from './Carousel/Carousel';
import { ModalContext } from '../../contexts/ModalContext';

const Modal = () => {

  const renderModal = () => {
    return (
      <ModalContext.Consumer>
        {
          ({ currentItem, toggleModal }) => (
            <div 
              className="ui dimmer modals visible active"
              onClick={() => toggleModal()}
            >
              <div 
                className="ui modal tiny visible active"
                onClick={e => e.stopPropagation()}
              >
                <div className="header">{currentItem.name}</div>
                <div className="content">
                  <Carousel images={currentItem.images} />
                </div>
              </div>
            </div>
          )
        }
      </ModalContext.Consumer>
    );
  }

  useEffect(() => {
    return () => {
      document.querySelector('#modal').classList.remove('visible');
    }
  });

  const node = document.querySelector('#modal')
  node.classList.add('visible');
  const modal = renderModal();

  return ReactDOM.createPortal(modal, node);
}

export default Modal;