
const initialState = [];

export default function reducer(state = initialState, action) {
  let { type, payload } = action;

  switch (type) {
    case 'ADD':
      const cartItem = state.find(item => item.name === payload.name);
      console.log('🚀 ~ file: cart.js:10 ~ reducer ~ cartItem', cartItem);
      if(cartItem) {
        console.log('🚀 ~ file: cart.js:12 ~ reducer ~ cartItem', cartItem);
        const newCart = state.map(item => {
          if(item.name === payload.name) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });
        return newCart;
      }
      delete payload.inStock;
      delete payload.category;
      payload.quantity = 1;
      return [ ...state, payload];
    case 'REMOVE':
      return state.filter(item => item.name !== payload.name);
    case 'CLEAR':
      return initialState;
    default:
      return state;
  }
}