import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import modalReducer from './modal/modal.reducer';
import cartReducer from './cart/cart.reducer';
import shopReducer from './shop/shop.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
}

const rootReducer = combineReducers({
  cartModal: modalReducer,
  cart: cartReducer,
  shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer);