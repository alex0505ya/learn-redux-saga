import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux'
import Counter from './Counter'
import reducer from './reducers'
const store = createStore(reducer)

const action = type => store.dispatch({ type })
function render(){
ReactDOM.render(<Counter
  value={store.getState()}
  onIncrement={() => action('INCREMENT')}
  onDecrement={() => action('DECREMENT')} />, document.getElementById('root'));
}
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
render()
store.subscribe(render)
serviceWorker.unregister();
