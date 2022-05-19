import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { dataTestId } from '../../../utils';

const ProductList = () => {
  const [products, setProducts] = useState(null);
  const pageId = Number(window.location.pathname.split('/')[3]);
  const { orders } = useSelector((state) => state.OrderSlice);

  useEffect(() => {
    if (orders && orders.length !== 0) {
      const findOrder = orders.find((order) => order.id === pageId);
      return setProducts(findOrder.products);
    }
  }, [orders, pageId]);

  return (
    <div>
      { products && (
        products.map((product, key) => (
          <ol key={ key }>
            <ul
              data-testid={ `${dataTestId.id41}${key}` }
            >
              { product.id }
            </ul>
            <ul
              data-testid={ `${dataTestId.id42}${key}` }
            >
              { product.name }
            </ul>
            <ul
              data-testid={ `${dataTestId.id43}${key}` }
            >
              { product.SalesProducts.quantity }
            </ul>
            <ul
              data-testid={ `${dataTestId.id46}${key}` }
            >
              { product.price }
            </ul>
            <ul
              data-testid={ `${dataTestId.id44}${key}` }
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
