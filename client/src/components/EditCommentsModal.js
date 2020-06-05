import React, { useRef, useState } from 'react'
import "../pagestyle.css";
import Modal from 'react-bootstrap/Modal';

function NewMovieModal(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <button variant="primary" className="btn btn-info header-button" onClick={handleShow}>
                Comments
            </button>

            <Modal show={show} onHide={handleClose}>

                <Modal.Header closeButton>
                    <Modal.Title className="modal-title">See what your friends said! </Modal.Title>
                </Modal.Header>

                <Modal.Body style={{ backgroundColor: "rgb(255, 179, 38)" }}>
                    <div className="comment-container">
                        {props.comments.map(comment => {
                            return(
                                <p>{comment}</p>
                            );
                        })}
                    </div>
                </Modal.Body>

            </Modal>
        </>
    );
}

export default NewMovieModal;