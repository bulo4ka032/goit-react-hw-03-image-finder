import { Image, Message } from './GalleryFallback.styled';

const GalleryFallback = ({ img, message }) => {
  return (
    <div>
      <Image src={img} width="400" alt="totoro" />
      <Message>{message}</Message>
    </div>
  );
};

export default GalleryFallback;
