import React, { useState } from 'react';
import dayjs from 'dayjs';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { dataTestId, generateId, vefiryStatus } from '../../../../utils';
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
    <div className="cnt-ds-1">
      <div>
        <ul
          style={ { display: 'flex', justifyContent: 'space-evenly',
          } }
        >
          <li
            data-testid={ dataTestId.id37 }
          >
            <span>PEDIDO:</span>
            {' '}
            { `${generateId(id)}` }
          </li>
          <li
            data-testid={ dataTestId.id38 }
          >
            <span>P. VEND:</span>
            {' '}
            { `${sellerName}` }
          </li>
          <li
            data-testid={ dataTestId.id39 }
          >
            {dayjs(date).locale('pt-br').format('DD/MM/YYYY')}
          </li>
          <li
            data-testid={ dataTestId.id40 }
            className={ vefiryStatus(status) }
          >
            { status.toUpperCase() }
          </li>
          <button
            type="button"
            data-testid={ dataTestId.id47 }
            disabled={ status !== 'Em Trânsito' }
            onClick={ () => handleClick() }
          >
            MARCAR COMO ENTREGUE
          </button>
        </ul>
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
