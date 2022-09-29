import React from "react";
import { useState } from "react";
import { TodosResult } from "../TodosResults/TodosResult";
import "./Todos.scss";

const Todos = () => {
  const [todoName, setTodoName] = useState("");
  const [listOfTodos, setListOfTodos] = useState([]);
  /**
   * What if the todo is not a string value, but is object
   *
   * Challenge: make todo to be as this format and keep the same
   * behaveur of the app as now :)
   * {
   *    name: "todoName",
   *    id: "something unique",
   *    status: boolean
   * }
   * MEGA CHALLENGE: make functionallity for FINISHING the todo,
   * which means, we have to set the todo's status to TRUE
   * and change the color to green =)
   */

  const handleSetTodoName = (event) => {
    const name = event.target.value;

    setTodoName(name);
  };

  const handleAddTodo = () => {
    /**
     * 1. We will check if such todo is existing :)
     */
    setListOfTodos([...listOfTodos, todoName]);
    setTodoName("");
  };

  const handleRemoveTodo = (todoNameToRemove) => {
    const remainingTodos = listOfTodos.filter(
      (todo) => todo !== todoNameToRemove
    );

    setListOfTodos(remainingTodos);
  };

  return (
    <div className="todos">
      <input
        type="text"
        value={todoName || ""}
        className="todos__name"
        onChange={handleSetTodoName}
        placeholder="Enter todo name here"
      />
      <div onClick={handleAddTodo} className="todos__button">
        Add todo
      </div>

      <TodosResult
        listOfTodos={listOfTodos}
        handleRemoveTodo={handleRemoveTodo}
      />
    </div>
  );
};

export default Todos;
