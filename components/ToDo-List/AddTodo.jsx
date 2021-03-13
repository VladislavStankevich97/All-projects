import React from "react";
import { connect } from "react-redux";
import { TextField, Button } from "@material-ui/core";
import { addTodo } from "../../redux/ToDo-List/actions/action";

function AddTodo({ onAddTodo }) {
  const userInpur = (e) => {
    e.preventDefault();
    const input = e.target.userInput.value;
    onAddTodo(input);
    e.target.userInput.value = "";
  };

  return (
    <div>
      <h1>ToDo-List</h1>
      <form onSubmit={userInpur}>
        <TextField
          id="standard-basic"
          label="Enter the task"
          placeholder="Your task"
          name="userInput"
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          style={{
            marginTop: "12px",
            marginLeft: "30px",
          }}
        >
          add
        </Button>
      </form>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    value: state.headerReducer.value,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onInput: (value) => dispatch(input(value.target.value)),
    onAddTodo: (value) => dispatch(addTodo(value)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
