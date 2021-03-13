import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { useEffect } from "react";
import { loadCharacters } from "../../redux/Rick and Morty/actions/loadAndPutCharacters";
import { connect } from "react-redux";
import { showModal } from "../../redux/Rick and Morty/actions/modal";
import { CircularProgress } from "@material-ui/core";
import classes from "../../styles/rick and morty/Table.module.css";

const columns = [
  { field: "id", headerName: "№", width: 70, align: "center" },
  { field: "name", headerName: "Name", width: 150, align: "center" },
  { field: "status", headerName: "Status", width: 130, align: "center" },
  { field: "species", headerName: "Species", width: 120, align: "center" },
  { field: "gender", headerName: "Gender", width: 120, align: "center" },
];

function CharactersTable({
  onloadCharacters,
  characters,
  showModal,
  loader,
}) {
  useEffect(() => {
    onloadCharacters();
  }, [onloadCharacters]);

  characters.map((character) => {
    return {
      id: character.id,
      name: character.name,
      status: character.status,
      species: character.species,
      gender: character.gender,
    };
  });

  const onShowModal = (character) => {
    showModal(character);
  };

  return (
    <div>
      <div className={classes.container}>
        {/* <div>
        <CircularProgress classes="loader"/> 
        </div>
        <div className="loader">
        <CircularProgress size={300} className="loader"/> 
        </div> */}
        {loader ? (
          <CircularProgress className={classes.loader} />
        ) : (
          <DataGrid
            className={classes.DataGrid}
            rows={characters}
            columns={columns}
            pageSize={10}
            disableColumnMenu
            disableColumnSelector
            hideFooter
            autoHeight
            autoPageSize
            onRowClick={onShowModal}
          />
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    characters: state.putCharacters.characters,
    loader: state.loader.loader,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onloadCharacters: () => dispatch(loadCharacters()),
    showModal: (character) => dispatch(showModal(character)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CharactersTable);




