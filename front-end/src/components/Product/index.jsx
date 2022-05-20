import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { setCart, removeCart, setPrice } from '../../redux/cartSlice';
import { dataTestId } from '../../utils';

import './styles.scss';

const Product = ({ data, index }) => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.CartSlice);

  return (
    <div className="product-container">
      <p
        className="product-price-content"
        data-testid={ `${dataTestId.id16}${index}` }
      >
        {
          `R$: ${Number(data.price).toFixed(2).toString().replace('.', ',')}`
        }
      </p>
      <img
        className="product-image-content"
        data-testid={ `${dataTestId.id17}${index}` }
        alt="product"
        src={ data.urlImage }
      />
      <p
        className="product-name-content"
        data-testid={ `${dataTestId.id15}${index}` }
      >
        {data.name}
      </p>
      <div className="product-inputs-container">
        <button
          className="product-more-cart-button"
          type="button"
          onClick={ () => dispatch(setCart(data)) }
          data-testid={ `${dataTestId.id18}${index}` }
        >
          +
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
        <button
          className="product-less-cart-button"
          type="button"
          onClick={ () => dispatch(removeCart(data)) }
          data-testid={ `${dataTestId.id19}${index}` }
        >
          -
        </button>
      </div>
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
