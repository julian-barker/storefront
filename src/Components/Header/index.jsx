import Cart from './Cart';

import "./style.css";

const Header = () => {
  
  return (
    <header className="header">
      <div>
        <img src='../../assets/rainbow-godzilla.png' alt='the e-commerce site logo' height='90px'/>
        <h1>Shop of Rocks</h1>
        <Cart />
      </div>
      
    </header>
  );
};

export default Header;