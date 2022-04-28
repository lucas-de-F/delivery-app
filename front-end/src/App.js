import React from 'react';

// import { Redirect } from 'react-router';

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Login from './pages/Login';
import Products from './pages/Products';
import Register from './pages/Register';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/register"
          element={ <Register /> }
        />
        <Route
          path="/login"
          element={ <Login /> }
        />
        <Route
          path="/"
          element={
            <Navigate
              replace
              to="/login"
            />
          }
        />
        <Route
          path="/customer/products"
          element={ <Products /> }
        />
      </Routes>
    </Router>
  );
}

export default App;
