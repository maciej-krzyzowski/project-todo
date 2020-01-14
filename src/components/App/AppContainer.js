import { connect } from 'react-redux';
import App from './App.js';
import { createAction_moveCard } from '../../redux/cardsRedux.js';

const mapStateToProps = state => ({
    title: state.app.title,
    subtitle: state.app.subtitle,
    lists: state.lists,
});

const mapDispatchToProps = dispatch => ({
    moveCard: payload => {
        console.warn(payload);
        dispatch(createAction_moveCard(payload));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);