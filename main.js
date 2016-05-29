import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

import React from 'react'

import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import App from './App.jsx'
import todoApp from './reducers/reducers'

let store = createStore(todoApp)

let rootElement = document.getElementById('app')

render(
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <Provider store = {store}>
      <App />
    </Provider>
  </MuiThemeProvider>,
	
  rootElement
)
