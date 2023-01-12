// This is Action: - It will send our data from react component or API data to store.
// It will send the type of data and the data.
import { ADD_TO_CART } from "../Constants";
export const addToCart = (data) => {
  return {
    type: ADD_TO_CART,
    data: data,
  };
};
