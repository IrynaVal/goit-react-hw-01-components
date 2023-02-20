import PropTypes from 'prop-types';
import { Stat, Title, StatList, Item, Label, Percentage} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (<Stat>
    {title && (<Title>{title}</Title>)}
    <StatList>
      {stats.map(stat => (<Item key={stat.id} style={{backgroundColor: getRandomHexColor()}}>
        <Label>{stat.label}</Label>
        <Percentage>{stat.percentage}%</Percentage>
    </Item>))}
  </StatList>
</Stat>)
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }))
};


function getRandomHexColor() {
 return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}