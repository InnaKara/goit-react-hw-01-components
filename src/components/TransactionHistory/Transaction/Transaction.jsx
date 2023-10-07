import { Td, Tr } from './Transaction.styled';

export const Transaction = ({ type, amount, currency, index }) => {
  return (
    <Tr idx={index}>
      <Td>{type}</Td>
      <Td>{amount}</Td>
      <Td>{currency}</Td>
    </Tr>
  );
};
