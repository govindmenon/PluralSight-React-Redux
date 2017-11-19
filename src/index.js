import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import App from './components/App'
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursesPage from './components/courses/CoursesPage';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';

const store = configureStore();

render(
    <Provider store={store}>
    <BrowserRouter>
        <Switch>
            <Route exact path="/">
                <App children={<HomePage/>}/>
            </Route>
            <Route path="/about">
                <App children={<AboutPage/>}/>
            </Route>
            <Route path="/courses">
                <App children={<CoursesPage/>}/>
            </Route>
        </Switch>
    </BrowserRouter>
    </Provider>,
    document.getElementById('app')
);