import React from 'react';
import utc from 'dayjs/plugin/utc';
import dayjs from 'dayjs/';

import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import GenerateId from '../../../utils/generateId';

dayjs.extend(utc);

const SectionDetails = () => {
  const orders = useSelector((state) => state.OrderSlice.orders);

  const location = useLocation();
  const id = location.pathname[location.pathname.length - 1];

  const response = orders.find((i) => i.id === Number(id));

  return (
    <>
      <h3>Detalhe do Pedido</h3>
      <div>
        <div>
          <p data-testod="seller_order_details__element-order-details-label-order-id">
            PEDIDO
            {' '}
            { GenerateId(response.id) }
          </p>
          <p data-testid="seller_order_details__element-order-details-label-order-date">
            {`${dayjs.utc(response.saleDate).format('DD/MM/YYYY')}`}
          </p>
          <p
            data-testid="
            seller_order_details__element-order-details-label-delivery-status"
          >
            { response.status }
          </p>
          <p data-testid="seller_order_details__button-preparing-check">
            PREPARAR PEDIDO
          </p>
          <p data-testid="seller_order_details__button-dispatch-check">
            SAIU PARA ENTREGA
          </p>
          {
            id
              && response.products.map((item, i) => (
                <div key={ `key-${i}` }>
                  <div>
                    <p
                      data-testid={
                        `seller_order_details__element-order-table-item-number-${item.id}`
                      }
                    >
                      Item
                      {' '}
                      { item.id }
                    </p>
                    <p
                      data-testid={
                        `seller_order_details__element-order-table-name-${item.id}`
                      }
                    >
                      Descrição
                      {' '}
                      { item.name }
                    </p>
                    <p
                      data-testid={
                        `seller_order_details__element-order-table-quantity-${item.id}`
                      }
                    >
                      Quantidade
                      {' '}
                      { item.SalesProducts.quantity }
                    </p>
                    <p
                      data-testid={
                        `seller_order_details__element-order-table-unit-price-${item.id}`
                      }
                    >
                      Valor Unitário
                      {' '}
                      { item.price }
                    </p>
                    <p
                      data-testid={
                        `seller_order_details__element-order-table-sub-total-${item.id}`
                      }
                    >
                      Sub-total
                      {' '}
                      {
                        (Number(item.price) * item.SalesProducts.quantity).toFixed(2)
                      }
                    </p>
                  </div>
                </div>
              ))
          }
          {
            id
              && (
                <div>
                  <h2 data-testid="seller_order_details__element-order-total-price">
                    {
                      response.totalPrice
                    }
                  </h2>
                </div>
              )
          }
        </div>
      </div>
    </>
  );
};

export default SectionDetails;
