import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { setCart, removeCart, setPrice } from '../../redux/cartSlice';

const Product = ({ data, index }) => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.CartSlice);

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
          onChange={ (event) => dispatch(setPrice({
            quantity: event.target.value, data,
          })) }
          data-testid={ `customer_products__input-card-quantity-${index}` }
          type="number"
          id={ `customer_products__input-card-quantity-${index}` }
          value={ !cart[data.name]?.quantity ? 0 : cart[data.name]?.quantity }
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
