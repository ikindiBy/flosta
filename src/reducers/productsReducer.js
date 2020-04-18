import { products } from '../constants/data';

const initialProducts = products.map(item => ({
    ...item,
    inBasket: false,
    quantityInBasket: 0,
}));

const initialState = {
  products: initialProducts,
  productsInBasket: [],
}

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_BASKET':
        return {
          products: state.products.map(
            item => item.productId === action.id ? {...item, inBasket: !item.inBasket, quantityInBasket: 1} : item
            ),
          // productsInBasket: [
          //   ...state.productsInBasket,
          //   state.products.filter(item => item.productId === action.id)[0],
          // ]
        }
      case 'REMOVE_FROM_BASKET':
          return {
            products: state.products.map(
              item => item.productId === action.id ? {...item, inBasket: !item.inBasket} : item
              ),
            // productsInBasket: [
            //   ...state.productsInBasket.filter(item => item.productId !== action.id),
            // ]
          }
        
      case 'CHANGE_QUANTITY_IN_BASKET':
        // console.log('______action_', action);
          return {
            ...state,
            products: state.products.map(
              item => item.productId === action.id ? {...item, quantityInBasket: action.quantity} : item
              ),
          }
      default:
        return state
    }
  }
  
  export default productsReducer;