import React from 'react';
import styles from './App.scss';
import Home from '../Home/HomeContainer.js';
import Info from '../Info/Info';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout.js';
import Faq from '../FAQ/FAQ.js';
import { AnimatedSwitch } from 'react-router-transition';
import List from '../List/ListContainer.js';

const App = () => (
    <Router>
        <MainLayout>
            <AnimatedSwitch
                atEnter={{ opacity: 0 }}
                atLeave={{ opacity: 0 }}
                atActive={{ opacity: 1 }}
                className={styles.switchWrapper}
            >
                <Route exact path='/' component={Home} />
                <Route exact path='/info' component={Info} />
                <Route exact path='/faq' component={Faq} />
                <Route exact path="/list/:id" component={List} />
            </AnimatedSwitch>
        </MainLayout>
    </Router>
);

export default App;