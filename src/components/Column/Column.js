import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';

const Column = props => (
    <section className={styles.component}>
        <h3 className={styles.title}>{props.titleColumn}</h3>
    </section>
)

Column.propTypes = {
    titleColumn: PropTypes.node.isRequired,
};

export default Column;