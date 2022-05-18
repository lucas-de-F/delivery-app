import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const ORDITMNUMB = 'customer_order_details__element-order-table-item-number-';
const ORDITMNAME = 'customer_order_details__element-order-table-name-';
const ORDITMQTY = 'customer_order_details__element-order-table-quantity-';
const ORDITMPRICE = 'customer_order_details__element-order-table-unit-price-';
const ORDITMSUBT = 'customer_order_details__element-order-table-sub-total-';

const ProductList = () => {
  const [products, setProducts] = useState(null);
  const pageId = Number(window.location.pathname.split('/')[3]);
  const { orders } = useSelector((state) => state.OrderSlice);

  useEffect(() => {
    if (orders.length > 0 && orders.length <= (pageId)) {
      const findOrder = orders.find((order) => order.id === pageId);
      setProducts(findOrder.products);
      console.log(products);
    }
  }, [orders, pageId, products]);

  return (
    <div>
      { products && (
        products.map((product, key) => (
          <ol key={ key }>
            <ul
              data-testid={ `${ORDITMNUMB}${key}` }
            >
              { product.id }
            </ul>
            <ul
              data-testid={ `${ORDITMNAME}${key}` }
            >
              { product.name }
            </ul>
            <ul
              data-testid={ `${ORDITMQTY}${key}` }
            >
              { product.SalesProducts.quantity }
            </ul>
            <ul
              data-testid={ `${ORDITMPRICE}${key}` }
            >
              { product.price }
            </ul>
            <ul
              data-testid={ `${ORDITMSUBT}${key}` }
            >
              { (product.SalesProducts.quantity * product.price).toFixed(2) }
            </ul>
          </ol>
        ))
      ) }
    </div>
  );
};
export default ProductList;
