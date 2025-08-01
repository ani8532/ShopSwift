import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../api/productApi';
import {
  Grid,
  CircularProgress,
  Typography,
  TextField,
  Box,
} from '@mui/material';
import ProductCard from './ProductCard.jsx';

const ProductList = ({ onView }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchProducts().then((res) => {
      setProducts(res.data);
      setLoading(false);
    });
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading)
    return <CircularProgress sx={{ display: 'block', m: 'auto', mt: 5 }} />;

  return (
    <>
      <Box sx={{ mt: 2, mb: 2, px: 2 }}>
        <TextField
          fullWidth
          label="Search Products"
          variant="outlined"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Box>

      <Typography variant="h5" sx={{ textAlign: 'center', mb: 2 }}>
        Products
      </Typography>

      <Grid container justifyContent="center">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} onView={onView} />
          ))
        ) : (
          <Typography variant="body1" sx={{ mt: 2 }}>
            No products found.
          </Typography>
        )}
      </Grid>
    </>
  );
};

export default ProductList;
