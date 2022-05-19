import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { setCart, removeCart, setPrice } from '../../redux/cartSlice';
import { dataTestId } from '../../utils';

const Product = ({ data, index }) => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.CartSlice);

  return (
    <div>
      <p data-testid={ `${dataTestId.id15}${index}` }>{data.name}</p>
      <p data-testid={ `${dataTestId.id16}${index}` }>
        {
          Number(data.price).toFixed(2).toString().replace('.', ',')
        }
      </p>
      <img
        data-testid={ `${dataTestId.id17}${index}` }
        alt="product"
        src={ data.urlImage }
      />
      <button
        type="button"
        onClick={ () => dispatch(setCart(data)) }
        data-testid={ `${dataTestId.id18}${index}` }
      >
        +
      </button>
      <button
        type="button"
        onClick={ () => dispatch(removeCart(data)) }
        data-testid={ `${dataTestId.id19}${index}` }
      >
        -
      </button>
      <label htmlFor={ `${dataTestId.id20}${index}` }>
        <input
          onChange={ (event) => dispatch(setPrice({
            quantity: event.target.value, data,
          })) }
          data-testid={ `${dataTestId.id20}${index}` }
          type="number"
          id={ `${dataTestId.id20}${index}` }
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
