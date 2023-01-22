import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Button, Popover, IconButton } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import { Link } from '@tanstack/react-router';

const Cart = () => {
  const { cart } = useSelector(state => state);
  const dispatch = useDispatch();
  
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  const total = cart.reduce((acc, item) => acc + ( parseInt(item.price) *parseInt(item.quantity)), 0);
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button aria-describedby={id} variant="contained" onClick={handleClick}>
        <ShoppingCartIcon /><span>{cart.length}</span>
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
        // sx={{
        //   display: 'flex',
        //   width: 500,
        //   p: 2,
        //   mx: 0.5
        // }}
      >
        {cart.map((item) => (
          <div key={item._id}>
            <span>{item.name} - qty: {item.quantity}
              <IconButton aria-label="remove" onClick={() => dispatch({ type: 'REMOVE', payload: item })}>
                <DeleteIcon />
              </IconButton>
            </span>
          </div>
        ))}
        <div id='total'>Total: ${total}</div>
        <RemoveShoppingCartIcon onClick={() => dispatch({ type: 'CLEAR' })} />
        <Link to='/cart' onClick={handleClose} >View Cart</Link>
      </Popover>  
    </div>
  );
};

export default Cart;