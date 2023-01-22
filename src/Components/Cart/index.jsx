import { useSelector, useDispatch } from "react-redux";
import { IconButton, Container } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import { Link } from '@tanstack/react-router';

import './style.css';

const Cart = () => {
  const { cart } = useSelector(state => state);
  const dispatch = useDispatch();
  
  const total = cart.reduce((acc, item) => acc + ( parseInt(item.price) *parseInt(item.quantity)), 0);
  
  return (
    <div>
      <h2>Your Cart</h2>
      <Container>
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Quantity</th>
              <th>Unit Price</th>
              <th>Total Price</th>
              <th>Remove</th>
            </tr>
          </thead>
          {cart.map((item) => (
            <tr key={item.name}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>${item.price}</td>
              <td>${parseInt(item.price) *parseInt(item.quantity)}</td>
              <td>
                <IconButton aria-label="remove" onClick={() => dispatch({ type: 'REMOVE', payload: item })}>
                  <DeleteIcon />
                </IconButton>
              </td>
            </tr>
          ))}
        </table>
        <hr />
        <div id='total'>Total: ${total}</div>
        
        <RemoveShoppingCartIcon onClick={() => dispatch({ type: 'CLEAR' })} />
        <Link to='/cart'>Checkout</Link>
      </Container>
    </div>
  );
};

export default Cart;