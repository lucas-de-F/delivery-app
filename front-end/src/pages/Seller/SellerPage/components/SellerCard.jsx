import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

import { dataTestId } from '../../../../utils';

const SellerCard = () => {
  const orders = useSelector((state) => state.OrderSlice.orders);
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/seller/orders/${id}`, { replace: true });
  };

  return (
    <ul>
      {
        orders.map((
          {
            id,
            status,
            saleDate,
            totalPrice,
            deliveryAddress,
          }, i,
        ) => (
          <button key={ `key-${i}` } type="button" onClick={ () => handleClick(id) }>
            <li data-testid={ `${dataTestId.id48}${id}` }>
              { id }
            </li>
            <li data-testid={ `${dataTestId.id49}${id}` }>
              { status }
            </li>
            <li data-testid={ `${dataTestId.id50}${id}` }>
              { saleDate }
            </li>
            <li data-testid={ `${dataTestId.id51}${id}` }>
              { totalPrice }
            </li>
            <li data-testid={ `${dataTestId.id52}${id}` }>
              { deliveryAddress }
            </li>
          </button>
        ))
      }
    </ul>
  );
};

export default SellerCard;
