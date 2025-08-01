import React, { useContext } from 'react';
import {
  Drawer,
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Button,
  Box,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { CartContext } from '../context/CartContext.jsx';
import { useNavigate } from 'react-router-dom';

const CartDrawer = ({ open, onClose }) => {
  const { cart, dispatch } = useContext(CartContext);
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0).toFixed(2);

  const goToCheckout = () => {
    onClose(); // close drawer first
    navigate('/checkout'); // navigate to checkout
  };

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box sx={{ width: 350, p: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
          <Typography variant="h6">Your Cart</Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>

        {cart.length === 0 ? (
          <Typography variant="body1">Your cart is empty.</Typography>
        ) : (
          <>
            <List>
              {cart.map((item) => (
                <ListItem key={item.id}>
                  <ListItemText
                    primary={item.title}
                    secondary={`Qty: ${item.qty} × ₹${item.price.toFixed(2)}`}
                  />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" onClick={() => dispatch({ type: 'REMOVE', id: item.id })}>
                      ✕
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>

            <Typography variant="subtitle1" sx={{ mt: 2 }}>
              Total: ₹{total}
            </Typography>

            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2 }}
              onClick={() => dispatch({ type: 'CLEAR' })}
            >
              Clear Cart
            </Button>

            <Button
              variant="outlined"
              color="success"
              fullWidth
              sx={{ mt: 1 }}
              onClick={goToCheckout}
            >
              Go to Checkout
            </Button>
          </>
        )}
      </Box>
    </Drawer>
  );
};

export default CartDrawer;
