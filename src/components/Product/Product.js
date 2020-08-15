import React from 'react';
import StarIcon from '@material-ui/icons/Star';
import './styles.css';

function Product({ id, title, image, price, rating }) {
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
              .map((_) => (
                <p><StarIcon className="product__star" /></p>
              ))
          }
        </div>
        
      </div>

      <img src={image} alt="Image" />
      <button>Add to basket</button>

    </div>
  );
}

export default Product;