import React, { createContext, useReducer, useEffect } from 'react';

export const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      const existing = state.find(p => p.id === action.product.id);
      if (existing) {
        return state.map(p =>
          p.id === action.product.id ? { ...p, qty: p.qty + 1 } : p
        );
      }
      return [...state, { ...action.product, qty: 1 }];
    case 'REMOVE':
      return state.filter(p => p.id !== action.id);
    case 'CLEAR':
      return [];
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, JSON.parse(localStorage.getItem('cart')) || []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
