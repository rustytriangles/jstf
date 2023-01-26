import './index.css'
import * as serviceWorker from './serviceWorker';
import * as tf from '@tensorflow/tfjs';
import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {

    render() {
        const x = tf.tensor2d([[Math.random(), Math.random()],
                               [Math.random(), Math.random()]])

        return (
            <div>{"x = " + x}</div>
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
