import React, { useRef, useState } from 'react'
import "../pagestyle.css";
import Modal from 'react-bootstrap/Modal';
import { updateMovie} from "../utils/API";

function CommentsModal(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const commentRef = useRef();
    const ratingRef = useRef();

    function handleUpdateMovie(movieId, movieData) {
        updateMovie(movieId, movieData)
          .then(props.handleGetSavedMovies())
          .catch(err => console.log(err));
    }

    function handleSubmit(event) {
        event.preventDefault();

        const newComment = {
            comments: commentRef.current.value
        };

        const newRating = {
            rating: ratingRef.current.value
        };

        handleUpdateMovie(props.movieId, newComment);
        handleUpdateMovie(props.movieId, newRating);
        
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
                    {!props.comments.length ? (
                            <p style={{margin: "10%", textDecoration: "underline", fontSize: "20px"}}>There aren't any reviews here yet. Log-in to create your very own review!</p>
                        ) : (
                            props.comments.map(comment => {
                                return(         
                                    <p>- '{comment}'</p>
                                );
                            })
                        )}
                    </div>
                    <div className="review-container">
                        <form>
                            <div className="form-group text-center">
                                <input
                                    style={{width: "300px"}}
                                    className="input"
                                    ref={commentRef}
                                    type="text"
                                    placeholder="New Comment"
                                />
                            </div>
                        </form>

                        <select name="rating" ref={ratingRef}>
                            <option value="1">1 star</option>
                            <option value="2">2 star</option>
                            <option value="3">3 star</option>
                            <option value="4">4 star</option>
                            <option value="5">5 star</option>
                        </select>
                    </div>

                    <button className="btn btn-light header-button" style={{margin: "0 auto"}} onClick={handleSubmit}>
                        Add Review
                    </button>

                </Modal.Body>
            </Modal>
        </>
    );
}

export default CommentsModal;