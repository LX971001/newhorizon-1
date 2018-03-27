import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import Root from './router';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
