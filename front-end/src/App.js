import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import {
  AdminPage,
  Checkout,
  DetailsOrder,
  Login,
  NotFound,
  Orders,
  Products,
  Register,
  SellerDetails,
  SellerPage,
} from './pages';

import PrivateRoute from './routes/auth';

import './app.scss';

function App() {
  return (
    <Router>
      <Routes>

        <Route element={ <PrivateRoute Urole="administrator" /> }>
          <Route exact path="/admin/manage" element={ <AdminPage /> } />
        </Route>

        <Route element={ <PrivateRoute Urole="seller" /> }>
          <Route exact path="/seller/orders" element={ <SellerPage /> } />
          <Route exact path="/seller/orders/:id" element={ <SellerDetails /> } />
        </Route>

        <Route element={ <PrivateRoute Urole="customer" /> }>
          <Route exact path="/customer/products" element={ <Products /> } />
          <Route exact path="/customer/checkout" element={ <Checkout /> } />
          <Route exact path="/customer/orders" element={ <Orders /> } />
          <Route exact path="/customer/orders/:orderId" element={ <DetailsOrder /> } />
        </Route>

        <Route path="*" element={ <NotFound /> } />
        <Route exact path="/register" element={ <Register /> } />
        <Route exact path="/login" element={ <Login /> } />
        <Route exact path="/" element={ <Navigate replace to="/login" /> } />
        <Route path="" exact element={ <Navigate replace to="/login" /> } />
      </Routes>
    </Router>
  );
}

export default App;
