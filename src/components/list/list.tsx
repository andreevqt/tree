import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { TPowerUnitResponse, TStatus } from '../../services/api/responses';
import Item from './item';

const StyledList = styled.div`
  ${({ theme }) => `
    margin: 20px auto 0 auto;
    max-width: 300px;
    display: flex;
    flex-direction: column;
    padding: 25px 25px 25px 30px;
    border-radius: 3px;
    box-shadow: 0 0 5px 4px rgba(0, 0, 0, .2);
    background-color: ${theme.backgroundColor};
  `}
`;

const StyledListTitle = styled.div`
  ${({ theme }) => `
    position: relative;
    font-size: 16px;
    line-height: 1;
    font-weight: 600;
    font-family: ${theme.font};
    color: ${theme.color};
    margin-bottom: 10px;
  `}
`;

const StyledStatus = styled.div<{ status: TStatus }>`
  ${({ theme, status }) => css`
    position: absolute;
    left: -15px;
    width: 8px;
    height: 8px;
    top: calc(50%);
    transform: translateY(-50%);
    border-radius: 50%;
    margin-right: 5px;
    background-color: ${status === 'online' ? theme.online : theme.offline}
  `}
`;

type TListProps = TPowerUnitResponse;

const List: React.FC<TListProps> = ({ name, items, status }) => {
  const [active, setActive] = useState(-1);

  return (
    <StyledList>
      <StyledListTitle>
        <StyledStatus status={status} />
        {name}
      </StyledListTitle>
      {
        items.map((item, idx) => (
          <Item
            key={idx}
            active={active}
            setActive={setActive}
            {...item}
          />
        ))
      }
    </StyledList>
  );
};

export default List;
