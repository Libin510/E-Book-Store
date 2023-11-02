import React from "react";
import Modal from "react-bootstrap/Modal"; // You can use a modal library like react-bootstrap

function ConfirmModal(props) {
  return (
    <Modal show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Confirm Deletion</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Are you sure you want to delete this item?
      </Modal.Body>
      <Modal.Footer>
        <button className="btn btn-secondary" onClick={props.onHide}>
          Cancel
        </button>
        <button className="btn btn-danger" onClick={props.onConfirm}>
          Delete
        </button>
      </Modal.Footer>
    </Modal>
  );
}

export default ConfirmModal;
