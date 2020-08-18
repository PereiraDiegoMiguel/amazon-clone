export const initialState = {
  basket: [
    {
      id: "1234",
      title: "The Lean Startup",
      price: 11.90,
      rating: 5,
      image: "https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg",
    },
    {
      id: "655",
      title: "nuber 2",
      price: 13.90,
      rating: 4,
      image: "https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg",
    },
  ],
  user: null,
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {

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