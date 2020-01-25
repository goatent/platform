import React, { useState } from 'react';

import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { Col, Container, Row } from 'react-bootstrap';

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

    return (
        <Container>
            {data.rates.map((rate: any) => {
                return (
                    <Row key={rate.currency}>
                        {rate.currency}: {rate.rate}
                    </Row>
                );
            })}
        </Container>
    );
};
export default ApolloTest;
