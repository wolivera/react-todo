import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';

const styles = {
  title : {
    'textAlign': 'center',
	'fontWeight': '100'
  }
}

export default class Header extends Component {
  render() {
    return (
      <AppBar
	    title={ <div style={styles.title}>React TODO</div> }
	    showMenuIconButton={false}
	    iconClassNameRight="icon-github"
	  />
    )
  }
}
