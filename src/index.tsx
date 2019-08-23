import React, { Suspense } from 'react';
import * as ReactDOM from 'react-dom';
import App from './app/App';
import { Normalize } from 'styled-normalize';
import GlobalStyles from './app/styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import theme from './app/styles/theme';

ReactDOM.render(
    <Suspense fallback={<div />}>
        <ThemeProvider theme={theme}>
            <>
                <Normalize />
                <GlobalStyles />
                <App />
            </>
        </ThemeProvider>
    </Suspense>,
    document.getElementById('goat-react-id')
);
