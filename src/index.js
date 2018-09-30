import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import FlipCounter from './FlipCounter';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {createStore} from 'redux';


// const store = createStore(setValues);

// function setValues(state = [], action) {
//     if (action.type === 'VALUE_CHANGE') {
//       return [
//         ...state,
//         action.payload
//       ]
//     }
//     return state;
//   }
  

// store.dispatch({type: 'VALUE_CHANGE', payload: name});

ReactDOM.render(<FlipCounter value={1205} />,
document.getElementById('root'));
registerServiceWorker();
