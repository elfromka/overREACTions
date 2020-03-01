import React, { Component } from "react";
import todosData from "./todosData";
import TodoItem from "./components/TodoItem";
import "./App.css";
export default class App extends Component {
    constructor() {
        super();
        this.state = {
            todos: todosData
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    };
                }
                return todo;
            });
            return {
                todos: updatedTodos
            };
        });
    }

    render() {
        return (
            <div className="todo-list">
                {this.state.todos.map(todo => (
                    <TodoItem
                        key={todo.id}
                        todoInfo={todo}
                        handleChange={this.handleChange}
                    />
                ))}
            </div>
        );
    }
}
