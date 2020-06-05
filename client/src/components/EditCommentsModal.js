import React, { useRef, useState } from 'react'
import "../pagestyle.css";
import Modal from 'react-bootstrap/Modal';
import { updateMovie} from "../utils/API";

function NewMovieModal(props) {
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
            <button variant="primary" className="btn btn-info header-button" onClick={handleShow}>
                Add Comment
            </button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className="modal-title">Add a new movie here </Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ backgroundColor: "rgb(255, 179, 38)" }}>
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

                </Modal.Body>
                <Modal.Footer className="text-center">
                    <button variant="primary" className="btn btn-info header-button" onClick={handleSubmit}>
                        Add Comment
                    </button>
                </Modal.Footer>

            </Modal>
        </>
    );
}

export default NewMovieModal;