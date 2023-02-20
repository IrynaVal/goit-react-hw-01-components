import PropTypes from 'prop-types';
import { Table, Title, Item, Data, TitleData} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
    return <Table>
  <thead>
    <Title>
      <TitleData>Type</TitleData>
      <TitleData>Amount</TitleData>
      <TitleData>Currency</TitleData>
    </Title>
  </thead>

  <tbody>
    {items.map(({ id, type, amount, currency }) => {
      return <Item key={id}>
        <Data>{type}</Data>
        <Data>{amount}</Data>
        <Data>{currency}</Data>
       </Item>
    }             
  )}
  </tbody>
</Table>
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.exact({
          id: PropTypes.string.isRequired,
          type: PropTypes.string.isRequired,
          amount: PropTypes.string.isRequired,
          currency: PropTypes.string.isRequired,
        })
    )
};