import React, { Suspense } from 'react';
import * as ReactDOM from 'react-dom';
import App from './app/App';

ReactDOM.render(
    <Suspense fallback={<div />}>
        <App />
    </Suspense>,
    document.getElementById('goat-react-id')
);
