import React from 'react';
import T from 'prop-types';

import styles from './Controls.module.css';

const Controls = ({ onPrev, onNext, activePrev, activeNext }) => (
    <section className={styles.controls}>
        <button type="button" onClick={onPrev} disabled={activePrev} className={styles.button} >Назад</button>
        <button type="button" onClick={onNext} disabled={activeNext} className={styles.button}>Вперед</button>
    </section>
);

Controls.propTypes = {

    onPrev: T.func.isRequired,
    onNext: T.func.isRequired,
    activePrev: T.string.isRequired,
    activeNext: T.string.isRequired,

};

export default Controls;
