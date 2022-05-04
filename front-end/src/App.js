import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Products from './pages/Products';
import Register from './pages/Register';
import Checkout from './pages/Checkout';
// import PrivateRoute from './routes/auth';

function App() {
  return (
    <Router>
      <Routes>
        {/* <PrivateRoute /> */}
        <Route path="/register" element={ <Register /> } />
        <Route path="/login" element={ <Login /> } />
        <Route exact path="/" element={ <Navigate replace to="/login" /> } />
        <Route
          path="/customer/products"
          element={ <Products /> }
        />
        <Route path="/customer/checkout" element={ <Checkout /> } />
      </Routes>
    </Router>
  );
}

export default App;
