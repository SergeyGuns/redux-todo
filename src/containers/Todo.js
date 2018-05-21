import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { addTodo, onInputChange, toggleTodoChecked, removeTodo } from '../modules/todo'
import './Todo.css'

const Todo = props => (
  <div className='to-do'>
    {
      props.todoList.map(list => (
        <div 
          data-id={list.id}
          key={list.id}
          onClick={props.toggleTodoChecked}
          className={`to-do__list ${list.checked ? 'to-do__list--checked':''}`}>
          {list.text}
          <div  
            onClick={props.removeTodo}
            data-id={list.id} 
            className='to-do__delete'>[x]</div>
        </div>
      ))
    }
    <div className='input-wrapper'>
      <input value={props.inputText} onChange={props.onInputChange} type='text' />
      <button data-value={props.inputText} onClick={props.addTodo} > ADD </button>
    </div>
  </div>
)

const mapStateToProps = state => ({
  todoList: state.todo.todoList,
  inputText: state.todo.inputText
})

const mapDispatchToProps = dispatch => bindActionCreators({
  addTodo,
  onInputChange,
  toggleTodoChecked,
  removeTodo
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo)