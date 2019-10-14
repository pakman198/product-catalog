import React, { useState } from 'react';

export const ModalContext = React.createContext();

export const ModalProvider = (props) => {
  const [ isModalVisible, setIsModalVisible ] = useState(false);
  const [ currentItem, setCurrentItem ] = useState({});
  

  const toggleModal = (item) => {
    const selectedItem = item ? item : null;

    setIsModalVisible(!isModalVisible);
    setCurrentItem(selectedItem);
  }

  const contextValue = {
    currentItem,
    isModalVisible,
    toggleModal
  }
    
  return (
    <ModalContext.Provider value={contextValue}>
      { props.children }
    </ModalContext.Provider>
  );
}

