import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { UpdateOrderRequestThunk } from '../../../redux/requestThunks/orderRequest';

function ButtonStatus(data) {
  const { dataId, title, status, id, name } = data;

  const [buttonDisabled, setButtonDisabled] = useState(false);

  const { token } = JSON.parse(localStorage.getItem('user'));

  const dispatch = useDispatch();

  const handleClick = (n) => {
    if (n.includes('PREPARAR PEDIDO')) {
      dispatch(UpdateOrderRequestThunk({ token, id, deliveryStatus: 'Preparando' }));
      return setButtonDisabled(true);
    }

    if (n.includes('SAIU PARA ENTREGA')) {
      dispatch(UpdateOrderRequestThunk({ token, id, deliveryStatus: 'Em Trânsito' }));
      return setButtonDisabled(true);
    }
  };

  useEffect(() => {
    if (status === 'Pendente') {
      return setButtonDisabled(false);
    }

    if (status === 'Em Trânsito') {
      return setButtonDisabled(true);
    }

    if (status === 'Preparando' && name === 'preparando') {
      console.log(status);
      return setButtonDisabled(true);
    }
  }, [buttonDisabled, name, status]);

  return (
    <button
      type="button"
      data-testi={ `${dataId}` }
      onClick={ () => handleClick(title) }
      disabled={ buttonDisabled }
    >
      { title }
    </button>
  );
}

export default ButtonStatus;
