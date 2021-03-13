import React from "react";
import CharactersTable from "./CharactersTable";
import SelectStatus from "./SelectStatus";
import Pagination_ from "./Pagination";
import Modal_ from "./Modal";

function App() {
  return (
      <div
        style={{
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <CharactersTable />
        <Modal_ />
        <Pagination_ />
        <SelectStatus />
      </div>
  );
}

export default App;
