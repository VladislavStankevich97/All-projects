import React, { useState } from "react";
import { connect } from "react-redux";
import { TextField, Button } from "@material-ui/core";
import { addTodo, input } from "../../redux/ToDo-List/actions/todoСhanges";
import { getText } from "../../redux/ToDo-List/selectors/globalSelectors.js";

function AddTodo({ onInput, onAddTodo, text }) {
  const changeInput = (event) => {
    onInput(event.target.value);
  };

  return (
    <div>
      <h1 style={{textAlign: "center"}}>ToDo-List</h1>
      <TextField
        id="standard-basic"
        label="Enter the task"
        placeholder="Your task"
        value={text}
        onChange={changeInput}
      />
      <Button
        variant="contained"
        color="primary"
        type="submit"
        style={{
          marginTop: "12px",
          marginLeft: "30px",
        }}
        onClick={onAddTodo}
      >
        add
      </Button>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    text: getText(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onInput: (text) => dispatch(input(text)),
    onAddTodo: (value) => dispatch(addTodo(value)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
