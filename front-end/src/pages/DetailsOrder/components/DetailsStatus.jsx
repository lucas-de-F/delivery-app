import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import generateId from '../../../utils/generateId';
import { getSellers } from '../../../redux/requestThunks/sellersRequest';
import { dataTestId } from '../../../utils';

const utc = require('dayjs/plugin/utc');
const dayjs = require('dayjs');

dayjs.extend(utc);

const DetailsStatus = () => {
  const [orderDetail, setOrderDetail] = useState(null);
  const [sellerDetail, setSellerDetail] = useState(null);
  const dispatch = useDispatch();
  const pageId = Number(window.location.pathname.split('/')[3]);

  const { auth } = useSelector((state) => state.UserSlice);
  const { orders } = useSelector((state) => state.OrderSlice);
  const { sellers } = useSelector((state) => state.SellersSlice);

  useEffect(() => {
    if (orders && orders.length !== 0) {
      const findOrder = orders.find((order) => order.id === pageId);
      setOrderDetail(findOrder);
      return dispatch(getSellers(auth));
    }
  }, [auth, dispatch, orderDetail, orders, pageId]);

  useEffect(() => {
    if (sellers && sellers.length > 0 && orderDetail) {
      const { sellerId } = orderDetail;
      const findSeller = sellers.find((seller) => seller.id === sellerId);
      return setSellerDetail(findSeller);
    }
  }, [orderDetail, sellers]);

  return (
    <div>
      { orderDetail && sellerDetail && (
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
                { `Pedido: ${generateId(orderDetail.id)}` }
              </li>
              <li
                data-testid={ dataTestId.id38 }
              >
                { `P. Vendedora: ${sellerDetail.name}` }
              </li>
              <li
                data-testid={ dataTestId.id39 }
              >
                { `${dayjs.utc(orderDetail.saleDate).format('DD/MM/YYYY')}` }
              </li>
              <li
                data-testid={ dataTestId.id40 }
              >
                { orderDetail.status }
              </li>
              <button
                type="button"
                data-testid={ dataTestId.id47 }
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
