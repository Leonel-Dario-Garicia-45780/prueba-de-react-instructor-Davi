import React, { useState } from 'react';
//import './Modal.css';

const Modal = ({ children, onClose }) => {
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    setIsOpen(false);
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            {children}
            <button onClick={closeModal}>Cerrar modal</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
