import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import Login from './pages/Login';
import Products from './pages/Products';
import Register from './pages/Register';
import Checkout from './pages/Checkout';
import Orders from './pages/Orders';
import SellerPage from './pages/Seller';

// import DetailsOrder from './pages/DetailsOrder';
// import PrivateRoute from './routes/auth';

import './css.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* <PrivateRoute /> */}
        <Route exact path="/customer/products" element={ <Products /> } />
        <Route exact path="/customer/checkout" element={ <Checkout /> } />
        <Route exact path="/customer/orders" element={ <Orders /> } />
        <Route exact path="/seller/orders" element={ <SellerPage /> } />
        {/* <Route exact path="/customer/
        orders/:orderId" element={ <DetailsOrder /> } /> */}
        <Route exact path="/register" element={ <Register /> } />
        <Route exact path="/login" element={ <Login /> } />
        <Route exact path="/" element={ <Navigate replace to="/login" /> } />
      </Routes>
    </Router>
  );
}

export default App;
