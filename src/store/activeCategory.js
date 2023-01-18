
const initialState = 'all';

export default function reducer(state = initialState, action) {
  let { type, payload } = action;

  switch (type) {
    case 'CHANGE':
      return payload;
    case 'RESET':
      return initialState;
    default:
      return state;
  }
};