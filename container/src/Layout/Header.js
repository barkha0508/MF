import React from 'react';
import { Link } from 'react-router-dom';

import * as S from './Header.styles';

export default () => {
  return (
    <S.Header>
      <div className='container'>
        <S.Content>
          <Link to="/reports">
            <div>Reports</div>
          </Link>
          <S.ContactLink to="/contact">
            Contact
          </S.ContactLink>
        </S.Content>
      </div>
    </S.Header>
  )
}