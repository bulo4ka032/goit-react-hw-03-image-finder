import { LoadMoreBtn } from './Button.styled';

const Button = ({ onLoadMore }) => {
  return (
    <LoadMoreBtn type="button" onClick={onLoadMore}>
      Load More
    </LoadMoreBtn>
  );
};

export default Button;
