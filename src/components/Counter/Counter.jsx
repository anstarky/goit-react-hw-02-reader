import React from 'react';
import T from 'prop-types';

import styles from './Counter.module.css';

const Counter = ({ index, countAll }) => (
    <p className={styles.counter}>{index}/{countAll}</p>
);

Counter.propTypes = {
    index: T.number.isRequired,
    countAll: T.number.isRequired,
};

export default Counter;
