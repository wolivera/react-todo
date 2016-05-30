import React, { Component, PropTypes } from 'react'
import {List, ListItem} from 'material-ui/List'
import Checkbox from 'material-ui/Checkbox'
import Paper from 'material-ui/Paper'

const style = {
  item: {
    margin: 'auto',
    width: '50%'
  }
}

export default class TodoList extends Component {
  render() {
    if(this.props.todos.length > 0){
      return (
        <div className="list-wrapper">
          <h2 className="title">Active</h2>
          <List>
            {this.props.todos.map(todo =>
              <ListItem 
                id={todo.id}
                key={todo.id}
                className="list-item"
                primaryText={todo.text} 
                leftCheckbox={<Checkbox />}
              />
            )}
          </List>
        </div>
      )
    } else {
      return null;
    }
  }
}