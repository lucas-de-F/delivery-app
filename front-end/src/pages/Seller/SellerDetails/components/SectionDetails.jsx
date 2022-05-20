import React from 'react';
import dayjs from 'dayjs/';
import PropTypes from 'prop-types';

import { dataTestId, generateId } from '../../../../utils';
import ButtonStatus from './ButtonStatus';

const SectionDetails = ({ orderDetail }) => {
  const { id, date, status } = orderDetail;

  return (
    <>
      <h3>Detalhe do Pedido</h3>
      <div
        style={ { display: 'flex',
          'justify-content': 'space-between',
          'align-items': 'center',
        } }
      >
        <p data-testid={ dataTestId.id53 }>
          { `PEDIDO ${generateId(id)}` }
        </p>
        <p data-testid={ dataTestId.id55 }>
          {dayjs(date).locale('pt-br').format('DD/MM/YYYY')}
        </p>
        <p data-testid={ dataTestId.id54 }>
          { status }
        </p>
        <ButtonStatus
          dataId={ dataTestId.id56 }
          title="PREPARAR PEDIDO"
          status={ status }
          id={ orderDetail.id }
        />
        <ButtonStatus
          dataId={ dataTestId.id57 }
          title="SAIU PARA ENTREGA"
          status={ status }
          id={ orderDetail.id }
        />
      </div>
    </>
  );
};

SectionDetails.propTypes = {
  orderDetail: PropTypes.shape({
    id: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};

export default SectionDetails;
