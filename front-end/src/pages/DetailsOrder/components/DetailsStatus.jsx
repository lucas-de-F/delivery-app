import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
// import generateId from '../../../utils/generateId';

const utc = require('dayjs/plugin/utc');
const dayjs = require('dayjs');

dayjs.extend(utc);

const DetailsStatus = () => {
  const [orderDetail, setOrderDetail] = useState(null);
  const [sellerDetail, setSellerDetail] = useState(null);

  const pageId = Number(window.location.pathname.split('/')[3]);
  const { orders } = useSelector((state) => state.OrderSlice);
  const { sellers } = useSelector((state) => state.SellersSlice);
  useEffect(() => {
    const findOrder = orders.find((order) => order.id === pageId);
    const findSeller = sellers.find((seller) => seller.id === findOrder.sellerId);
    setSellerDetail(findSeller);
    setOrderDetail(findOrder);
  }, [orders, pageId, sellers, orderDetail]);

  return ((orderDetail !== null && sellerDetail !== null) && (
    <div style={ { width: 500 } }>
      Detalhes do pedido
      <div>
        <ul
          style={ { display: 'flex', justifyContent: 'space-evenly',
          } }
        >
          <li
            data-testid="customer_order_details__element-order-details-label-order-id"
          >
            {/* { `Pedido: ${generateId(orderDetail.id)}` } */}
          </li>
          <li
            data-testid=" customer_order_details__element-order-details-label-seller-name"
          >
            { `P. Vendedora: ${sellerDetail.name}` }
          </li>
          <li
            data-testid="customer_order_details__element-order-details-label-order-date"
          >
            {/* { `${dayjs.utc(orderDetail.saleDate).format('DD/MM/YYYY')}` } */}
          </li>
          <li
            data-testid="
        customer_order_details__element-order-details-label-delivery-status"
          >
            {/* { orderDetail.status } */}
          </li>
          <button
            type="button"
            data-testid="customer_order_details__button-delivery-check"
          >
            Marcar como entregue
          </button>
        </ul>
      </div>
    </div>
  )
  );
};

export default DetailsStatus;
