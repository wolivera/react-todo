import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from './actions/actions'

import Header from './components/Header.jsx'
import AddTodo from './components/AddTodo.jsx'
import TodoList from './components/TodoList.jsx'

class App extends Component {
   render() {
      const { dispatch, todos } = this.props

      return (
         <div>
			   <Header/>
            <AddTodo
               onAddClick = {text =>
               dispatch(addTodo(text))}
            />
            <TodoList todos = {todos}/>
         </div>
      )
   }
}

function select(state) {
   return {
      todos: state.todos
   }
}

export default connect(select)(App)
