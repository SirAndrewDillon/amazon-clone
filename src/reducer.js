export const initialState = {
  basket: [{
    
  }],
  user: null,
};

const reducer = (state, action) => {
    console.log(action);
  switch (action.type) {
    case "ADD TO BASKET":
      // lOGIC FOR ADDING ITEM TO BASKET 
      return {
          ...state,
          basket: [...state.basket, action.item],
      }
    case "REMOVE FROM BASKET":
      //LOGIC FOR REMOVING ITEM FROM BASKET
      return {state}
    default:
      return state;
  }
}

export default reducer
