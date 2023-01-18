import { Container, Grid, Button } from "@mui/material";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY;
console.log('🚀 ~ file: index.jsx:6 ~ UNSPLASH_KEY', UNSPLASH_KEY);

const Products = () => {
  const { products } = useSelector(state => state);
  const dispatch = useDispatch();
  
  console.log(products);


  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await Promise.allSettled
  //       products.map(async product => {
  //         const options = {
  //           method: 'GET',
  //           headers: {
  //             'Accept-Version': 'v1',
  //             'Authorization': `Client-ID ${UNSPLASH_KEY}`
  //           },
  //         };
  //         return fetch(encodeURI(`https://api.unsplash.com/photos/random?query=${product.name}`), options).then(res => res.body);
  //       })
  //     );
  //     const options = {
  //       method: 'GET',
  //       headers: {
  //         'Accept-Version': 'v1',
  //         'Authorization': `Client-ID ${UNSPLASH_KEY}`
  //       },
  //     };
  //     const res2 = await fetch(encodeURI(`https://api.unsplash.com/photos/random?query=mammoth`), options);
  //     console.log(res2);
  //     console.log(response);
  //   }
  //   fetchData();
  // }, []);


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
            <div style={{width: '100%', 'overflow-x': 'clip'}}>
              <img src={product.image} alt={product.name} height='200' style={{'object-fit': 'contain'}} />
            </div>
            <h3>{product.name}</h3>
            <div>Price: ${product.price}</div>
            <div>Stock: {product.inStock}</div>
            <div>Category: {product.category}</div>
            <Button 
              variant="contained" 
              sx={{ marginTop: '1rem' }}
              onClick={() => dispatch({type: 'ADD', payload: product.name})}>
              Add to Cart
            </Button>
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

export default Products;