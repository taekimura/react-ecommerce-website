import CartActionTypes from './cart.types';

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
});

export const removeItem = (item) => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item
});

export const clearItemFromCart = (item) => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item
});

export const clearCart = () => ({
  type: CartActionTypes.CLEAR_CART
});

export const purchaseSuccess = () => ({
  type: CartActionTypes.ON_PURCHASE_SUCCESS
});

export const purchaseFailure = (errorMessage) => ({
  type: CartActionTypes.ON_PURCHASE_FAILURE,
  payload: errorMessage
});
