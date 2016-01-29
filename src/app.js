import React from 'react';
import ReactDOM from 'react-dom';
import { ReduxRouter } from 'redux-router';
import { Provider } from 'react-redux';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools';

import routes from './routes';
import configureStore from './store';

const store = configureStore();

let rootElement = null;

if (process.env.DEVTOOLS) {
  console.info('redux devtools active, to hide the panel: ctrl+H, to change position: ctrl+Q - for more infos', 'https://github.com/gaearon/redux-devtools');
  rootElement = (
    <Provider store={store}>
      <div>
        {routes}
        <DebugPanel right top bottom>
          <DevTools store={store} monitor={LogMonitor}/>
        </DebugPanel>
      </div>
    </Provider>
  );
} else {
  rootElement = (
    <Provider store={store}>
      {routes}
    </Provider>
  );
}


document.onreadystatechange = function () {
  var state = document.readyState;
  if (state == 'complete') {
    ReactDOM.render(rootElement, document.getElementById('root'));
  }
};
