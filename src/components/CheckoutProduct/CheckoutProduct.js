import React from 'react';
import StarIcon from '@material-ui/icons/Star';
import { useStateValue } from '../StateProvider/StateProvider';

import "./styles.css"

function CheckoutProduct({ id, title, image, price, rating }) {

  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    })

  }

  return (

    <div className="checkoutProduct">
      <img
        className="checkoutProduct__image"
        src={image}
        alt="Image"
      />

      <div className="checkoutProduct__info">

        <p className="checkoutProduct__title">{title}</p>

        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className="product__rating">
          {
            Array(id, rating).fill()
              .map((stars) => (

                <p ><StarIcon className="product__star" /></p>
              ))
          }
        </div>

        <button onClick={removeFromBasket}>Remove From Basket</button>

      </div>
    </div >
  );
}

export default CheckoutProduct;