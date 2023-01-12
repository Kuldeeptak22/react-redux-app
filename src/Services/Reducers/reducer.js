// Reducer :- It will push the data(came from action), inside the store.
// We take action type and the data returned from the action.
// We update the state or add new data inside the existing array and then return that state to the store.

import { ADD_TO_CART } from "../Constants";
const initialState = {
  cartData: [],
};
const cardItems = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartData: action.data,
      };
      break;
    default:
      return state;
  }
};
export default cardItems;
