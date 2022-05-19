import React, { useState } from 'react';
import dayjs from 'dayjs';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { dataTestId, generateId } from '../../../../utils';
import { UpdateOrderRequestThunk } from '../../../../redux/requestThunks/orderRequest';

const DetailsStatus = ({ saleDetail }) => {
  const { id, saleStatus, sellerName, date } = saleDetail;
  const [status, setStatus] = useState(saleStatus);
  const dispatch = useDispatch();

  const { token } = JSON.parse(localStorage.getItem('user'));

  const handleClick = () => {
    dispatch(UpdateOrderRequestThunk({ token, id, deliveryStatus: 'Entregue' }));
    setStatus('Entregue');
  };

  return (
    <div>
      <div style={ { width: 500 } }>
        Detalhes do pedido
        <div>
          <ul
            style={ { display: 'flex', justifyContent: 'space-evenly',
            } }
          >
            <li
              data-testid={ dataTestId.id37 }
            >
              { `Pedido: ${generateId(id)}` }
            </li>
            <li
              data-testid={ dataTestId.id38 }
            >
              { `P. Vendedora: ${sellerName}` }
            </li>
            <li
              data-testid={ dataTestId.id39 }
            >
              {dayjs(date).locale('pt-br').format('DD/MM/YYYY')}
            </li>
            <li
              data-testid={ dataTestId.id40 }
            >
              { status }
            </li>
            <button
              type="button"
              data-testid={ dataTestId.id47 }
              disabled={ status !== 'Em Trânsito' }
              onClick={ () => handleClick() }
            >
              Marcar como entregue
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

DetailsStatus.propTypes = {
  saleDetail: PropTypes.shape({
    id: PropTypes.number,
    saleStatus: PropTypes.string,
    sellerName: PropTypes.string,
    date: PropTypes.string,
  }).isRequired,
};

export default DetailsStatus;
