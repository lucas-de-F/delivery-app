import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import generateId from '../../../utils/generateId';
import { getOrdersById } from '../../../redux/orderSlice';
import { getSellers } from '../../../redux/requestThunks/sellersRequest';

const utc = require('dayjs/plugin/utc');
const dayjs = require('dayjs');

dayjs.extend(utc);

const SELLERNAME = 'customer_order_details__element-order-details-label-seller-name';
const ORDERDATE = 'customer_order_details__element-order-details-label-order-date';
const DELSTAT = 'customer_order_details__element-order-details-label-delivery-status';
const DELCHECK = 'customer_order_details__button-delivery-check';

const DetailsStatus = () => {
  const dispatch = useDispatch();
  const [orderDetail, setOrderDetail] = useState(null);
  const [sellerDetail, setSellerDetail] = useState(null);

  const pageId = Number(window.location.pathname.split('/')[3]);
  const { auth } = useSelector((state) => state.UserSlice);
  const { orders, ordersById } = useSelector((state) => state.OrderSlice);
  const { sellers } = useSelector((state) => state.SellersSlice);

  useEffect(() => {
    dispatch(getOrdersById({ pageId }));
    dispatch(getSellers(auth));
    if (orders && orders.length <= (pageId) && ordersById?.sellerId) {
      const findSeller = sellers.find((seller) => seller.id === ordersById.sellerId);

      setSellerDetail(findSeller);
      setOrderDetail(ordersById);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [orders, ordersById]);

  return (
    <div>
      {orderDetail && sellerDetail && (
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
                { `Pedido: ${generateId(orderDetail.id)}` }
              </li>
              <li
                data-testid={ SELLERNAME }
              >
                { `P. Vendedora: ${sellerDetail.name}` }
              </li>
              <li
                data-testid={ ORDERDATE }
              >
                { `${dayjs.utc(orderDetail.saleDate).format('DD/MM/YYYY')}` }
              </li>
              <li
                data-testid={ DELSTAT }
              >
                { orderDetail.status }
              </li>
              <button
                type="button"
                data-testid={ DELCHECK }
                disabled={ orderDetail.status !== 'Entregue' }
              >
                Marcar como entregue
              </button>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailsStatus;
