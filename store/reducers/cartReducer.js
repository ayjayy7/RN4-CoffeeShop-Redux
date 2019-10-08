import { ADD_ITEM, REMOVE_ITEM, CHECKOUT } from "../actions/types";

const initialState = {
  items: [
    {
      drink: "Latte",
      option: "Small",
      quantity: 2
    },
    {
      drink: "Espresso",
      option: "Large",
      quantity: 1
    }
  ]
};
// i replaced the action with type and payload of each action
const cartReducer = (state = initialState, { item, payload }) => {
  switch (action.type) {
    // adding item, checking if the item exsit increase the quantity, if not create a new item
    case ADD_ITEM:
      let item;
      const newItem = state.items.find(
        item => item.drink == payload.drink && item.option == payload.option
      );
      if (newItem) {
        newItem.quantity += 1;
        return {
          ...state,
          items: [...state.items]
        };
      } else {
        newItem.quantity = 1;
        return {
          ...state,
          items: state.items.concat([item])
        };
      }

    // removing item
    case REMOVE_ITEM:
      let deleteItem;
      const newItem = state.items.find(item => item !== item.deleteItem);
      return {
        ...state,
        items: newitems
      };

    // emptying the cart
    case CHECKOUT:
      return {
        ...state,
        items: []
      };

    default:
      return state;
  }
};

export default cartReducer;
