import { Container, Grid, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";

const Products = () => {
  const { products } = useSelector(state => state);
  const dispatch = useDispatch();
  
  function addToCart(product) {
    dispatch({ type: 'ADD', payload: product });
  } 

  return (
    <Container>
      <Grid container 
        spacing={{ md: 1 }} 
        columns={{ xs: 4, sm: 8, md: 12 }} 
        sx={{
          padding: '2rem 0',
        }}>
        {products.map((product) => 
          <Grid item xs={2} sm={3} md={3} 
            key={product.name}
            sx={{
              border: '1px solid black',
              borderRadius: '5px',
              padding: '10px',
              margin: '1rem',
              backgroundColor: 'gray',
            }}>
            <div style={{width: '100%', 'overflowX': 'clip'}}>
              <img src={product.image} alt={product.name} height='200' style={{'objectFit': 'contain'}} />
            </div>
            <h3>{product.name}</h3>
            <div>Price: ${product.price}</div>
            <div>Stock: {product.inStock}</div>
            <div>Category: {product.category}</div>
            <Button 
              variant="contained" 
              sx={{ marginTop: '1rem' }}
              onClick={() => addToCart(product)}>
              Add to Cart
            </Button>
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

export default Products;