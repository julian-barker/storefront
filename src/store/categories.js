
const initialState = [
  { name: 'fossils', displayName: 'Fossils' },
  { name: 'gemstones', displayName: 'Gemstones' },
  { name: 'geodes', displayName: 'Geodes' },
  { name: 'rocks', displayName: 'Rocks' },
];


export default function reducer(state = initialState, action) {
  let { type, payload } = action;

  switch (type) {
    case 'CHANGE':
      return state;
    default:
      return state;
  }
};
