import React from "react";
import "./TodosResult.scss";

export const TodosResult = (props) => {
  const todos = props.listOfTodos;
  const handleRemoveTodo = props.handleRemoveTodo;

  //BLOCK__ELEMENT--MODIFIER
  return (
    <div className="results">
      {/* {todos.length > 0 && <h2>Tasks:</h2>} */}
      {/* Same as above :) but more cool ;) */}
      {!!todos.length && <h2>Tasks:</h2>}

      <div>
        {todos.map((todo) => (
          <div key={todo} className="results__todo">
            <h4>{todo}</h4>
            <div className="results__todo--options">
              <div onClick={() => handleRemoveTodo(todo)}>Delete</div>
              <div>Finished</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// {React.Children.map(todos, (child) => (
//     <div>{child}</div>
//   ))}
