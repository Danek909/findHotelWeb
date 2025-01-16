import React from 'react';
import './Modal.css';

type Props = {
  isOpen: boolean
  onClose: undefined
  children: boolean 
  styles: string
}

const Modal: React.FC<Props> = ({isOpen, onClose, children, styles}) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      {<img className="ImgFon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqbpHmcyxgTqrfHGo-QcFHh60Z26mo72qq9tCnjMGUyc0h31xJE6Vk1bx8xo9oLp6TRRg&usqp=CAU" alt="ewfe" loading="lazy" />}
      <div className="modal">
        <span className="close-button" onClick={onClose}>
          &times;
        </span>
        {children}
      </div>
    </div>
  );
};

export default Modal;