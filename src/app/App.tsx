import { hot } from 'react-hot-loader/root';

import React, { Suspense } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './pages/Home/Home';
const AppContainer = styled.div``;

interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = () => {
    return (
        <Suspense fallback={<div>Loading</div>}>
            <Router>
                <AppContainer>
                    <Route exact path="/" component={Home} />
                </AppContainer>
            </Router>
        </Suspense>
    );
};
export default hot(App);
