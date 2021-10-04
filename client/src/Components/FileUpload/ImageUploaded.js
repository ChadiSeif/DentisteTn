import React from "react";
import { Modal, Button } from "react-bootstrap";
import { IoDocumentAttachOutline } from "react-icons/io5";

const ImageUploaded = ({ Rdv }) => {
  const link = Rdv.image.substring(14);
  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Patient {Rdv.user.nom}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={`http://localhost:3000/${link}`}
            alt="patientupload"
            style={{ width: "720px" }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div>
      {" "}
      <>
        <IoDocumentAttachOutline onClick={() => setModalShow(true)} />

        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    </div>
  );
};

export default ImageUploaded;
