import React from "react";
import { connect } from "react-redux";
import { Button } from "@material-ui/core";
import {
  showActive,
  showCompleted,
  showAll,
} from "../../redux/ToDo-List/actions/filters";
import { showTodos } from "../../redux/ToDo-List/selectors/globalSelectors.js";

function FilterTodos(props) {
  const {
    onButtonShowAll,
    onButtonShowActive,
    onButtonShowCompleted,
    onShow,
  } = props;
  return (
    <div
      style={{
        width: "800px",
        marginTop: "50px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      {onShow === 0 ? (
        <Button variant="outlined" onClick={onButtonShowAll}>
          All tasks are displayed
        </Button>
      ) : (
        <Button onClick={onButtonShowAll}>Show all tasks</Button>
      )}
      {onShow === 1 ? (
        <Button variant="outlined" color="primary" onClick={onButtonShowActive}>
          Active tasks are displayed
        </Button>
      ) : (
        <Button onClick={onButtonShowActive}>Show active tasks</Button>
      )}
      {onShow === 2 ? (
        <Button
          variant="outlined"
          color="secondary"
          onClick={onButtonShowCompleted}
        >
          Completed tasks are displayed
        </Button>
      ) : (
        <Button onClick={onButtonShowCompleted}>Show completed tasks</Button>
      )}
    </div>
  );
}
function mapStateToProps(state) {
  return {
    onShow: showTodos(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onButtonShowAll: () => dispatch(showAll()),
    onButtonShowActive: () => dispatch(showActive()),
    onButtonShowCompleted: () => dispatch(showCompleted()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterTodos);
