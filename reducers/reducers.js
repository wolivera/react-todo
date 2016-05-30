import { combineReducers } from 'redux'
import { mapValues, assign} from 'lodash/mapValues'
import { ADD_TODO, DONE_TODO } from '../actions/actions'
import * as types from '../actions/actionTypes'

function todo(state, action) {
  switch (action.type) {
	
    case types.ADD_TODO:
      return {
        id: action.id,
        text: action.text,
      }
			
    default:
    return state
   }
}

function done(state, action) {
  switch (action.type) {
  
    case types.DONE_TODO:
      return  mapValues(state, (task) => {
                return task.id === action.id ? assign({}, task, { active: !task.active }) : task
              })      
    default:
    return state
   }
}

function todos(state = [], action) {
  switch (action.type) {
	
    case types.ADD_TODO:
      return [
        ...state,
        todo(undefined, action)
      ]
    case types.DONE_TODO:
      return done(state, action)

    default:
    return state
   }
}


const todoApp = combineReducers({
  todos
})

export default todoApp
