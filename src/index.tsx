import React, { Suspense } from 'react';
import * as ReactDOM from 'react-dom';
import App from './app/App';
import { Normalize } from 'styled-normalize';

ReactDOM.render(
    <Suspense fallback={<div />}>
        <Normalize />
        <App />
    </Suspense>,
    document.getElementById('goat-react-id')
);
