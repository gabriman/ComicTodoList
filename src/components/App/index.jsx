import React, {Component} from 'react'
import 'normalize-css'

import styles from './app.css'
import Main from '../Main'
import Header from '../Header'


class App extends Component {
  constructor(){
    super();
  }
  
  render() {
    return (
      <div>
        <Header/>
        <Main/>
      </div>
    )
  }
}

export default App