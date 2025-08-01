import React, { useState } from 'react';
import ProductList from '../components/ProductList';
import Header from '../components/Header';
import CartDrawer from '../components/CartDrawer';
import ProductDetailsDialog from '../components/ProductDetailsDialog';

const HomePage = ({ mode, onToggleTheme }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <>
      <Header
        onCartClick={() => setIsCartOpen(true)}
        mode={mode}
        onToggleTheme={onToggleTheme}
      />
      <ProductList onView={setSelectedProduct} />
      <CartDrawer open={isCartOpen} onClose={() => setIsCartOpen(false)} />
      {selectedProduct && (
        <ProductDetailsDialog
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </>
  );
};

export default HomePage;
