import React, { useRef, useState } from 'react'
import "../pagestyle.css";
import Modal from 'react-bootstrap/Modal';
import { checkAuthUser } from "../utils/API";


function LoginModal(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const emailRef = useRef();
    const passwordRef = useRef();

    function handleSubmit(event) {
        event.preventDefault();
        const user = {
            email: emailRef.current.value,
            password: passwordRef.current.value
        };

        console.log(`checking user: ${user}`);
        checkAuthUser(user)
            .then(res => {
                console.log(res);
                localStorage.setItem("ca-jwtToken", res.data.token);
                localStorage.setItem("ca-jwtUser", res.data.user.name);
                props.handleGetSavedMovies();
            })
            .catch(err => alert("Sorry, those login credentials didn't match our database. Please try again."));
        
        handleClose();

    }

    return (
        <>
            <button className="btn btn-info header-button" onClick={handleShow}>
                Log-in
            </button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header style={{backgroundColor: "#4C4E49", color: "white"}} closeButton>
                    <Modal.Title style={{fontFamily: "'Roboto Slab', serif", fontSize: "30px"}}>Log-in</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ backgroundColor: "#39AEC5", borderBottomLeftRadius: "5px", borderBottomRightRadius: "5px"}}>
                    <form>

                        <div className="form-group text-center">
                            <label>Email: </label><br/>
                            <input
                                className="input"
                                ref={emailRef}
                                name="email"
                                type="text"
                                placeholder="Email"
                            />
                        </div>
                        <div className="form-group text-center">
                            <label>Password: </label><br/>
                            <input
                                className="input"
                                ref={passwordRef}
                                name="password"
                                type="password"
                                placeholder="Password"
                            />
                        </div>
                    </form>

                    <button className="btn btn-light header-button" style={{margin: "0 auto"}} onClick={handleSubmit}>
                        Log-in
                    </button>

                </Modal.Body>

            </Modal>
        </>
    );
}

export default LoginModal;