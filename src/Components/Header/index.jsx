import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Button, Popover, IconButton } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';

import "./style.css";

const Header = () => {
  const { cart } = useSelector(state => state);
  const dispatch = useDispatch();
  
  const [anchorEl, setAnchorEl] = useState(null);
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  
  const cartKeys = Object.keys(cart);
  
  return (
    <header className="header">
      <div>
        <img src='../../assets/rainbow-godzilla.png' alt='the e-commerce site logo' height='90px'/>
        <h1>Shop of Rocks</h1>
        <div>
          <Button aria-describedby={id} variant="contained" onClick={handleClick}>
            <ShoppingCartIcon /><span>{cartKeys.length}</span>
          </Button>
          <Popover 
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            {cartKeys.map((item) => (
              <div key={item}>
                <span>{item} - {cart[item]}</span>
                <IconButton aria-label="remove" onClick={() => dispatch({ type: 'REMOVE', payload: item })}>
                  <DeleteIcon />
                </IconButton>
              </div>
            ))}
            <RemoveShoppingCartIcon onClick={() => dispatch({ type: 'CLEAR' })} />
          </Popover>  
        </div>
      </div>
      
    </header>
  );
};

export default Header;