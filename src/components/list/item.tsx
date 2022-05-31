import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { TItem } from '../../services/api/responses';
import ChevronDown from '../../icons/chevron-down';

const StyledItem = styled.div`
`;

const StyledItemTitle = styled.div<{ isActive: boolean; hasChildren: boolean }>`
  ${({ theme, hasChildren, isActive: isActive }) => css`
    border-radius: 3px;
    padding: 5px 7px;
    display: flex;
    align-items: center;
    color: ${theme.color};
    font-family: ${theme.font};
    line-height: 1;
    font-size: ${hasChildren ? '14px' : '12px'};
    ${isActive && css`
      background-color: ${theme.highlight};
      color: #fff;
    `}
    ${hasChildren && css`
      font-weight: 600;
      cursor: pointer;
    `}
  `}
`;

const StyledChildrenContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  padding-left: 20px;
  margin: 10px 0;
`;

const StyledChevron = styled(ChevronDown).attrs(() => ({ width: '8', height: '8' })) <{ isOpen: boolean }>`
  ${({ isOpen }) => `
    transition: transform .2s ease;
    transform: ${isOpen ? 'rotate(0deg)' : 'rotate(-90deg)'};
    margin-right: 4px;
  `}
`;

type TItemProps = TItem & {
  active: number;
  setActive: (id: number) => void
};

const Item = ({ id, name, descendants, active, setActive }: TItemProps) => {
  const [isCollapsed, setCollapsed] = useState(false);
  const shouldRenderKids = isCollapsed && descendants;
  const hasChildren = !!descendants;

  const handleClick = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setCollapsed(!isCollapsed);
    if (!hasChildren) {
      setActive(id);
    }
  };

  return (
    <StyledItem>
      <StyledItemTitle
        hasChildren={hasChildren}
        isActive={id == active}
        onClick={handleClick}
      >
        {
          descendants && <StyledChevron isOpen={!!shouldRenderKids} />
        }
        {
          name
        }
      </StyledItemTitle>
      {
        shouldRenderKids && (
          <StyledChildrenContainer>
            {
              descendants.map((descendant, idx) => (
                <Item
                  key={idx}
                  active={active}
                  setActive={setActive}
                  {...descendant}
                />
              ))
            }
          </StyledChildrenContainer>
        )
      }
    </StyledItem>
  );
};

export default Item;
