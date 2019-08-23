import React, { useState } from 'react';
import styled from 'styled-components';

const AppContainer = styled.div`
    margin: 24px;
`;

interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = props => {
    const [currentState, setCurrentState] = useState(null);
    return <AppContainer> this is the app</AppContainer>;
};
export default App;
