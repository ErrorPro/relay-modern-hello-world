import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { setEnviroment } from 'relay-compose';
import relayEnv from './createRelayEnvironment'

setEnviroment(relayEnv);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
