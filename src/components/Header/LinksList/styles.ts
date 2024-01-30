import styled, { css } from 'styled-components';
import { LinksListProps } from './types';

type ListProps = Pick<LinksListProps, 'flexDirection'>;

const listItemModifier = {
  column: () => css`
    display: flex;
    justify-content: center;
  `,
  row: () => css``,
};

export const List = styled.ul<ListProps>`
  ${({ flexDirection }) => css`
    height: 100%;
    display: flex;
    text-transform: uppercase;
    flex-direction: ${flexDirection};
    justify-content: center;
    gap: ${flexDirection === 'column' ? '48px' : '32px'};

    li {
      font-weight: 600;
      list-style: none;
      ${!!flexDirection && listItemModifier[flexDirection]()}
    }
  `}
`;

export const ListItem = styled.li``;

export const ItemLink = styled.a`
  transition: 0.5s;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 1px;
  &:hover {
    color: #ff014f;
  }
`;

export const Button = styled.button`
  padding: 18px 25px;
  border-radius: 6px;
  transition: 0.3s all ease;
  cursor: pointer;
  height: fit-content;
  color: #ff014f;
  background: linear-gradient(145deg, #e2e8ec, #ffffff);
  box-shadow: 4px 4px 8px #cbcbcb, -4px -4px 8px #ffffff;
`;
