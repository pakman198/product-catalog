import React, { Component } from 'react';

import ModalContext from '../ModalContext';
  
class ModalProvider extends Component {

  state = {
    isModalVisible: false,
    currentItem: {}
  }

  toggleModal = (item) => {
    const { isModalVisible } = this.state;
    const currentItem = item ? item : null;

    this.setState({
      isModalVisible: !isModalVisible,
      currentItem

    }, () => {
      // console.log(this.state)
    });
  }

  render() {
    const contextValue = {
      currentItem: this.state.currentItem,
      isModalVisible: this.state.isModalVisible,
      toggleModal: this.toggleModal
    }

    return (
      <ModalContext.Provider value={contextValue}>
        {this.props.children}
      </ModalContext.Provider>
    );
  }
}

export default ModalProvider;