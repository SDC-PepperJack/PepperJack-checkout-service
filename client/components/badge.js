/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import styles from './styles.css';


const Badge = ({ badge }) => {
  return (
    <div className={styles.personalizationLabel}>
      {badge && (
      <span className={styles.badge}>
        <StarRatingComponent
          name="badgeStar"
          starCount={1}
          value={1}
          editing={false}
          starColor="#000"
        />
        {badge}
      </span>
      )}
    </div>
  );
};

export default Badge;
