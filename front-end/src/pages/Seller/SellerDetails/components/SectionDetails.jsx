import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs/';

import { useSelector } from 'react-redux';
import { dataTestId, generateId } from '../../../../utils';
import ButtonStatus from './ButtonStatus';

const SectionDetails = () => {
  const pageId = Number(window.location.pathname.split('/')[3]);
  const [orderDetail, setOrderDetail] = useState(null);

  const { orders } = useSelector((state) => state.OrderSlice);

  useEffect(() => {
    if (orders && orders.length !== 0) {
      const findOrder = orders.find((order) => order.id === pageId);
      return setOrderDetail(findOrder);
    }
  }, [orderDetail, orders, pageId]);

  return (
    <>
      <h3>Detalhe do Pedido</h3>
      {
        orderDetail && (
          <div>
            <div>
              <p data-testid={ dataTestId.id53 }>
                { `PEDIDO ${generateId(orderDetail.id)}` }
              </p>
              <p data-testid={ dataTestId.id55 }>
                {dayjs(orderDetail.saleDate).locale('pt-br').format('DD/MM/YYYY')}
              </p>
              <p data-testid={ dataTestId.id54 }>
                { orderDetail.status }
              </p>
              <ButtonStatus
                dataId={ dataTestId.id56 }
                title="PREPARAR PEDIDO"
                status={ orderDetail.status }
                id={ orderDetail.id }
              />
              <ButtonStatus
                dataId={ dataTestId.id57 }
                title="SAIU PARA ENTREGA"
                status={ orderDetail.status }
                id={ orderDetail.id }
              />
              {
                pageId
              && orderDetail.products.map((item, i) => (
                <div key={ `key-${i}` }>
                  <p data-testid={ `${dataTestId.id58}${item.id}` }>
                    { `Item ${item.id}` }
                  </p>
                  <p data-testid={ `${dataTestId.id59}${item.id}` }>
                    { `Descrição ${item.name}` }
                  </p>
                  <p data-testid={ `${dataTestId.id60}${item.id}` }>
                    { `Quantidade ${item.SalesProducts.quantity}` }
                  </p>
                  <p data-testid={ `${dataTestId.id61}${item.id}` }>
                    {`Valor Unitário ${item.price}` }
                  </p>
                  <p data-testid={ `${dataTestId.id62}${item.id}` }>
                    { `Sub-total ${(
                      Number(item.price) * item.SalesProducts.quantity
                    ).toFixed(2)}` }
                  </p>
                </div>
              ))
              }
              {
                pageId && (
                  <h2 data-testid={ dataTestId.id63 }>
                    {orderDetail.totalPrice.toString().replace('.', ',')}
                  </h2>
                )
              }
            </div>
          </div>
        )
      }
    </>
  );
};

export default SectionDetails;
