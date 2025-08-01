import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
  Rating
} from '@mui/material';

const ProductDetailsDialog = ({ product, onClose }) => {
  return (
    <Dialog open={Boolean(product)} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>{product.title}</DialogTitle>
      <DialogContent>
        <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={2}>
          <Box
            component="img"
            src={product.image}
            alt={product.title}
            sx={{ maxWidth: 200, maxHeight: 200, objectFit: 'contain', mx: 'auto' }}
          />
          <Box>
            <Typography variant="body1" paragraph>{product.description}</Typography>
            <Typography variant="body2" color="text.secondary">
              Category: {product.category}
            </Typography>
            <Box mt={1}>
              <Rating value={product.rating?.rate || 0} precision={0.1} readOnly />
              <Typography variant="caption">
                {product.rating?.count || 0} reviews
              </Typography>
            </Box>
            <Typography variant="h6" mt={2}>
              ₹{product.price}
            </Typography>
          </Box>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProductDetailsDialog;
