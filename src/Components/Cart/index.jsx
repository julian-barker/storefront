import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Button, IconButton } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import { Link } from '@tanstack/react-router';

const Cart = () => {
  const { cart } = useSelector(state => state);
  const dispatch = useDispatch();
  
  const total = cart.reduce((acc, item) => acc + ( parseInt(item.price) *parseInt(item.quantity)), 0);
  
  return (
    <div>
      {cart.map((item) => (
        <div key={item.name}>
          <span>{item.name} - {item.quantity}</span>
          <IconButton aria-label="remove" onClick={() => dispatch({ type: 'REMOVE', payload: item })}>
            <DeleteIcon />
          </IconButton>
        </div>
      ))}
      <div id='total'>Total: ${total}</div>
      <RemoveShoppingCartIcon onClick={() => dispatch({ type: 'CLEAR' })} />
      <Link to='/cart'>View Cart</Link>
    </div>
  );
};

export default Cart;