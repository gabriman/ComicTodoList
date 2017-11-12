import React, {Component} from 'react'
import styles from './input-text.css'
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';


class InputBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: ''
    };
    
    
    this.handlerInputChanged = this.handlerInputChanged.bind(this);
    this.handlerAddComic = this.handlerAddComic.bind(this);
  }
  
  handlerInputChanged(event) {
    this.setState({inputText: event.target.value});
  }
  
  handlerAddComic(event) {
    this.props.onPressAddComic(this.state.inputText);
    this.setState({inputText: ''});
  }
  
  
  render() {
    return (
      <div className={styles.box}>
        <TextField
          id='addComic'
          className={styles.input}
          value={this.state.inputText}
          onChange={this.handlerInputChanged}
          hintText="Add a comic!"
        />
        
        <FloatingActionButton
          className={styles.button}
          mini={true}
          disabled={this.state.inputText.length === 0}
          onClick={this.handlerAddComic}
        >
          <ContentAdd/>
        </FloatingActionButton>
      
      </div>
    );
  }
}

export default InputBox