import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
    border: 1px solid rgba(0, 0, 0, 0.1);
    height: 100%;
    .card-heading {
      text-align: left;
      font-weight: 600;
      font-size: 16px;
      border-bottom: 1px solid  rgba(0, 0, 0, 0.1);
      padding: 5px 0 5px 5px;
    }

    .main-wrapper {
      height: 100%;
    }
`;

function Cards({ children, heading }: any) {
  return (
    <CardWrapper>
        <div className='card-heading'>{heading}</div>
        <main className='main-wrapper'>{children}</main>
    </CardWrapper>
  )
}

export default Cards