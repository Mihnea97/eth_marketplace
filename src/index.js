import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import App from './components/App';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Account from "./components/routes/account";
import AddProduct from "./components/routes/add-product";
import Home from "./components/routes/home";
import MarketPlace from "./components/routes/marketplace";
import MyProducts from "./components/routes/my-products";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="home" element={<Home />} />
      <Route path="add-product" element={<AddProduct />} />
      <Route path="account" element={<Account />} />
      <Route path="marketplace" element={<MarketPlace />} />
      <Route path="my-products" element={<MyProducts />} />
    </Routes>
  </BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
