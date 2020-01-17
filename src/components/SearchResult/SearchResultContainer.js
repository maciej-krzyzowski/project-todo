import { connect } from 'react-redux';
import SearchResult from './SearchResult.js';
import { getSearchCardsForLists } from '../../redux/cardsRedux.js';

const mapStateToProps = (state, props) => {
    const searchResult = props.match.params.id;
    return {
        cards: getSearchCardsForLists(state.cards, searchResult),
    };
};

export default connect(mapStateToProps)(SearchResult);
