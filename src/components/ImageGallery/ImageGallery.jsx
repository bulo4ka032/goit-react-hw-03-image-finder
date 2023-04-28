import { ImageGalleryItem } from '../index.js';
import { ImageGalleryList } from './ImageGallery.styled.jsx';
const ImageGallery = ({ images }) => {
  return (
    <ImageGalleryList>
      {images.map(({ id, webformatURL, largeImageURL, tags }) => {
        return (
          <ImageGalleryItem
            key={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            tags={tags}
          />
        );
      })}
    </ImageGalleryList>
  );
};

export default ImageGallery;
