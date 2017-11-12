import React, {Component} from 'react'
import uuid from 'uuid'

import ComicsList from '../ComicsList'
import styles from './main.css'


class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comicList : [
        {
          id: uuid.v4(),
          name : 'From Hell',
          image : 'https://images-na.ssl-images-amazon.com/images/I/41OxHICxKLL._SX319_BO1,204,203,200_.jpg',
          author : 'Allan Moore'
        },
        {
          id: uuid.v4(),
          name : 'Paper Girls 1',
          image : 'https://static4planetadelibroscom.cdnstatics.com/usuaris/libros/fotos/214/m_libros/portada_paper-girls-n01_brian-kvaughan_201603291547.jpg',
          author : 'Brian K.Vaughan'
        },
        {
          id: uuid.v4(),
          name : 'Low: Volume 1',
          image : 'http://www.normaeditorial.com/libros_img/01311020101_g.jpg',
          author : 'Rick Remember'
        }]
    }
  }
  
  render() {
    return (
      <div className={styles.root}>
        <ComicsList comics = {this.state.comicList} />
      </div>
    )
  }
  
  
}

export default Main