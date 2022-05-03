import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { productsRequest } from '../../redux/requestThunks/productsRequest';
import Header from '../../components/Header';
import Product from '../../components/Product';

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.ProductsSlice.products);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      dispatch(productsRequest(token));
    }
  }, [dispatch]);

  return (
    <div>
      <Header />
      <div>
        { !products ? 'loading' : products
          .map((item, i) => <Product data={ item } key={ i } index={ i + 1 } />)}
      </div>
    </div>
  );
};

export default Products;
