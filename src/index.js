// import React
import React from 'react';
import ReactDOM from 'react-dom';

// import font awesome
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';

// importing component
import App from './containers/App';

import './style/main.css';

ReactDOM.render(
    <div className={"app-container"}>
        <App/>
    </div>,
    document.getElementById('root')
);
