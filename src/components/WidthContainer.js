import React from 'react';
import styles from './WidthContainer.module.css';
function WidthContainer({children}) {
  return (
    <div className={styles.widthContainer}>
      {children}
    </div>
  );
}

export default WidthContainer;
