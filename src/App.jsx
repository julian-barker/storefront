import { useState } from 'react'
import Products from './Components/Products'
import Header from './Components/Header'
import Categories from './Components/Categories';

import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Categories />
      <Products />
    </>
  );
}

export default App
