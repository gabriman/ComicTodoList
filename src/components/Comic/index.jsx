import React, {Component} from 'react'

import styles from './comic.css'

class Comic extends Component {
  constructor(props){
    super(props);
  }
  
  render(){
    return (
    <div className={styles.comic}>
      <div className={styles.column1}>
        <div className={styles.name}>{this.props.name}</div>
        <div className={styles.author}>{this.props.author}</div>
      </div>
      <div className={styles.column2}>
        <picture>
          <img src={this.props.image} className={styles.image} />
          </picture>
      </div>
  
      
    </div>
    )
  }
  
  
}



export default Comic