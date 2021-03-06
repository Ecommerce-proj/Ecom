import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import Layout from '../../components/Layout'
import Input from '../../components/UI/Input';

function Signin() {
    return (
        <div>
            <Layout>
                <Container>
                    <Row style={{marginTop: "50px"}}>
                        <Col md={{span:6,offset:3}}>
                            <Form>
                                {/* <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                    <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                 <Form.Group controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Check me out" />
                                </Form.Group> 
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button> */}
                                <Input
                                    label="Email"
                                    placeholder="Email"
                                    value=""
                                    type="email"
                                    onChange={()=>{}}
                                />
                                <Input
                                    label="Password"
                                    placeholder="Password"
                                    value=""
                                    type="password"
                                    onChange={()=>{}}
                                />
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                    
                </Container>
            </Layout>
        </div>
    )
}

export default Signin;
