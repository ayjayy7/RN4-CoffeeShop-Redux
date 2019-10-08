import axios from "axios";
import * as actionTypes from "./types";

export const getCoffeeShops = () => {
  return async dispatch => {
    dispatch(setCoffeeShopsLoading());
    try {
      const res = await axios.get("http://178.128.114.232/api/?format=json");
      const coffeeShops = res.data;
      dispatch({
        type: actionTypes.GET_COFFEESHOPS,
        payload: coffeeShops
      });
    } catch (err) {
      console.error("Error while fetching shops", err);
    }
  };
};

export const setCoffeeShopsLoading = () => ({
  type: actionTypes.COFFEESHOPS_LOADING
});

// adding new items to cart
export const addItemToCart = item => ({
  type: actionTypes.ADD_ITEM,
  payload: item
});
// removing items
export const removeItemFromCart = item => ({
  type: actionTypes.REMOVE_ITEM,
  payload: item
});
// checkedout items
export const checkoutCart = item => ({
  type: actionTypes.CHECKOUT
});
