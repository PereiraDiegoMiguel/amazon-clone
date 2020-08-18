import React from 'react';
import { useStateValue } from '../StateProvider/StateProvider';
import './styles.css';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import Subtotal from '../Subtotal/Subtotal';
import CurrencyFormat from 'react-currency-format';


function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonPay/LPAOffers/April/Prime/Store/V2/LPA501_1500x250.jpg"
          alt="image"
        />

        {basket?.length === 0 ? (
          <div className="checkout__status">
            <h2 className="checkout__title">Your Basket is empty!</h2>
            <p>
              You have no items in your basket. To
              buy one, click in "Add to basket"
              next to the item.
          </p>
          </div>

        ) : (
            <div>
              <h2 className="checkout__title">
                Your Shopping Basket
              </h2>

              {basket?.map((item) => (
                <CheckoutProduct key={item.id}
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />

              ))}

            </div>
          )}

      </div>

      {
        basket.length > 0 && (
          <div className="checkout__right">
            <Subtotal />
          </div>
        )
      }


    </div>
  )

}

export default Checkout;