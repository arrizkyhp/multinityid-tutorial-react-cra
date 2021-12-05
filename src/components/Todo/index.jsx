import Button from "./Button";
import { createContext, useState } from "react";
import TodoList from "./TodoList";

export const TodosContext = createContext({
    setTodosValue: () => {},
})

export default function Todo() {
    const [activity, setActivity] = useState("");
    const [todos, setTodos] = useState([]);

    const value = { todos: [todos, setTodos], activity: [activity, setActivity] };

    const generateId = () => {
        return Date.now();
    }

    const tambahHandler = (event) => {
        event.preventDefault();

        setTodos([...todos, {
            id: generateId(),
            activity: activity,
        }]);
        setActivity('');
    };

    return (
        <section className="todolist">
        <h1 className="header-todolist">Simple Todo List</h1>
        <form onSubmit={tambahHandler}>
            <input
            type="text"
            placeholder="Nama Aktifitas"
            value={activity}
            onChange={(event) => {
                setActivity(event.target.value);
            }}
            />
            <Button isPrimary>Tambah</Button>
        </form>
        <TodosContext.Provider value={value}>
            <TodoList todosAll={todos} />
        </TodosContext.Provider>

        </section>
    );
}
