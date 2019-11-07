import React from 'react';
import T from 'prop-types';

import styles from './Publication.module.css';

const Publication = ({ article: { id, title, text } }) => (

    <article className={styles.publication} id={id}>
        <h2>{title}</h2>
        <p>{text}</p>
    </article>
);

Publication.propTypes = {
    article: T.exact({
        id: T.string.isRequired,
        title: T.string.isRequired,
        text: T.string.isRequired,
    }).isRequired,
};

export default Publication;
