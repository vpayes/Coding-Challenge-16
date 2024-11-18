// Task 1
// npm create vite@latest product-dashboard --template react
// cd product-dashboard
// npm install
// npm run dev

// Task 2
import React, { useState } from 'react';
import ProductList from './ProductList';
import AddProductForm from './AddProductForm';

function App() {
  // Products
  const [products, setProducts] = useState([
    { id: 1, name: 'Purse', price: '$500', description: 'A high quality purse.' },
    { id: 2, name: 'Wallet', price: '$200', description: 'A high quality wallet.' },
    { id: 3, name: 'Backpack', price: '$800', description: 'A high quality backpack.' },
  ]);

  // New Product
  const addProduct = (newProduct) => {
    setProducts((prevProducts) => [
      ...prevProducts,
      { id: prevProducts.length + 1, ...newProduct },
    ]);
  };

  return (
    <div className="App">
      <h1>Product Dashboard</h1>
      <AddProductForm addProduct={addProduct} />
      <ProductList products={products} />
    </div>
  );
}

export default App;