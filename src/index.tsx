import React, { Suspense } from 'react';
import * as ReactDOM from 'react-dom';
import App from './app/App';
import { Normalize } from 'styled-normalize';
import GlobalStyles from './app/styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import theme from './app/styles/theme';
import AppApolloClient from './app/models/AppApolloClient';
import { ApolloProvider } from '@apollo/react-hooks';
import './app/translations/i18n';
import 'bootstrap/dist/css/bootstrap.min.css';
ReactDOM.render(
    <Suspense fallback={<div />}>
        <ApolloProvider client={AppApolloClient}>
            <ThemeProvider theme={theme}>
                <>
                    <Normalize />
                    <GlobalStyles />
                    <App />
                </>
            </ThemeProvider>
        </ApolloProvider>
    </Suspense>,
    document.getElementById('react-main-id')
);
