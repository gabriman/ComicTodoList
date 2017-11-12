import React, {Component} from 'react'
import Comic from '../Comic'

import styles from './comics-list.css'

class ComicsList extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className={styles.root}>
        {this.props.comics.map(comic => {
            return (
              <Comic
                key={comic.id}
                name={comic.name}
                image={comic.image}
                author={comic.author}
              />
            )
          }
        ).reverse()}
      
      </div>
    )
  }
  
  
}

export default ComicsList