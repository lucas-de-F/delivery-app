import React from 'react';
// import { useSelector } from 'react-redux';

const ProductList = () => {
  useEffect(() => {
    if (orders && orders.length > 0) {
      const findOrder = orders.find((order) => order.id === pageId);
      const findSeller = sellers.find((seller) => seller.id === findOrder.sellerId);

      setSellerDetail(findSeller);
      setOrderDetail(findOrder);
    }
  }, []);
  return (
    <>
      {
        products.map((product) => (
          <ol key={ product.id }>
            <ul>
              { product.id }
            </ul>
            <ul>
              { product.name }
            </ul>
          </ol>
        ))
      }
    </>
  );
};
export default ProductList;
