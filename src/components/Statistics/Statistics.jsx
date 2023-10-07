import { Section, StatList, Item, Title } from './Statistics.styled';
import { GetRandomHexColor } from './RandomColor';

export const Statistics = ({ title, stats, backgroundColor }) => (
  <Section className="statistics">
    {title && <Title>{title}</Title>}

    <StatList>
      {stats.map(stat => (
        <Item key={stat.id} style={{ backgroundColor: GetRandomHexColor() }}>
          <span className="label">{stat.label}</span>
          <span className="percentage">{stat.percentage}%</span>
        </Item>
      ))}
    </StatList>
  </Section>
);
