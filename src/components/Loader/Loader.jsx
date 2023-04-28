import { InfinitySpin } from 'react-loader-spinner';

const Loader = () => {
  return (
    <InfinitySpin
      width="200"
      color="#BA90C6"
      wrapperStyle={{ justifyContent: 'center' }}
      visible={true}
    />
  );
};

export default Loader;
