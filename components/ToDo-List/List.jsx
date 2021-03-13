import React from "react";
import { connect } from "react-redux";
import { Checkbox } from "@material-ui/core";
import { deleteTodo, toggleTodo } from "../../redux/ToDo-List/actions/todoСhanges";
import getSortedTodos from "../../redux/ToDo-List/selectors/todo";

function List({ todos, onToggleTodo, onDeleteTodo }) {
  return (
    <div>
      {todos.map((todo, index) => (
        <li
          key={todo.id}
          className={todo.completed ? "tasksCompleted" : "tasksUncompleted"}
        >
          <span>{`№ ${index + 1}`}</span>
          <span className="task">{todo.message}</span>
          <Checkbox
            checked={todo.completed}
            color="primary"
            inputProps={{ "aria-label": "secondary checkbox" }}
            title="Completed task"
            onClick={onToggleTodo(todo.id)}
          />
          <Checkbox
            defaultChecked
            indeterminate
            inputProps={{ "aria-label": "indeterminate checkbox" }}
            title="Deleted task"
            label="Uncontrolled"
            onClick={onDeleteTodo(todo.id)}
          />
        </li>
      ))}

      <style jsx>{`
        .tasksCompleted {
          margin-top: 40px;
          display: flex;
          justify-content: space-around;
          align-items: center;
          font-size: 25px;
          text-decoration: line-through;
          font-weight: bold;
        }

        .tasksUncompleted {
          margin-top: 40px;
          display: flex;
          justify-content: space-around;
          align-items: center;
          font-size: 25px;
          font-weight: normal;
        }

        .task {
          display: flex;
          justify-content: space-around;
          align-items: center;
          margin: 0px 30px;
          width: 600px;
          max-width: 600px;
          word-break: break-all;
        }
      `}</style>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    todos: getSortedTodos(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onToggleTodo: (id) => () => dispatch(toggleTodo(id)),
    onDeleteTodo: (id) => () => dispatch(deleteTodo(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
