import { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!name || !email || !message) {
            setError('All fields are required.');
            setSuccess(false);
            return;
        }

        setError('');
        setSuccess(true);
        
        console.log('Form submitted:', { name, email, message });
        
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className="container mt-5">
            <h2>Contact Us</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            {success && <Alert variant="success">Your message has been sent!</Alert>}
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter your name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                    />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                        type="email" 
                        placeholder="Enter your email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                </Form.Group>

                <Form.Group controlId="formBasicMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control 
                        as="textarea" 
                        rows={3} 
                        placeholder="Enter your message" 
                        value={message} 
                        onChange={(e) => setMessage(e.target.value)} 
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default ContactForm;
