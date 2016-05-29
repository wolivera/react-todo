import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const style = {
  button: {
    marginLeft: 25
  },
  form: {
    textAlign: 'center',
    padding: 50
  },
  input: {
    width: '50%'
  } 
}

export default class AddTodo extends Component {
  render() {
    return (
      <div style={style.form}>
        <TextField
          floatingLabelFixed={true}
          floatingLabelText="Write something TODO"
          id="todo-input"
          style={style.input}
        />

        <FloatingActionButton 
          style={style.button}
          onMouseUp={(e) => this.handleClick(e)}
        >
          <ContentAdd />
        </FloatingActionButton>
        
      </div>
    )
  }

  handleClick(e) {
    const node = document.getElementById('todo-input')
    const text = node.value.trim()
    this.props.onAddClick(text)
    node.value = ''
  }
}