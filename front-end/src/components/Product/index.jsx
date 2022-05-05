import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
// import { useFormik } from 'formik';

import { setCart, removeCart, setCartByInput } from '../../redux/cartSlice';

const Product = ({ data, index }) => {
  const dispatch = useDispatch();

  /* const formik = useFormik({
    initialValues: {
      data: {},
    },
    validate: (values) => {
      const { error } = loginSchema.validate(values);
      if (error) {
        return setAble(true);
      }
      setAble(false);
    },
    onSubmit: (values) => {
      dispatch(getToken(values));
    },
  }); */

  return (
    <div>
      <p data-testid={ `customer_products__element-card-title-${index}` }>{data.name}</p>
      <p data-testid={ `customer_products__element-card-price-${index}` }>{data.price}</p>
      <img
        data-testid={ `customer_products__img-card-bg-image-${index}` }
        alt="product"
        src={ data.urlImage }
      />
      <button
        type="button"
        onClick={ () => dispatch(setCart(data)) }
        data-testid={ `customer_products__button-card-add-item-${index}` }
      >
        +
      </button>
      <button
        type="button"
        onClick={ () => dispatch(removeCart(data)) }
        data-testid={ `customer_products__button-card-rm-item-${index}` }
      >
        -
      </button>
      <label htmlFor={ `customer_products__input-card-quantity-${index}` }>
        <input
          onChange={ (event) => dispatch(setCartByInput({ value: event.target.value,
            data })) }
          data-testid={ `customer_products__input-card-quantity-${index}` }
          type="text"
        />
      </label>
    </div>
  );
};

export default Product;

Product.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.string,
    urlImage: PropTypes.string,
  }).isRequired,
  index: PropTypes.number.isRequired,
};
