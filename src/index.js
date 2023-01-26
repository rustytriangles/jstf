import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import * as serviceWorker from './serviceWorker';

class App extends React.Component {

    render() {
        return (
            <div>This is something</div>
        );
    }
}

ReactDOM.render(
    <>
        <App />
    </>,
    document.getElementById('root')
);

serviceWorker.unregister();
