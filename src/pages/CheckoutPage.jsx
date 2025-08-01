import React, { useContext } from 'react';
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Divider,
  Button,
  Box,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { CartContext } from '../context/CartContext.jsx';
import { useNavigate } from 'react-router-dom';

const CheckoutPage = () => {
  const { cart, dispatch } = useContext(CartContext);
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.qty * item.price, 0).toFixed(2);

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>Checkout</Typography>

      {cart.length === 0 ? (
        <>
          <Typography>Your cart is empty.</Typography>
          <Button variant="contained" onClick={() => navigate('/')}>Back to Shop</Button>
        </>
      ) : (
        <>
          <List>
            {cart.map(item => (
              <React.Fragment key={item.id}>
                <ListItem>
                  <ListItemText
                    primary={`${item.title} × ${item.qty}`}
                    secondary={`₹${item.price.toFixed(2)} each`}
                  />
                  <IconButton onClick={() => dispatch({ type: 'REMOVE', id: item.id })}>
                    <DeleteIcon />
                  </IconButton>
                </ListItem>
                <Divider />
              </React.Fragment>
            ))}
          </List>

          <Typography variant="h6" sx={{ mt: 2 }}>
            Total: ₹{total}
          </Typography>

          <Box mt={3} display="flex" gap={2}>
            <Button variant="outlined" onClick={() => navigate('/')}>Continue Shopping</Button>
            <Button variant="contained" color="primary">Place Order</Button>
          </Box>
        </>
      )}
    </Container>
  );
};

export default CheckoutPage;
