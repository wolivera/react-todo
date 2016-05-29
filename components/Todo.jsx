import React, { Component, PropTypes } from 'react'
import ListItem from 'material-ui/List'
import Checkbox from 'material-ui/Checkbox'

export default class Todo extends Component {
  render() {
    return (
      <ListItem 
      	primaryText={this.props.text} 
      />
    )
  }
}