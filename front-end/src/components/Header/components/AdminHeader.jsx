import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { dataTestId } from '../../../utils';

const AdminHeader = ({ adminProps }) => {
  const { name, handleClick } = adminProps;

  return (
    <nav>
      <ul>
        <li>
          <Link to="/admin/manage" data-testid={ dataTestId.id12 }>
            GERENCIAR USUÁRIOS
          </Link>
        </li>

        <li data-testid={ dataTestId.id13 }>
          { name }
        </li>

        <button type="button" onClick={ handleClick }>
          <li data-testid={ dataTestId.id14 }>
            SAIR
          </li>
        </button>
      </ul>
    </nav>
  );
};

AdminHeader.propTypes = {
  adminProps: PropTypes.shape({
    name: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired,
  }).isRequired,
};

export default AdminHeader;
