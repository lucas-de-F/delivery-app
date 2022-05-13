import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';

import { useFormik } from 'formik';
import { setStatus } from '../../../redux/userSlice';
import { getSellers } from '../../../redux/requestThunks/sellersRequest';

import { CreateOrderRequestThunk } from '../../../redux/requestThunks/orderRequest';

const DetailsAndDeliveryAddressForm = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.UserSlice.auth);
  const { sellers } = useSelector((state) => state.SellersSlice);
  const { cart, totalPrice } = useSelector((state) => state.CartSlice);
  const { orderId } = useSelector((state) => state.OrderSlice);

  const navigate = useNavigate();

  const [sellerId, setSellerId] = useState(2);

  useEffect(() => {
    if (orderId) {
      navigate(`/customer/orders/${orderId}`);
    }
    dispatch(getSellers(auth));
  }, [auth, dispatch, navigate, orderId]);

  const formik = useFormik({
    initialValues: {
      deliveryAddress: '',
      deliveryNumber: '',
    },
    onSubmit: (values) => {
      const { token } = JSON.parse(localStorage.getItem('user'));
      const newDate = new Date();
      const arrayCart = Object.keys(cart);
      const newCartArray = [];
      arrayCart.forEach((item) => {
        newCartArray.push({ ...cart[item] });
      });
      const mappedCartArray = newCartArray.map((item) => {
        delete item.price;
        return item;
      });
      if (token) {
        const params = {
          userId: auth.userId,
          sellerId,
          totalPrice: Number(totalPrice.split(',').join('.')),
          ...values,
          saleDate: new Date(newDate).toString(),
          products: mappedCartArray,
          token,
        };
        console.log(params);
        dispatch(CreateOrderRequestThunk(params))
          .then(unwrapResult).then().catch((e) => console.log(e));
        setStatus('');
      }
    },
  });

  return (
    <form onSubmit={ formik.handleSubmit }>
      <label htmlFor="seller">
        Para Vendedora Responsável:
        <select
          data-testid="customer_checkout__select-seller"
          name="sellerId"
          id="sellerId"
          value={ sellerId }
          onChange={ (event) => setSellerId(event.target.value) }
        >
          {/* <option disabled>Selecione um vendedor</option> */}
          { !sellers ? <option>No option</option> : sellers
            .map((item, i) => (
              <option
                key={ i }
                value={ item.id }
              >
                { item.name }
              </option>
            )) }
        </select>
      </label>
      <label htmlFor="adress">
        Endereço
        <input
          type="text"
          id="adress"
          placeholder="Rua 29 de Abril"
          data-testid="customer_checkout__input-address"
          { ...formik.getFieldProps('deliveryAddress') }
        />
      </label>
      <label htmlFor="number-adress">
        Número
        <input
          type="text"
          id="number-adress"
          placeholder="302"
          data-testid="customer_checkout__input-addressNumber"
          { ...formik.getFieldProps('deliveryNumber') }
        />
      </label>
      <button
        data-testid="customer_checkout__button-submit-order"
        type="submit"
      >
        FINALIZAR PEDIDO
      </button>
    </form>
  );
};

export default DetailsAndDeliveryAddressForm;
