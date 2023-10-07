import { styled } from 'styled-components';

export const Table = styled.table`
  align-items: center;
  display: flex;

  justify-content: center;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  flex-direction: column;
  box-shadow: -1px 0px 8px rgba(0, 0, 0, 0.1);
  border-radius: 20px;

  width: 80%;
`;
export const Thead = styled.thead`
  width: 100%;
`;
export const Tbody = styled.tbody`
  width: 100%;
`;

export const Tr = styled.tr`
  height: 50px;
  display: flex;
  background-color: rgb(148 0 211 / 39%);
  /* background-color: rgb(218 0 255 / 57%); */
`;

export const Th = styled.th`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  align-items: center;
  font-size: 20px;
  text-shadow: 0 1px 1px #2d2020;
  width: 241px;
`;
