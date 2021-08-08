import React, { useState } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar.js';
import Home from './Home.js';
import About from './About.js';
import Products from './Products.js';
import ProductDetails from './ProductDetails.js';
import Cart from './Cart.js';

function App() {
  const [cart, setCart] = useState([]);

  const handleProductAdd = (newProduct) => {
    console.log('Adding product ' + newProduct.id);
  };

  const handleProductDelete = (id) => {
    console.log('Deleting product ' + id);
  };

  return (
    <BrowserRouter>
      <Navbar cart={cart} />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/products">
            <Products
              cart={cart}
              onProductAdd={handleProductAdd}
              onProductDelete={handleProductDelete}
            />
          </Route>
          <Route path="/products/:id">
            <ProductDetails onProductAdd={handleProductAdd} />
          </Route>
          <Route exact path="/cart">
            <Cart cart={cart} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

render(<App />, document.querySelector('#react-root'));
