import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './pages/Home/Home';
const AppContainer = styled.div`
    background: ${props => props.theme.colors.red};
`;

interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = () => {
    return (
        <Router>
            <AppContainer>
                <Route exact path="/" component={Home} />
            </AppContainer>
        </Router>
    );
};
export default App;
