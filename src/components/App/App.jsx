import React from 'react';
import ReactDOM from 'react-dom';

import Reader from '../Reader'

import publications from '../../db/publications.json';

const App = () => (
    ReactDOM.render(
        <Reader items={publications} />,
        document.getElementById('root'),
    )
);

export default App;
