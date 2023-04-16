import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { InputGroup, FormControl } from "react-bootstrap";
import { BsFileEarmarkPlus } from "react-icons/bs";
import Dropzone from 'react-dropzone';
import "./feed.css";

const Slogan = () => {
    const [name, setName] = useState('');
    const [voterId, setVoterId] = useState('');
    const [question1, setQuestion1] = useState('');
    const [question2, setQuestion2] = useState('');
    const [question3, setQuestion3] = useState('');
    const [question4, setQuestion4] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Name: ${name}\nVoter ID No.: ${voterId}\nQuestion 1: ${question1}\nQuestion 2: ${question2}\nQuestion 3: ${question3}\nQuestion 4: ${question4}`);
        setName('');
        setVoterId('');
        setQuestion1('');
        setQuestion2('');
        setQuestion3('');
        setQuestion4('');
    };
    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        setQuestion4(file.name);
        // handle file upload logic here
    };

    return (
        <Container className="my-51 ">
            <Row>
                <Col xs={12} md={8} lg={11}>
                    <h1 className='f1'>Feedback Form</h1>
                    <br></br>
                    <Form onSubmit={handleSubmit} className='fed1'>
                        <Form.Group controlId="formBasicName" className="mb-3">
                            <Form.Label md={3} className="fed2">Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicVoterId" className="mb-3">
                            <Form.Label md={3} className="fed2">Voter ID No.</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Voter ID No."
                                value={voterId}
                                onChange={(e) => setVoterId(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicQuestion1" className="mb-3">
                            <Form.Label md={3} className="fed2">How did the student perform?</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter answer"
                                value={question1}
                                onChange={(e) => setQuestion1(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicQuestion2" className="mb-3">
                            <Form.Label md={3} className="fed2">How was your voting experience?</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter answer"
                                value={question2}
                                onChange={(e) => setQuestion2(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicQuestion3" className="mb-3">
                            <Form.Label md={3} className="fed2">Do you like to share any stories/incidents from polling booth?</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter answer"
                                value={question3}
                                onChange={(e) => setQuestion3(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="formBasicQuestion4" className="mb-3">
                            <Form.Label md={3} className="fed2">
                                Do you like to share any pictures?
                            </Form.Label>
                            <Dropzone onDrop={acceptedFiles => setQuestion4(acceptedFiles[0])}>
                                {({ getRootProps, getInputProps }) => (
                                    <div {...getRootProps()} className="dropzone">
                                        <input {...getInputProps()} />
                                        <BsFileEarmarkPlus className="icon" style={{color:'blue'}} />
                                        <p className='fed3'>Drag and drop a file here, or click to select a file</p>
                                    </div>
                                )}
                            </Dropzone>
                        </Form.Group>


                        <Button variant="primary" type="submit" style={{ backgroundColor: "#ff0080", marginTop: 25, border: "none" }}>
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Slogan;
