import React, { useRef, useState } from 'react'
import "../pagestyle.css";
import Modal from 'react-bootstrap/Modal';
import { updateMovie} from "../utils/API";

function CommentsModal(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const commentRef = useRef();

    function handleUpdateMovie(movieId, movieData) {
        updateMovie(movieId, movieData)
          .then(props.handleGetSavedMovies())
          .catch(err => console.log(err));
    }

    function handleSubmit(event) {
        event.preventDefault();
        const newComment = {
            comments: commentRef.current.value,
        };

        handleUpdateMovie(props.movieId, newComment);
        
        handleClose();
    }

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
                        {props.comments.map(comment => {
                            return(         
                                    <p>"{comment}"</p>
                            );
                        })}
                    </div>

                    <form>
                        <div className="form-group text-center">
                            <input
                                className="input"
                                ref={commentRef}
                                type="text"
                                placeholder="New Comment"
                            />
                        </div>
                    </form>

                    <button variant="primary" className="btn btn-light header-button" style={{margin: "0 auto"}} onClick={handleSubmit}>
                        Add Comment
                    </button>

                </Modal.Body>
            </Modal>
        </>
    );
}

export default CommentsModal;