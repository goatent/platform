import React, { Suspense } from 'react';
import * as ReactDOM from 'react-dom';
import App from './app/App';
import { Normalize } from 'styled-normalize';
import GlobalStyles from './app/styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import theme from './app/styles/theme';
import GoatApolloClient from './app/models/GoatApolloClient';
import { ApolloProvider } from '@apollo/react-hooks';

ReactDOM.render(
    <Suspense fallback={<div />}>
        <ApolloProvider client={GoatApolloClient}>
            <ThemeProvider theme={theme}>
                <>
                    <Normalize />
                    <GlobalStyles />
                    <App />
                </>
            </ThemeProvider>
        </ApolloProvider>
    </Suspense>,
    document.getElementById('goat-react-id')
);
