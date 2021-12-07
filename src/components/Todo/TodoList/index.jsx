import Button from "../Button"
import { TodosContext } from "../../Todo";

import { useContext } from 'react';

export default function TodoList({ todosAll }) {
    const { todos, activity, edit } = useContext(TodosContext);
    const [ todosValue, setTodosValue ] = todos;
    const [ activityValue, setActivityValue ] = activity;
    const [ editValue, setEditValue ] = edit;

    const hapusHandler = (todoId) => {
        const filteredTodos = todosAll.filter( todo => {
            return todo.id !== todoId;
        })
          setTodosValue(filteredTodos);
          setActivityValue('');
          setEditValue('');
    }

    const ubahHandler = (todo) => {
          const newActivity = todo.activity;

          console.log(todo);
          setActivityValue(newActivity);
          setEditValue(todo);
    }

    const doneTodoHandler = (todo) => {
      const updatedTodo = {
        ...todo,
        done: !todo.done
      }

       const editTodoIndex = todosValue.findIndex((currentTodo) => {
         return currentTodo.id === todo.id;
       });

         const updatedTodos = [...todosValue];
         updatedTodos[editTodoIndex] = updatedTodo;

        return setTodosValue(updatedTodos);

    }



    return (
        <ul>
            { todosAll.map((todo, index) => {
                return (
                  <div className="todolist" key={`todo-${todo.id}}`}>
                    <li>
                      <input type="checkbox" checked={todo.done} onChange={doneTodoHandler.bind(this, todo)}/>
                      {todo.activity}
                      {todo.done ? ' selesai' : ' belum selesai'}
                      <div className="button-action">
                        <Button isSecondary onClick={ubahHandler.bind(this, todo)}>Ubah</Button>
                        <Button isDelete onClick={hapusHandler.bind(this, todo.id)}>Hapus</Button>
                      </div>
                    </li>
                  </div>
                );
            })}
        </ul>
    )
}
