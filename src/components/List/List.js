import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import Column from '../Column/ColumnContainer.js';
import { settings } from '../../data/dataStore.js';
import ReactHtmlParser from 'react-html-parser';
import Creator from '../Creator/Creator.js';
import Container from '../Container/Container.js';

class List extends React.Component {
    render() {
        const {title, image, description, columns, addColumn} = this.props;
        return (
            <section className={styles.component}>
                <Container> 
                    <Hero title={title} image={image} />
                    <div className={styles.description}>
                        {ReactHtmlParser(description)}
                    </div>
                    <div className={styles.columns}>
                        {columns.map(columnData => (
                            <Column key={columnData.id} {...columnData} />
                        ))}
                    </div>
                    <div className={styles.creator}>
                        <Creator text={settings.columnCreatorText} action={addColumn} />
                    </div>
                </Container>
            </section>
        );
    }
}

List.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string,
    columns: PropTypes.array,
    description: PropTypes.node,
    addColumn: PropTypes.func,
};

List.defaultProps = {
    description: settings.defaultListDescription,
};

export default List;
