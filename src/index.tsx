import React, { Suspense } from 'react';
import * as ReactDOM from 'react-dom';
import App from './app/App';
import { Normalize } from 'styled-normalize';
import GlobalStyles from './app/styles/GlobalStyles';

ReactDOM.render(
    <Suspense fallback={<div />}>
        <Normalize />
        <GlobalStyles />
        <App />
    </Suspense>,
    document.getElementById('goat-react-id')
);
