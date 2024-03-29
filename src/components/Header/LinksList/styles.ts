import styled, { css } from 'styled-components';
import { LinksListProps } from './types';

type ListProps = Pick<LinksListProps, 'flexdirection'>;
type IconProps = Pick<LinksListProps, 'iconcolor'>;

const listItemModifier = {
  column: () => css`
    display: flex;
    justify-content: center;
  `,
  row: () => css``,
};

export const List = styled.ul<ListProps>`
  ${({ flexdirection }) => css`
    height: 100%;
    display: flex;
    text-transform: uppercase;
    flex-direction: ${flexdirection};
    justify-content: center;
    gap: ${flexdirection === 'column' ? '48px' : '32px'};

    li {
      font-weight: 600;
      list-style: none;
      ${!!flexdirection && listItemModifier[flexdirection]()}
    }
  `}
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
`;

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

export const ShadowButton = styled.button`
  padding: 13px 18px;
  border-radius: 6px;
  transition: 0.3s all ease;
  cursor: pointer;
  transition: 0.5s;
  background: linear-gradient(145deg, #e2e8ec, #ffffff);
  box-shadow: 4px 4px 8px #cbcbcb, -4px -4px 8px #ffffff;
  &:hover {
    background: #ff014f;
    color: white;
    transform: translateY(-10px);
  }
`;

export const ContactIcon = styled.i<IconProps>`
  ${({ iconcolor }) => css`
    font-size: 22px;
    color: ${iconcolor === 'linkedin' ? '#0a66c2' : '#171515'};
  `}
`;
