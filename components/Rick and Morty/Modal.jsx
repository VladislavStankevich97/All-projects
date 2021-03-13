import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { hideModal } from "../../redux/Rick and Morty/actions/modal";
import { connect } from "react-redux";
import classes from "../../styles/rick and morty/Table.module.css";

function Modal_({
  modal,
  hideModal,
  modalImage,
  modalName,
  modalStatus,
  modalSpecies,
  modalGender,
}) {
  return (
    <>
      <Modal
        className={classes.modal}
        open={modal}
        onClose={hideModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 1500,
        }}
      >
        <Fade in={modal}>
          <div className="fade">
            <img className="picture" src={modalImage} alt="logo" />
            <div className="textInModal">
              <h2>Name: {modalName}</h2>
              <p>Status: {modalStatus}</p>
              <p>Species: {modalSpecies}</p>
              <p>Gender: {modalGender}</p>
            </div>
          </div>
        </Fade>
      </Modal>
      <style jsx>{`
        .modal {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          margin-left: 620px;
          margin-top: 222px;
          width: 615px;
          height: 670px;
        }
        .picture {
          border-radius: 10px solid red;
          margin: 1rem;
          background-color: #363738;
          padding: 1rem;
          width: 300px;
        }

        .fade {
          background-color: #202329;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 615px;
          height: 570px;
        }

        .textInModal {
          margin-top: -20px;
          box-sizing: border-box;
          opacity: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          color: sandybrown;
          overflow: hidden;
        }
      `}</style>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    modal: state.modal.modal,
    modalImage: state.modal.image,
    modalName: state.modal.name,
    modalStatus: state.modal.status,
    modalSpecies: state.modal.species,
    modalGender: state.modal.gender,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    hideModal: () => dispatch(hideModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal_);
