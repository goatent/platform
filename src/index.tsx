
import React, { Suspense } from 'react';
import * as ReactDOM from 'react-dom';

ReactDOM.render(
    <Suspense fallback={<div/>}>
        <div>
            test website
        </div>
    </Suspense>,
    document.getElementById('goat-react-id')
);
