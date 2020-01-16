import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import Column from '../Column/ColumnContainer.js';
import { settings } from '../../data/dataStore.js';
import ReactHtmlParser from 'react-html-parser';
import Creator from '../Creator/Creator.js';
import Container from '../Container/Container.js';
import { DragDropContext } from 'react-beautiful-dnd';

class List extends React.Component {
    render() {
        const {title, image, description, columns, addColumn, moveCard} = this.props;
        const moveCardHandler = result => {
            if(
                result.destination
                &&
                (
                    result.destination.index != result.source.index
                    ||
                    result.destination.droppableId != result.source.droppableId
                )
            ){
                moveCard({
                    id: result.draggableId,
                    dest: {
                        index: result.destination.index,
                        columnId: result.destination.droppableId,
                    },
                    src: {
                        index: result.source.index,
                        columnId: result.source.droppableId,
                    },
                });
            }
        };
        return (
            <section className={styles.component}>
                <Container> 
                    <Hero title={title} image={image} />
                    <div className={styles.description}>
                        {ReactHtmlParser(description)}
                    </div>
                    <div className={styles.columns}>
                        <DragDropContext onDragEnd={moveCardHandler}>
                            {columns.map(columnData => (
                                <Column {...columnData} key={columnData.id} />
                            ))}
                        </DragDropContext>
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
    moveCard: PropTypes.func,
};

List.defaultProps = {
    description: settings.defaultListDescription,
};

export default List;
