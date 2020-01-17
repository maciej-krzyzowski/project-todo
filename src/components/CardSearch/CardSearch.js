import React from 'react';
import styles from './CardSearch.scss';
import PropTypes from 'prop-types';

class CardSearch extends React.Component {
    render() {
        const {title} = this.props;
        return (
            <article
                className={styles.component}
            >
                {title}
            </article>
        );
    }
}

CardSearch.propTypes = {
    title: PropTypes.string,
};

export default CardSearch;