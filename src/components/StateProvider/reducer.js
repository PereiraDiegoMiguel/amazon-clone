export const initialState = {
  basket: [],
  user: null,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);


const reducer = (state, action) => {

  switch (action.type) {

    case 'SET_USER':
      return {
        ...state,
        user: action.user
      }

    case 'ADD_TO_BASKET':
      return {
        ...state,
        basket: [...state.basket, action.item],
      }


    case 'REMOVE_FROM_BASKET':

      let cloneBasket = [...state.basket]

      //Check if product exist
      const index = state.basket.findIndex((basketItem) =>
        basketItem.id === action.id);

      if (index >= 0) {
        //Remove
        cloneBasket.splice(index, 1);

      } else {
        console.warn(`Cant remove product (${action.id}) as its not in Basket`)
      }

      return { ...state, basket: cloneBasket }

    default:
      return state;
  }
}

export default reducer;