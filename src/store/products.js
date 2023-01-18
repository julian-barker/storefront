
const initialState = [
  { name: 'Purple Geode', category: 'geodes', price: 699.00, inStock: 30 },
  { name: 'Green Geode', category: 'geodes', price: 99.00, inStock: 15 },
  { name: 'Ruby', category: 'gemstones', price: 9.00, inStock: 6 },
  { name: 'Megaladon Tooth', category: 'fossils', price: 12.00, inStock: 10 },
  { name: 'Trilobyte', category: 'fossils', price: .99, inStock: 42 },
  { name: 'Mammoth Tusk', category: 'fossils', price: 1.99, inStock: 3 },
  { name: 'Obsidian', category: 'rocks', price: 2.39, inStock: 90 },
];

export default function reducer(state = initialState, action) {
  let { type, payload } = action;

  switch (type) {
    case 'CHANGE':
      return initialState.filter(product => product.category === payload);
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}