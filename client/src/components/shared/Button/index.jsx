import React from 'react';
import styles from './index.module.scss';
import {classNames} from '../../../utils/classNames';

const Button = ({children, onClick, className, isCurrent}) => {
  return (
    <button className={classNames(styles.btn, className, isCurrent ? styles.current : "")} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
