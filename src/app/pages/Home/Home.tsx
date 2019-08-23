import React, { useState } from 'react';

interface IHomeProps {}

const Home: React.FunctionComponent<IHomeProps> = props => {
    const [currentState, setCurrentState] = useState(null);
    return <div>Home components</div>;
};
export default Home;
