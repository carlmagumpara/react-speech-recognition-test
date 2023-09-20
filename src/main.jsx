// yarn add core-js
// yarn add regenerator-runtime

// create .babelrc file in root folder
// 
// .babelrc file
// {
//   "plugins": [
//     ["@babel/plugin-transform-runtime",
//       {
//         "regenerator": true
//       }
//     ]
//   ]
// }

// Check documentation here https://github.com/JamesBrill/react-speech-recognition/blob/master/docs/API.md

// add this line
import 'core-js/actual';
import 'regenerator-runtime/runtime';

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
