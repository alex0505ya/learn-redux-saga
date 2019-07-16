import React from 'react';
import { createStore } from 'redux'
import Counter from './Counter'
import reducer from './reducers'
const store = createStore(reducer)

const action = type => store.dispatch({ type })

function App() {
  return (
    <Counter
      value={store.getState()}
      onIncrement={() => action('INCREMENT')}
      onDecrement={() => action('DECREMENT')} /> )
}
store.subscribe(App)
export default App;
