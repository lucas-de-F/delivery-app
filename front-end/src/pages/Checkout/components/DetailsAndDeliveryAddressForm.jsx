import React from 'react';

const DetailsAndDeliveryAddressForm = () => (
  <form>
    <label htmlFor="seller">
      Para Vendedora Responsável:
      <select
        data-testid="customer_checkout__select-seller"
        name="seller"
        id="seller"
      >
        <option value="Fulano Alves">Fulado Alves</option>
      </select>
    </label>
    <label htmlFor="adress">
      Endereço
      <input
        type="text"
        id="adress"
        placeholder="Rua 29 de Abril"
        data-testid="customer_checkout__input-address"
      />
    </label>
    <label htmlFor="number-adress">
      Número
      <input
        type="text"
        id="number-adress"
        placeholder="302"
        data-testid="customer_checkout__input-addressNumber"
      />
    </label>
  </form>
);

export default DetailsAndDeliveryAddressForm;
