import React, { useState } from 'react';
import styled from 'styled-components';
import ApolloTest from '../../components/Tests/ApolloTest';

const Test = styled.div`
    font-size: 22px;
`;
interface IHomeProps {}

const Home: React.FunctionComponent<IHomeProps> = props => {
    const [currentState, setCurrentState] = useState(null);
    return (
        <Test>
            Home componendawefats
            <ApolloTest />
        </Test>
    );
};
export default Home;
