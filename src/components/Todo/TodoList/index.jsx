import Button from "../Button"
import { TodosContext } from "../../Todo";

import { useContext } from 'react';

export default function TodoList({ todosAll }) {
    const { todos, activity } = useContext(TodosContext);
    const [ todosValue, setTodosValue ] = todos;
    const [ activityValue, setActivityValue ] = activity;

    const hapusHandler = (todoId) => {
        const filteredTodos = todosAll.filter( todo => {
            return todo.id !== todoId;
        })
          setTodosValue(filteredTodos);
    }

    const ubahHandler = (todoId) => {
          const filteredTodos = todosAll.filter((todo) => {
            return todo.id === todoId;
          });

          const newActivity = filteredTodos[0].activity;
          setActivityValue(newActivity);

    }



    return (
        <ul>
            { todosAll.map((todo, index) => {
                return (
                  <div className="todolist" key={`todo-${todo.id}}`}>
                    <li>
                      {todo.activity}
                      <div className="button-action">
                        <Button isSecondary onClick={ubahHandler.bind(this, todo.id)}>Ubah</Button>
                        <Button isDelete onClick={hapusHandler.bind(this, todo.id)}>Hapus</Button>
                      </div>
                    </li>
                  </div>
                );
            })}
        </ul>
    )
}
