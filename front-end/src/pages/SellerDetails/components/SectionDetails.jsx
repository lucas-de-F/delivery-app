import React, { useEffect } from 'react';
import utc from 'dayjs/plugin/utc';
import dayjs from 'dayjs/';

import { useDispatch, useSelector } from 'react-redux';
import GenerateId from '../../../utils/generateId';
import ButtonStatus from './ButtonStatus';
import { getOrdersById } from '../../../redux/orderSlice';
import { OrderRequestThunk } from '../../../redux/requestThunks/orderRequest';

dayjs.extend(utc);

const SectionDetails = () => {
  const pageId = Number(window.location.pathname.split('/')[3]);
  const { ordersById } = useSelector((state) => state.OrderSlice);
  const { auth } = useSelector((state) => state.UserSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(OrderRequestThunk({ auth, token: auth.token }))
      .then(() => dispatch(getOrdersById({ pageId })));
    console.log('asdasds');
    // if (orders.length > 0) dispatch(getOrdersById({ pageId }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth]);
  return (
    <>
      <h3>Detalhe do Pedido</h3>
      {Object.keys(ordersById).length > 0 && (
        <div>
          <div>
            <p data-testod="seller_order_details__element-order-details-label-order-id">
              PEDIDO
              {' '}
              {GenerateId(ordersById.id)}
            </p>
            <p data-testid="seller_order_details__element-order-details-label-order-date">
              {`${dayjs.utc(ordersById.saleDate).format('DD/MM/YYYY')}`}
            </p>
            <p
              data-testid="
            seller_order_details__element-order-details-label-delivery-status"
            >
              {ordersById.status}
            </p>
            <ButtonStatus
              dataId="seller_order_details__button-preparing-check"
              title="PREPARAR PEDIDO"
              status={ ordersById.status }
              id={ ordersById.id }
            />

            <ButtonStatus
              dataId="seller_order_details__button-dispatch-check"
              title="SAIU PARA ENTREGA"
              status={ ordersById.status }
              id={ ordersById.id }
            />
            {pageId
              && ordersById.products.map((item, i) => (
                <div key={ `key-${i}` }>
                  <div>
                    <p
                      data-testid={ `seller_order_details__element
-order-table-item-number-${item.id}` }
                    >
                      Item
                      {' '}
                      {item.id}
                    </p>
                    <p
                      data-testid={ `seller_order_details_
_element-order-table-name-${item.id}` }
                    >
                      Descrição
                      {' '}
                      {item.name}
                    </p>
                    <p
                      data-testid={ `seller_order_details_
_element-order-table-quantity-${item.id}` }
                    >
                      Quantidade
                      {' '}
                      {item.SalesProducts.quantity}
                    </p>
                    <p
                      data-testid={ `seller_order_details_
_element-order-table-unit-price-${item.id}` }
                    >
                      Valor Unitário
                      {' '}
                      {item.price}
                    </p>
                    <p
                      data-testid={ `seller_order_details_
_element-order-table-sub-total-${item.id}` }
                    >
                      Sub-total
                      {' '}
                      {(
                        Number(item.price) * item.SalesProducts.quantity
                      ).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            {pageId && (
              <div>
                <h2 data-testid="seller_order_details__element-order-total-price">
                  {ordersById.totalPrice}
                </h2>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default SectionDetails;
