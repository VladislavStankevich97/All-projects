import React from "react";
import { connect } from "react-redux";
import { Checkbox } from "@material-ui/core";
import { deleteTodo, toggleTodo } from "../../redux/ToDo-List/actions/action";
import Footer from "./Footer";
import getSortedTodos from "../../redux/ToDo-List/selectors/todo";

function List(props) {
  const { todos, onToggleTodo, onDeleteTodo } = props;
  const handler = (id) => () => {
    onDeleteTodo(id);
  };
  return (
    <div>
      {todos.map((todo, index) => (
        <li
          key={todo.id}
          className={
            todo.completed ? "tasksCompleted" : "tasksUncompleted"
          }
        >
          <span>{`№ ${index + 1}`}</span>
          <span className="task">{todo.message}</span>
          <Checkbox
            checked={todo.completed}
            color="primary"
            inputProps={{ "aria-label": "secondary checkbox" }}
            title="Выполнить задачу"
            onClick={onToggleTodo(todo.id)}
          />
          <Checkbox
            defaultChecked
            indeterminate
            inputProps={{ "aria-label": "indeterminate checkbox" }}
            title="Удалить задачу"
            label="Uncontrolled"
            onClick={handler(todo.id)}
          />
        </li>
      ))}
      <Footer />

      <style jsx>{`
        .tasksCompleted {
          margin-top: 40px;
          display: flex;
          justify-content: space-between;
          font-size: 25px;
          text-decoration: line-through;
          font-weight: bold;
        }

        .tasksUncompleted {
          margin-top: 40px;
          display: flex;
          justify-content: space-between;
          font-size: 25px;
          font-weight: normal;
        }

        .task {
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
    onDeleteTodo: (id) => dispatch(deleteTodo(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
