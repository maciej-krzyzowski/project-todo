import React from 'react';
import Home from '../Home/HomeContainer.js';
import Info from '../Info/Info';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout.js';
import Faq from '../FAQ/FAQ.js';

const App = () => (
    <Router>
        <MainLayout>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/info' component={Info} />
                <Route path='/faq' component={Faq} />
            </Switch>
        </MainLayout>
    </Router>
);

export default App;