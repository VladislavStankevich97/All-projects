import { connect } from "react-redux";
import Pagination from "@material-ui/lab/Pagination";
import {
  loadCharacters,
  rememberPage,
} from "../../redux/Rick and Morty/actions/loadAndPutCharacters";

function Pagination_({ page, pages, loadCharacters, rememberPage }) {
  const pageChange = (page) => {
    console.log(page);
    rememberPage(page);
    loadCharacters(page);
  };
  return (
    <div
      style={{
        height: "50px",
        opacity: "0.9",
        marginTop: "10px",
        borderRadius: "5rem",
        backgroundColor: "rgb(255, 255, 255)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Pagination
        count={pages}
        page={page}
        boundaryCount={2}
        color="primary"
        onChange={(event, page) => pageChange(page)}
        showFirstButton
        showLastButton
        size="large"
      />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    pages: state.putCharacters.pages,
    page: state.putCharacters.page,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadCharacters: (page) => dispatch(loadCharacters(page)),
    rememberPage: (page) => dispatch(rememberPage(page)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Pagination_);
