import React from 'react';

// import { useSelector } from 'react-redux';
import { useFormik } from 'formik';

// import { OrderRequest } from '../../../redux/requestThunks/orderRequest';

const DetailsAndDeliveryAddressForm = () => {
  // const auth = useSelector((state) => state.UserSlice.auth);
  // const { cart } = useSelector((state) => state.CartSlice);

  const formik = useFormik({
    initialValues: {
      sellerId: 2,
      deliveryAdress: '',
      deliveryNumber: '',
    },
    /* validate: (values) => {
      setError(false);
      const { error } = loginSchema.validate(values);
      if (error) {
        return setAble(true);
      }
      setAble(false);
    }, */
    onSubmit: (values) => {
      console.log(values);
      // const { token } = JSON.parse(localStorage.getItem('user'));
      // const newDate = new Date();
      // const arrayCart = Object.keys(cart);
      // const newCartArray = [];
      // arrayCart.map((item) => {
      //   newCartArray.push({ ...cart[item] });
      // });
      // // console.log(newCartArray);
      // // console.log(arrayCart);
      // if (token) {
      //   // console.log({ userId: auth.userId, ...values, token, newDate });
      //   // setStatus('');
      // }
      // // dispatch(OrderRequest(values));
    },
  });

  return (
    <form onSubmit={ formik.handleSubmit }>
      <label htmlFor="seller">
        Para Vendedora Responsável:
        <select
          data-testid="customer_checkout__select-seller"
          name="seller"
          id="seller"
        >
          <option value="Fulano Alves">Fulado Alves</option>
        </select>
      </label>
      <label htmlFor="adress">
        Endereço
        <input
          type="text"
          id="adress"
          placeholder="Rua 29 de Abril"
          data-testid="customer_checkout__input-address"
          { ...formik.getFieldProps('deliveryAdress') }
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
