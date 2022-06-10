import React, {useState} from 'react'
import TodoForm from './TodoForm'
import { RiCloseCirlcleLine} from 'react-icons'
import { TiEdit} from 'react-icons/ti'

function Todo({ todos, completeTodo}) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })

  return todos.map((todo, index) => (
    <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={indext}>
        <div key={todo.id} onClick={() => completeTodo(todo.id)}>
            {todo.text}
        </div>
        <div className='icons'>
            <RiCloseCircleLine />
            <TiEdit />
        </div>
        

    </div>
  ))
}

export default Todo