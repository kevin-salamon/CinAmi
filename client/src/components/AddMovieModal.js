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

    function handleSubmit(event) {
        event.preventDefault();
        const newMovie = {
            title: titleRef.current.value,
            picture: pictureRef.current.value,
            description: descriptionRef.current.value,
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
            <button className="btn btn-info header-button-add" style={{margin: "0 auto"}} onClick={handleShow}>
                Add Movie
            </button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header style={{backgroundColor: "#4C4E49", color: "white"}} closeButton>
                    <Modal.Title style={{fontFamily: "'Roboto Slab', serif", fontSize: "30px"}}>Add Movie</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ backgroundColor: "#39AEC5", borderBottomLeftRadius: "5px", borderBottomRightRadius: "5px"}}>
                    <form>

                        <div className="form-group text-center">
                            <label>Title: </label><br/>
                            <input
                                className="input"
                                ref={titleRef}
                                type="text"
                                placeholder="Title"
                            />
                        </div>
                        <div className="form-group text-center">
                            <label>Picture URL: </label><br/>
                            <input
                                className="input"
                                ref={pictureRef}
                                type="text"
                                placeholder="Picture URL"
                            />
                        </div>
                        <div className="form-group text-center">
                            <label>Description: </label><br/>
                            <input
                                className="input"
                                ref={descriptionRef}
                                type="text"
                                placeholder="Description"
                            />
                        </div>
                    </form>

                    <button className="btn btn-light header-button" style={{margin: "0 auto"}} onClick={handleSubmit}>
                        Submit
                    </button>

                </Modal.Body>

            </Modal>
        </>
    );
}

export default NewMovieModal;