import { Component } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalWindow } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onEsc);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onEsc);
  }

  onEsc = evt => {
    if (evt.code !== 'Escape') {
      return;
    }
    this.props.closeModal();
  };

  render() {
    const { closeModal, modalImg, tags } = this.props;

    return createPortal(
      <Overlay onClick={closeModal}>
        <ModalWindow>
          <img src={modalImg} alt={tags} />
        </ModalWindow>
      </Overlay>,
      modalRoot
    );
  }
}

export default Modal;
