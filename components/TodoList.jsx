import React, { Component, PropTypes } from 'react'
import {List, ListItem} from 'material-ui/List'
import Checkbox from 'material-ui/Checkbox'
import Paper from 'material-ui/Paper';
import Todo from './Todo.jsx'

const style = {
  paper: {
    margin: 'auto',
    width: '50%'
  }
}

export default class TodoList extends Component {
  render() {
    return (
      <Paper style={style.paper}>
        <List>
          {this.props.todos.map(todo =>
            <ListItem 
              id={todo.id}
              key={todo.id}
              primaryText={todo.text} 
              leftCheckbox={<Checkbox />}
            />
          )}
        </List>
      </Paper>
    )
  }
}