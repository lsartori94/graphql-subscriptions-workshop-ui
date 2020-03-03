import React from 'react';
import * as Styled from './styles';

const statuses = { ONLINE: 'online', OFFLINE: 'offline' };

export default function Card({ name, status }) {
  return (
    <Styled.Container className={`status status-${statuses[status]}`}>
      <Styled.Title>{name}</Styled.Title>
      <Styled.StatusFoot status={statuses[status]}>
        <h2>{statuses[status]}</h2>
      </Styled.StatusFoot>
    </Styled.Container>
  );
}
