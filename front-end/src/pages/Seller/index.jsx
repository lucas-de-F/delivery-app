import React from 'react';

import { HeaderSeller, SellerCard } from './components';

function SellerPage() {
  return (
    <>
      <HeaderSeller />
      <section>
        <div>
          <SellerCard />
        </div>
      </section>
    </>
  );
}

export default SellerPage;
