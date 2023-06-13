import './Book.css';
import OrderButton from './OrderButton';

const Book = (props) => {
  return (
    <div className='one-book'>
      <img src={props.image} alt='' />
      <h2 className='main-heading'>{props.title}</h2>
      <p>{props.about}</p>
      <OrderButton />
    </div>
  );
};

export default Book;
