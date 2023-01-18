
const initialState = {};

export default function reducer(state = initialState, action) {
  let { type, payload } = action;

  switch (type) {
    case 'ADD':
      return { ...state, [payload]: (state[payload] || 0) + 1 };
    case 'REMOVE':
      const newState = { ...state };
      delete newState[payload];
      return newState;
    case 'CLEAR':
      return initialState;
    default:
      return state;
  }
}