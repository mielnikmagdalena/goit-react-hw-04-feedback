import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div className={styles.statistics}>
    <div className={styles.statItem}>
      <span className={styles.label}>Good:</span>
      <span className={styles.value}>{good}</span>
    </div>
    <div className={styles.statItem}>
      <span className={styles.label}>Neutral:</span>
      <span className={styles.value}>{neutral}</span>
    </div>
    <div className={styles.statItem}>
      <span className={styles.label}>Bad:</span>
      <span className={styles.value}>{bad}</span>
    </div>
    <div className={styles.statItem}>
      <span className={styles.label}>Total:</span>
      <span className={styles.value}>{total}</span>
    </div>
    <div className={styles.statItem}>
      <span className={styles.label}>Positive feedback:</span>
      <span className={styles.value}>{positivePercentage.toFixed(2)}%</span>
    </div>
  </div>
);
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
