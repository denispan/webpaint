import React from 'react';
import styles from './index.module.scss';
import {Alert} from 'react-bootstrap';

const Button = ({isShow, text, variant}) => {
  return (
    <Alert className={styles.alert} show={isShow} variant={variant}>
      {text}
    </Alert>
  );
};

export default Button;
