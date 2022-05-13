import React from 'react';

import { HeaderSeller } from '../Seller/components';
import SectionDetails from './components/SectionDetails';

function SellerDetails() {
  return (
    <>
      <HeaderSeller />
      <section>
        <div>
          <SectionDetails />
        </div>
      </section>
    </>
  );
}

export default SellerDetails;
