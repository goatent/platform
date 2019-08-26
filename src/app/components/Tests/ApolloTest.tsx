import React, { useState } from 'react';

import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

interface IApolloTestProps {}

const ApolloTest: React.FunctionComponent<IApolloTestProps> = props => {
    const { loading, error, data } = useQuery<any, any>(gql`
        {
            rates(currency: "USD") {
                currency
                rate
            }
        }
    `);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    //@ts-ignore
    return data.rates.map(({ currency, rate }) => (
        <div key={currency}>
            <p>
                {currency}: {rate}
            </p>
        </div>
    ));
};
export default ApolloTest;
