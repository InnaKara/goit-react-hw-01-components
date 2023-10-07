import { styled } from 'styled-components';

export const Tr = styled.tr`
  height: 50px;
  display: flex;
  background-color: ${({ idx }) =>
    idx % 2 === 0 ? 'transparent' : 'rgb(218 0 255 / 10%)'};
`;
export const Td = styled.td`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  align-items: center;
  width: 240px;
`;
