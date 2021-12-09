import Button from "./Button";
import { createContext, useState } from "react";
import TodoList from "./TodoList";
import { Link, Outlet } from "react-router-dom";

export const TodosContext = createContext({
    setTodosValue: () => {},
})

export default function Todo() {
    const [activity, setActivity] = useState("");
    const [edit, setEdit] = useState({});
    const [todos, setTodos] = useState([]);

    const [message, setMessage ] = useState('');

    const value = {
        todos: [todos, setTodos],
        activity: [activity, setActivity],
        edit: [edit, setEdit]
    };

    const generateId = () => {
        return Date.now();
    }

    const simpanHandler = (event) => {
        event.preventDefault();

        if (!activity) {
            return setMessage('Nama Aktifitas tidak boleh kosong!');
        }

        setMessage("");

        if(edit.id) {

            if (!activity) {
              return setMessage("Nama Aktifitas tidak boleh kosong!");
            }

            const updatedTodo = {
                ...edit,
                activity,
                done: todos[0].done,
            }

            const editTodoIndex = todos.findIndex( todo => {
                return todo.id ===  edit.id
            })

            const updatedTodos = [
                ...todos,
            ]

            updatedTodos[editTodoIndex] = updatedTodo;

            setTodos(updatedTodos);

            return batalUbahHandler();
        }

        setTodos([...todos, {
            id: generateId(),
            activity: activity,
            done: false,
        }]);
        setActivity('');
    };

    const batalUbahHandler = () => {
        setActivity("");
        setEdit({});
        setMessage("");

    }

    return (
      <section className="todolist">
        <h1 className="header-todolist">Simple Todo List</h1>
        <Link to="/todo/about" >Tentang Todo ini</Link>
        {message && <p style={{ margin: 0 }}>{message}</p>}
        <form onSubmit={simpanHandler}>
          <input
            type="text"
            placeholder="Nama Aktifitas"
            value={activity}
            onChange={(event) => {
              setActivity(event.target.value);
            }}
          />
          <Button isPrimary>{edit.id ? "Simpan Perubahan" : "Tambah"}</Button>
          { edit.id &&
          <Button isSecondary onClick={batalUbahHandler}>Batal Ubah</Button>
          }
        </form>
        { todos.length > 0 ? (
            <TodosContext.Provider value={value}>
                <TodoList todosAll={todos} />
            </TodosContext.Provider>
        ) : <p>belum ada todo</p>}
        <Outlet />
      </section>
    );
}
