import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { productsRequest } from '../../../redux/requestThunks/productsRequest';
import { setCartByInput } from '../../../redux/cartSlice';
import { setStatus } from '../../../redux/userSlice';

import { Header, Product } from '../../../components';
import CartButton from './components/CartButton';

import './styles.scss';

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.ProductsSlice.products);
  const { cart } = useSelector((state) => state.CartSlice);

  useEffect(() => {
    try {
      const { token } = JSON.parse(localStorage.getItem('user'));
      if (token) {
        dispatch(productsRequest(token));
        setStatus('');
      }
    } catch (err) {
      return err;
    }
  }, [dispatch]);

  useEffect(() => {
    dispatch(setCartByInput(cart));
  }, [cart, dispatch]);

  return (
    <div className="products-container">
      <Header />
      <CartButton />
      <div className="products-list-container">
        { !products ? 'loading' : products
          .map((item, i) => <Product data={ item } key={ i } index={ i + 1 } />)}
      </div>
    </div>
  );
};

export default Products;
