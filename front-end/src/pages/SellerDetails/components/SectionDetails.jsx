import React from 'react';
import utc from 'dayjs/plugin/utc';
import dayjs from 'dayjs/';

import { useSelector } from 'react-redux';

import GenerateId from '../../../utils/generateId';
import ButtonStatus from './ButtonStatus';

dayjs.extend(utc);

const SectionDetails = () => {
  const orders = useSelector((state) => state.OrderSlice.orders);

  const id = Number(window.location.pathname.split('/')[3]);

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
          <ButtonStatus
            dataId="seller_order_details__button-preparing-check"
            title="PREPARAR PEDIDO"
            name="preparando"
            status={ response.status }
            id={ response.id }
          />

          <ButtonStatus
            dataId="seller_order_details__button-dispatch-check"
            title="SAIU PARA ENTREGA"
            name="sair-entrega"
            status={ response.status }
            id={ response.id }
          />
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
