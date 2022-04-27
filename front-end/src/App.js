import React from 'react';

// import { Redirect } from 'react-router';

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Login from './pages/Login';

function App() {
  return (
    <Router>
      <Routes>
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
      </Routes>
    </Router>
  );
}

export default App;
