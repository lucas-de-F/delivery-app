import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { productsRequest } from '../../redux/requestThunks/productsRequest';
import { setCartByInput } from '../../redux/cartSlice';

import Header from '../../components/Header';
import Product from '../../components/Product';
import CartButton from './components/CartButton';

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.ProductsSlice.products);
  const { cart } = useSelector((state) => state.CartSlice);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      dispatch(productsRequest(token));
    }
  }, [dispatch]);

  useEffect(() => {
    dispatch(setCartByInput(cart));
  }, [cart, dispatch]);

  return (
    <div>
      <Header />
      <CartButton />
      <div>
        { !products ? 'loading' : products
          .map((item, i) => <Product data={ item } key={ i } index={ i } />)}
      </div>
    </div>
  );
};

export default Products;
