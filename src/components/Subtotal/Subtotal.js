import React from 'react';
import CurrencyFormat from 'react-currency-format';

import './styles.css';
import { useStateValue } from '../StateProvider/StateProvider';
import { getBasketTotal } from '../StateProvider/reducer';


function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  const subtotal = basket.length;


  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({subtotal} items):<strong>{` ${value}`}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This Order contains a gift
            </small>

          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        tousandSeparator={true}
        prefix={'$'}
      />
      <button>Proceed to checkout</button>

    </div>
  )
    ;
}

export default Subtotal;