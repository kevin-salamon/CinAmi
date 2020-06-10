import React, { useState } from 'react'
import "../pagestyle.css";
import Modal from 'react-bootstrap/Modal';

function CommentsModalNotLogged(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <button variant="primary" className="btn btn-info comment-button" onClick={handleShow}>
                Reviews
            </button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className="modal-title">Current Reviews</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ backgroundColor: "#39AEC5", borderBottomLeftRadius: "5px", borderBottomRightRadius: "5px"}}>

                    <div className="comment-container">
                        {!props.comments.length ? (
                            <p style={{margin: "10%", textDecoration: "underline", fontSize: "20px"}}>There aren't any reviews here yet. Log-in to create your very own review!
                            Don't forget that each user can only review each movie once.
                            </p>
                        ) : (
                            props.comments.map(comment => {
                                return(         
                                    <p>- '{comment}'</p>
                                );
                            })
                        )}
                    </div>

                </Modal.Body>
            </Modal>
        </>
    );
}

export default CommentsModalNotLogged;