import React from 'react';
import PropTypes from 'prop-types';
import CardSearch from '../CardSearch/CardSearch.js';
import Container from '../Container/Container.js';


class SearchResult extends React.Component {
    render() {
        const {cards} = this.props;
        return (
            <Container>
                <section>
                    <div>
                        <h2>Search result:</h2>
                        <div>
                            {cards.map(cardData => (
                                <CardSearch key={cardData.id} {...cardData} />
                            ))}
                        </div>
                    </div>
                </section>
            </Container>
        );
    }
}

SearchResult.propTypes = {
    cards: PropTypes.array,
    id: PropTypes.string,
};

export default SearchResult;