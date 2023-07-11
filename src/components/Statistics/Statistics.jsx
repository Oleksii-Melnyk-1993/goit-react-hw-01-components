// import css from './Statistics.module.css';
// import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
  return (
    <section class="statistics">
      {title && <h2 class="title">Upload stats</h2>}

      <ul class="stat-list">
        {stats.map(item => {
          <li key={item.id} class="item">
            <span class="label">{item.label}</span>
            <span class="percentage">{item.percentage}%</span>
          </li>;
        })}
      </ul>
    </section>
  );
};