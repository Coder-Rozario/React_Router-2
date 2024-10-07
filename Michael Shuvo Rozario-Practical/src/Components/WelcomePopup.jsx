import { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import PropTypes from 'prop-types';

const WelcomePopup = ({ onClose }) => {
    const [show, setShow] = useState(false); 

    useEffect(() => {
        const hasSeenPopup = sessionStorage.getItem("hasSeenPopup");
        if (!hasSeenPopup) {
            setShow(true); // Show popup if not seen before
            sessionStorage.setItem("hasSeenPopup", "true"); 
        }
    }, []);

    const handleClose = () => {
        console.log("Closing popup..."); 
        setShow(false);
        onClose(); 
    };

    return (
        <Modal show={show} onHide={handleClose} centered animation={true}>
            <Modal.Header closeButton>
                <Modal.Title className="w-100 text-center">Welcome to My Website!</Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-center">
                <p>Here you can know about me. Enjoy your visit!</p>
            </Modal.Body>
            <Modal.Footer className="justify-content-center">
                <Button variant="primary" onClick={handleClose}>
                    Get Started
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

WelcomePopup.propTypes = {
    onClose: PropTypes.func.isRequired,
};

export default WelcomePopup;
