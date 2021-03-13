import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { loadCharacters } from "../../../redux/Rick and Morty/actions/loadAndPutCharacters";
import { connect } from "react-redux";
import {
  showStatus,
  showSpecies,
  showGender,
} from "../../../redux/Rick and Morty/actions/filters";
import classes from  "./SelectStatus.module.css";

function SelectStatus({
  onloadCharacters,
  page,
  showStatus,
  showSpecies,
  showGender,
}) {
  const handleChangeStatus = (event) => {
    showStatus(event.target.value);
    onloadCharacters(page, event.target.value);
  };
  const handleChangeSpecies = (event) => {
    showSpecies(event.target.value);
    onloadCharacters(page, null, event.target.value);
  };
  const handleChangeGender = (event) => {
    showGender(event.target.value);
    onloadCharacters(page, null, null, event.target.value);
  };

  return (
    <div className={classes.selectStatus}>
      <FormControl className={classes.FormControl}>
        <InputLabel className={classes.InputLabel}>Status</InputLabel>
        <Select onChange={handleChangeStatus}>
          <MenuItem value={"alive"}>Alive</MenuItem>
          <MenuItem value={"unknown"}>Unknown</MenuItem>
          <MenuItem value={"dead"}>Dead</MenuItem>
        </Select>
      </FormControl>

      <FormControl className={classes.FormControl}>
        <InputLabel className={classes.InputLabel}>Species</InputLabel>
        <Select onChange={handleChangeSpecies}>
          <MenuItem value={"Human"}>Human</MenuItem>
          <MenuItem value={"Alien"}>Alien</MenuItem>
          <MenuItem value={"Humanoid"}>Humanoid</MenuItem>
          <MenuItem value={"Animal"}>Animal</MenuItem>
        </Select>
      </FormControl>

      <FormControl className={classes.FormControl}>
        <InputLabel className={classes.InputLabel}>Gender</InputLabel>
        <Select onChange={handleChangeGender}>
          <MenuItem value={"Male"}>Male</MenuItem>
          <MenuItem value={"Female"}>Female</MenuItem>
          <MenuItem value={"Genderless"}>Genderless</MenuItem>
          <MenuItem value={"unknown"}>Unknown</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    showStatus: (status) => dispatch(showStatus(status)),
    showSpecies: (species) => dispatch(showSpecies(species)),
    showGender: (gender) => dispatch(showGender(gender)),
    onloadCharacters: (page, status, species, gender) =>
      dispatch(loadCharacters(page, status, species, gender)),
  };
};

export default connect(null, mapDispatchToProps)(SelectStatus);
