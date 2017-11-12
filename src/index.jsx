import React from 'react'
import { render } from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import App from './components/App'

const MyApp = () => (
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>
);

render(<MyApp />, document.getElementById('root'));
