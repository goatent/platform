import React from 'react';
import styled from 'styled-components';

const AppContainer = styled.div`
    margin: 24px;
`;

interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = () => {
    return <AppContainer> this is the app</AppContainer>;
};
export default App;
