export const initialState = {
  basket: [
    {
      id: "ayo7nv5t5vy",
      title:
        "Air Jordan 1 Chicago Mid White Heel Toe Black Red Retro 554724-173",
      price: 146.99,
      rating: 5,
      image:
        "https://images.restocks.eu/products/554275-173%20-%20554725-173/air-jordan-1-mid-chicago-2020-gs-1-1000.png",
    },
    {
      id: "ayo7nv5t5vy",
      title:
        "Air Jordan 1 Chicago Mid White Heel Toe Black Red Retro 554724-173",
      price: 146.99,
      rating: 5,
      image:
        "https://images.restocks.eu/products/554275-173%20-%20554725-173/air-jordan-1-mid-chicago-2020-gs-1-1000.png",
    },
  ],
  user: null,
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      // lOGIC FOR ADDING ITEM TO BASKET
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      //LOGIC FOR REMOVING ITEM FROM BASKET

      // CLONED THE BASKET
      let newBasket = [...state.basket];

      // CHECKED TO SEE IF PRODUCT EXISTS
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      if (index >= 0) {
        // IF ITEM EXISTS, REMOVE IT
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cannot remove product (id: ${action.id}) as it is not in the cart.`
        );
      }
      return {
        ...state,
        basket: newBasket,
      };
    default:
      return state;
  }
};

export default reducer;
