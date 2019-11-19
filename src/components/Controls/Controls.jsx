import React from 'react';
import T from 'prop-types';

import styles from './Controls.module.css';

const Controls = ({ onChange, currentIdx, lastIdx }) => (
    <section className={styles.controls}>
        <button
            type="button"
            onClick={onChange}
            disabled={currentIdx === 0}
            className={styles.button}
        >
            Назад
        </button>
        <button
            type="button"
            onClick={onChange}
            disabled={currentIdx === lastIdx}
            className={styles.button}
        >
            Вперед
            </button>
    </section>
);

Controls.propTypes = {
    onChange: T.func.isRequired,
    currentIdx: T.number.isRequired,
    lastIdx: T.number.isRequired,
};

export default Controls;
