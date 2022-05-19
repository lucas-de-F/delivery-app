import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { UpdateOrderRequestThunk } from '../../../../redux/requestThunks/orderRequest';

function ButtonStatus(data) {
  const [orderStatus, setOrderStatus] = useState(false);
  const { token } = JSON.parse(localStorage.getItem('user'));
  const { dataId, title, status, id } = data;

  const dispatch = useDispatch();

  const orderStatusState = useSelector((state) => state.OrderSlice.status);

  const verifyStatus = (s, t) => {
    if (s && s === 'Pendente' && t === 'SAIU PARA ENTREGA') {
      setOrderStatus(true);
    }

    if (s && s !== 'Pendente') {
      if (s === 'Preparando' && t.includes('PREPARAR PEDIDO')) {
        setOrderStatus(true);
      }

      if (s === 'Em Trânsito' || s === 'Entregue') {
        setOrderStatus(true);
      }
    }
  };

  const handleClick = (n) => {
    if (status) {
      if (n.includes('PREPARAR PEDIDO')) {
        dispatch(UpdateOrderRequestThunk({ token, id, deliveryStatus: 'Preparando' }));
        setOrderStatus(true);
        return;
      }

      dispatch(UpdateOrderRequestThunk({ token, id, deliveryStatus: 'Em Trânsito' }));
      setOrderStatus(true);
    }
  };

  useEffect(() => {
    verifyStatus(status, title);
  }, [orderStatusState, status, title, token]);

  return (
    <button
      type="button"
      data-testid={ `${dataId}` }
      onClick={ () => {
        handleClick(title);
      } }
      disabled={ orderStatus }
    >
      { title }
    </button>
  );
}

export default ButtonStatus;
