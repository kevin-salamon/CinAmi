import React, { useRef, useState } from 'react'
import "../pagestyle.css";
import Modal from 'react-bootstrap/Modal';
import { saveMovie } from "../utils/API";

function NewMovieModal(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const titleRef = useRef();
    const pictureRef = useRef();
    const descriptionRef = useRef();
    const ratingRef = useRef();

    function handleSubmit(event) {
        event.preventDefault();
        const newMovie = {
            title: titleRef.current.value,
            picture: pictureRef.current.value,
            description: descriptionRef.current.value,
            rating: ratingRef.current.value,
        };

        console.log(`Adding movie: ${newMovie}`);
        saveMovie(newMovie)
            .then(res => {
                console.log(res)
                props.handleGetSavedMovies();
            });
        
        handleClose();
    }

    return (
        <>
            <button variant="primary" className="btn btn-info header-button" onClick={handleShow}>
                Add Movie
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
                                ref={titleRef}
                                type="text"
                                placeholder="Title"
                            />
                        </div>
                        <div className="form-group text-center">
                            <input
                                className="input"
                                ref={pictureRef}
                                type="text"
                                placeholder="Picture URL"
                            />
                        </div>
                        <div className="form-group text-center">
                            <input
                                className="input"
                                ref={descriptionRef}
                                type="text"
                                placeholder="Description"
                            />
                        </div>

                        <div className="form-group text-center">
                            <input
                                className="input"
                                ref={ratingRef}
                                type="text"
                                placeholder="Rating"
                            />
                        </div>

                    </form>

                </Modal.Body>
                <Modal.Footer className="text-center">
                    <button variant="primary" className="btn btn-info header-button" onClick={handleSubmit}>
                        Add Movie
                    </button>
                </Modal.Footer>

            </Modal>
        </>
    );
}

export default NewMovieModal;