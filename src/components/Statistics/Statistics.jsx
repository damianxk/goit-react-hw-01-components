import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({ statistic, title = 'UPLOAD STATS' }) => {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>{title}</h2>
      <ul className={css['stat-list']}>
        {statistic.map(({ id, label, percentage }) => (
          <li className={css['item-stat']} key={id}>
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
