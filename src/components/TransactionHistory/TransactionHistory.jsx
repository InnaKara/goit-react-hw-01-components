import { Transaction } from './Transaction/Transaction';
import { Table, Tr, Thead, Tbody, Th } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Type</Th>
          <Th>Amount</Th>
          <Th>Currency</Th>
        </Tr>
      </Thead>
      <Tbody>
        {items.map((item, index) => (
          <Transaction
            key={item.id}
            type={item.type}
            amount={item.amount}
            currency={item.currency}
            index={index}
          />
        ))}
      </Tbody>
    </Table>
  );
};
