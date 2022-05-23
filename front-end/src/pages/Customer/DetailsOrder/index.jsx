import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Header } from '../../../components';
import { DetailsStatus, ProductList, TotalPrice } from './components';

import { getOrdersById } from '../../../redux/orderSlice';
import { getSellers } from '../../../redux/requestThunks/sellersRequest';
import { OrderRequestThunk } from '../../../redux/requestThunks/orderRequest';

import './styles.scss';

const DetailsOrder = () => {
  const [orderDetail, setOrderDetail] = useState(null);
  const [sellerDetail, setSellerDetail] = useState(null);

  const pageId = Number(window.location.pathname.split('/')[3]);

  const { auth } = useSelector((state) => state.UserSlice);
  const { orders, ordersById } = useSelector((state) => state.OrderSlice);
  const { sellers } = useSelector((state) => state.SellersSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(OrderRequestThunk({ auth, token: auth.token }));
  }, [auth, dispatch]);

  useEffect(() => {
    dispatch(getOrdersById({ pageId }));
    if (ordersById) {
      setOrderDetail(ordersById);
      return dispatch(getSellers(auth));
    }
  }, [auth, dispatch, orderDetail, ordersById, pageId, orders]);

  useEffect(() => {
    if (sellers && sellers.length > 0 && orderDetail) {
      const { sellerId } = orderDetail;
      const findSeller = sellers.find((seller) => seller.id === sellerId);
      return setSellerDetail(findSeller);
    }
  }, [orderDetail, sellers]);

  return (
    <>
      <Header />
      <section className="section-datails-status">
        <div className="content-datails-status">
          <h3>DETALHE DO PEDIDO</h3>
          <div className="border-table">
            {
              orderDetail && sellerDetail && (
                <>
                  <DetailsStatus
                    saleDetail={ {
                      id: orderDetail.id,
                      saleStatus: orderDetail.status,
                      sellerName: sellerDetail.name,
                      date: orderDetail.saleDate,
                    } }
                  />
                  <ProductList productsList={ orderDetail.products } />
                  <TotalPrice totalPrice={ orderDetail.totalPrice } />
                </>
              )
            }
          </div>
        </div>
      </section>
    </>
  );
};

export default DetailsOrder;
