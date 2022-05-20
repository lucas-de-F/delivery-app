import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../../components/Header';
import { OrderRequestThunk } from '../../../redux/requestThunks/orderRequest';

import { ProductsList, SectionDetails, TotalPrice } from './components';

function SellerDetails() {
  const dispatch = useDispatch();
  const [orderDetail, setOrderDetail] = useState(null);
  const pageId = Number(window.location.pathname.split('/')[3]);

  const { orders } = useSelector((state) => state.OrderSlice);
  const { auth } = useSelector((state) => state.UserSlice);
  const { token } = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    dispatch(OrderRequestThunk({ auth, token }));
  }, [auth, dispatch, token]);

  useEffect(() => {
    if (orders && orders.length !== 0) {
      const findOrder = orders.find((order) => order.id === pageId);
      return setOrderDetail(findOrder);
    }
  }, [orderDetail, orders, pageId]);

  return (
    <>
      <Header />
      {
        orderDetail && (
          <section>
            <SectionDetails
              orderDetail={ {
                id: orderDetail.id,
                date: orderDetail.saleDate,
                status: orderDetail.status,
              } }
            />
            <ProductsList products={ orderDetail.products } />
            <TotalPrice value={ orderDetail.totalPrice } />
          </section>
        )
      }
    </>
  );
}

export default SellerDetails;
