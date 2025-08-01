import React, { useContext } from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActions,
} from '@mui/material';
import { CartContext } from '../context/CartContext';

const ProductCard = ({ product, onView }) => {
  const { dispatch } = useContext(CartContext);

  const addToCart = () => {
    dispatch({ type: 'ADD', product });
  };

  return (
    <Card sx={{ maxWidth: 300, m: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <CardMedia
        component="img"
        image={product.image}
        alt={product.title}
        sx={{ height: 200, objectFit: 'contain', mt: 2 }}
      />
      <CardContent>
        <Typography variant="subtitle1" noWrap>{product.title}</Typography>
        <Typography variant="h6" color="text.secondary">₹{product.price}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => onView(product)}>View</Button>
        <Button size="small" onClick={addToCart}>Add to Cart</Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
