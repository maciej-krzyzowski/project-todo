import React from 'react';
import styles from './Header.scss';
import { NavLink, Link } from 'react-router-dom';
import Container from '../Container/Container.js';
import Icon from '../Icon/Icon.js';
import { settings } from '../../data/dataStore.js';

class Header extends React.Component {
    render() {
        return (
            <header className={styles.component}>
                <Container>
                    <div className={styles.wrapper}>
                        <Link to='/' className={styles.logo}>
                            <Icon name={settings.headerIcon} />
                        </Link>
                        <nav>
                            <NavLink exact to='/' activeClassName='active'>Home</NavLink>
                            <NavLink to='/info' activeClassName='active'>Info</NavLink>
                            <NavLink to='/faq' activeClassName='active'>FAQ</NavLink>
                        </nav>
                    </div>
                </Container>
            </header>
        );
    }
}

export default Header;