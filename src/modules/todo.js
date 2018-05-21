export const ADD_TODO = 'todo/ADD_TODO'
export const TOGGLE_TODO = 'todo/TOGGLE_TODO'
export const REMOVE_TODO = 'todo/REMOVE_TODO'
export const INPUT_CHANGE = 'todo/INPUT_CHANGE'


const initialState = {
  todoList: [
    {
      text: 'first todo',
      checked: false,
      id: 0
    }
  ],
  inputText: 'temp'
}

export default (state = initialState, action) => {
  console.log(action)
  const actions = {

    [ADD_TODO]: action => {
      const newTodo = {
        text: action.payload,
        checked: false,
        id: Date.now()
      }
      const newTodoList = JSON.parse(JSON.stringify(state.todoList))
      newTodoList.push(newTodo)
      return ({
        ...state,
        todoList: newTodoList,
        inputText: ''
      })
    },

    [REMOVE_TODO]: action => {
      const idCurrentTask = action.payload
      const newTodoList = JSON.parse(JSON.stringify(state.todoList))
      const indexCurrentTask = (() => {
        let toggleTaskIndex = 0;
        newTodoList.forEach((task, index) => {
          if (task.id == idCurrentTask) {
            toggleTaskIndex = index
          }
        })
        return toggleTaskIndex
      })()
      newTodoList.splice(indexCurrentTask,1)
      return {
        ...state,
        todoList: newTodoList
      }
    },

    [TOGGLE_TODO]: action => {
      const idCurrentTask = action.payload
      const newTodoList = JSON.parse(JSON.stringify(state.todoList))

      const indexCurrentTask = (()=>{
        let toggleTaskIndex = 0;
        newTodoList.forEach((task,index) => {
          if (task.id == idCurrentTask) {
            toggleTaskIndex = index
          }
        })
        return toggleTaskIndex
      })()

      newTodoList[indexCurrentTask].checked = !newTodoList[indexCurrentTask].checked
      return {
        ...state,
        todoList: newTodoList
      }
    },

    [INPUT_CHANGE]: action => {
      return {
        ...state,
        inputText: action.payload
      }
    }

  }
  if (actions[action.type]) {
    return actions[action.type](action)
  } else {
    return state
  }

}

export const addTodo = ev => {
  return dispatch => {
    dispatch({
      type: ADD_TODO,
      payload: ev.target.dataset.value
    })
  }
}

export const removeTodo = ev => {
  ev.stopPropagation()
  return dispatch => {
    dispatch({
      type: REMOVE_TODO,
      payload: ev.target.dataset.id
    })
  }
}

export const toggleTodoChecked = ev => {
  return dispatch => {
    dispatch({
      type: TOGGLE_TODO,
      payload: ev.target.dataset.id
    })
  }
}

export const onInputChange = ev => {
  return dispatch => {
    dispatch({
      type: INPUT_CHANGE,
      payload: ev.target.value
    })
  }
}