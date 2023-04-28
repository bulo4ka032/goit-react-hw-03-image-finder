import { Component } from 'react';
import { Modal } from '../index.js';
import { ImageContainer, Image } from './ImageGalleryItem.styled.jsx';

class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  toggleModal = () => {
    this.setState(prevState => ({ isModalOpen: !prevState.isModalOpen }));
  };

  render() {
    const { webformatURL, largeImageURL, tags } = this.props;
    const { isModalOpen } = this.state;
    const { toggleModal } = this;

    return (
      <ImageContainer>
        <Image
          src={webformatURL}
          alt={tags}
          width="500"
          loading="lazy"
          onClick={toggleModal}
        />

        {isModalOpen && (
          <Modal
            modalImg={largeImageURL}
            tags={tags}
            closeModal={toggleModal}
          />
        )}
      </ImageContainer>
    );
  }
}
export default ImageGalleryItem;
