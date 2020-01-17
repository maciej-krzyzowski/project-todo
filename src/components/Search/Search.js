import React from 'react';
import styles from './Search.scss';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import { settings } from '../../data/dataStore';
import Icon from '../Icon/Icon';
import Container from '../Container/Container.js';
import { withRouter } from 'react-router';

class Search extends React.Component {
    state = {
        value: this.props.searchString,
    }
    
    handleChange(event){
        this.setState({
            value: event.target.value,
        });
    }
    
    handleOK(){
        this.props.changeSearchString(this.state.value);
        this.props.history.push(`/search/${this.state.value}`);
    }
    
    componentDidUpdate(prevProps){
        if(this.props.searchString != prevProps.searchString){
            this.setState({value: this.props.searchString});
        }
    }
    
    render() {
        const {text, countVisible, countAll} = this.props;
        const {value} = this.state;
        const {icon} = settings.search;
        return (
            <Container>
                <div className={styles.component}>
                    <input
                        type='text'
                        placeholder={text}
                        value={value}
                        onChange={event => this.handleChange(event)}
                        onKeyDown={event => event.keyCode === 13 && this.handleOK()}
                    />
                    <div className={styles.buttons}>
                        <Button onClick={this.handleOK}><Icon name={icon} /></Button>
                    </div>
                    <div>
                        { countVisible == countAll ? '' : `${countVisible} / ${countAll}` }
                    </div>
                </div>
            </Container>
        );
    }
}

Search.propTypes = {
    text: PropTypes.string,
    searchString: PropTypes.string,
    changeSearchString: PropTypes.func,
    countVisible: PropTypes.number,
    countAll: PropTypes.number,
    history: PropTypes.object,
};

Search.defaultProps = {
    text: settings.search.defaultText,
};

export default withRouter(Search);
