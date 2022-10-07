import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";

import React from "react";

const App = () => (
  <Router>
    <Content />
  </Router>
);

const Content = () => (
  <Routes>
    <Route exact path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/product" element={<Product />} />
    <Route path="/productList" element={<ProductList />} />
    <Route path="/cart" element={<Cart />} />
  </Routes>
);

export default App;

{
  /* <Routes>
<Home />
<Route path="/" element={<Home />} />
<Route path="/login" element={<Login />} />
<Route path="/register" element={<Register />} />
<Route path="/product" element={<Product />} />
<Route path="/productList" element={<ProductList />} />
<Route path="/cart" element={<Cart />} />
</Routes> */
}
