import React from 'react';
import { BrowserRouter, HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import ScrollToTop from './components/scrollToTop/scrollToTop.component';
import ReactDOM from 'react-dom';
import App from './containers/App/app';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

import { store, persistor } from './redux/store';

ReactDOM.render(
  <Provider store={store} >
    <HashRouter basename='/kopo-merch' >
      <ScrollToTop />
      <PersistGate persistor={persistor} >
        <App />
      </PersistGate>
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
