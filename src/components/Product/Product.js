import React from 'react';
import StarIcon from '@material-ui/icons/Star';
import { useStateValue } from '../StateProvider/StateProvider';
import './styles.css';

function Product({ id, title, image, price, rating }) {

  const [ dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id,
        title,
        image,
        price,
        rating,
      }
    })
  }

  return (
    <div className="product">

      <div className="product__info">

        <p>{title}</p>

        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className="product__rating">
          {
            Array(rating).fill()
              .map((index) => (
                <p key={index}><StarIcon className="product__star" /></p>
              ))
          }
        </div>

      </div>

      <img src={image} alt="ImageLost" />

      <button onClick={addToBasket}>Add to basket</button>

    </div>
  );
}

export default Product;