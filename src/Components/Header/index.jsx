import Cart from './Cart';
import { Link } from '@tanstack/react-router';

import "./style.css";

const Header = () => {
  
  return (
    <header className="header">
      <div>
        <img src='../../assets/rainbow-godzilla.png' alt='the e-commerce site logo' height='90px'/>
        <Link to='/'>Shop of Rocks</Link>
        <Cart />
      </div>
      
    </header>
  );
};

export default Header;