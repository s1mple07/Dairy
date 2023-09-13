import React, { useState } from 'react'
import { Card, Form, Row, Col, Button, ButtonGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Layout from '../../../layout/default';
import Block from '../../../components/Block/Block';
import { Icon, Select, FileUpload, } from '../../../components';


export const FarmerCreation = () => {
    const [validated, setValidated] = useState(false);

    const onSubmitFunction = (data) => {
        console.log(data);
        // handle the form submission here, e.g., send the data to the server
    };

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        console.log(form.value);
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };
    return (
        <Layout title="Add Product" content="container">
            <Block.Head>
                <Block.HeadBetween>
                    <Block.HeadContent>
                        <Block.Title tag="h2">Farmer Creation</Block.Title>
                    </Block.HeadContent>
                </Block.HeadBetween>
            </Block.Head>

            <Block>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Row className="g-gs">
                        <Col xxl="12">
                            <div className="gap gy-4">
                                <div className="gap-col">
                                    <Card className="card-gutter-md">
                                        <Card.Body>
                                            <Row className="g-gs">
                                                <Col lg="6">
                                                    <Form.Group className="form-group" controlId="validationCustom01">
                                                        <Form.Label htmlFor="producerid">Producer ID <Icon name="user-alt"></Icon></Form.Label>
                                                        <div className="form-control-wrap">
                                                            <Form.Control type="text"
                                                                name='producerid'
                                                                id="producerid"
                                                                placeholder="Producer ID"
                                                                required
                                                            />
                                                        </div>
                                                    </Form.Group>
                                                </Col>
                                                <Col lg="6">
                                                    <Form.Group className="form-group">
                                                        <Form.Label htmlFor="producername">Producer Name <Icon name="user-alt"></Icon></Form.Label>
                                                        <div className="form-control-wrap">
                                                            <Form.Control type="text" id="producername" placeholder="Product Name" />
                                                        </div>
                                                    </Form.Group>
                                                </Col>
                                                <Col lg="6">
                                                    <Form.Group className="form-group">
                                                        <Form.Label htmlFor="discount-price">Gender <Icon name="check-circle"></Icon></Form.Label>
                                                        <div className="form-control-wrap">
                                                            <ButtonGroup aria-label="Basic radio toggle button group">
                                                                <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" />
                                                                <Button as="label" variant="outline-success" htmlFor="btnradio1">Male</Button>

                                                                <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" />
                                                                <Button as="label" variant="outline-success" htmlFor="btnradio2">Female</Button>

                                                                <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off" />
                                                                <Button as="label" variant="outline-success" htmlFor="btnradio3">Others</Button>
                                                            </ButtonGroup>
                                                        </div>
                                                    </Form.Group>
                                                </Col>
                                                <Col lg="6">
                                                    <Form.Group className="form-group">
                                                        <Form.Label htmlFor="tax-class">Communication <Icon name="users"></Icon></Form.Label>
                                                        <div className="form-control-wrap">
                                                            <ButtonGroup aria-label="Basic radio toggle button group">
                                                                <input type="radio" className="btn-check" name="btnradio10" id="btnradio4" autoComplete="off" />
                                                                <Button as="label" variant="outline-success" htmlFor="btnradio4">Bill</Button>

                                                                <input type="radio" className="btn-check" name="btnradio10" id="btnradio5" autoComplete="off" />
                                                                <Button as="label" variant="outline-success" htmlFor="btnradio5">Whatsapp</Button>

                                                                <input type="radio" className="btn-check" name="btnradio10" id="btnradio6" autoComplete="off" />
                                                                <Button as="label" variant="outline-success" htmlFor="btnradio6">SMS</Button>

                                                                <input type="radio" className="btn-check" name="btnradio10" id="btnradio7" autoComplete="off" />
                                                                <Button as="label" variant="outline-success" htmlFor="btnradio7">Email</Button>
                                                            </ButtonGroup>
                                                        </div>
                                                    </Form.Group>
                                                </Col>

                                                <Col lg="6">
                                                    <Form.Group className="form-group">
                                                        <Form.Label htmlFor="milk-type">Producer Milk Type <Icon name="check-circle"></Icon></Form.Label>
                                                        <div className="form-control-wrap">
                                                            <div className="form-control-wrap">
                                                                <ButtonGroup aria-label="Animal radio toggle button group">
                                                                    <input type="radio" className="btn-check" name="animalradio" id="animalradio1" autoComplete="off" />
                                                                    <Button as="label" variant="outline-success" htmlFor="animalradio1">Cow</Button>

                                                                    <input type="radio" className="btn-check" name="animalradio" id="animalradio2" autoComplete="off" />
                                                                    <Button as="label" variant="outline-success" htmlFor="animalradio2">Buffalo</Button>

                                                                    <input type="radio" className="btn-check" name="animalradio" id="animalradio3" autoComplete="off" />
                                                                    <Button as="label" variant="outline-success" htmlFor="animalradio3">Both</Button>
                                                                </ButtonGroup>
                                                            </div>
                                                        </div>
                                                    </Form.Group>
                                                </Col>
                                                <Col lg="6">
                                                    <Form.Group className="form-group">
                                                        <Form.Label htmlFor="noofcows">No.of Cows</Form.Label>
                                                        <div className="form-control-wrap">
                                                            <Form.Control type="text" id="noofcows" placeholder="No.of Cows" />

                                                        </div>
                                                    </Form.Group>
                                                </Col>
                                                <Col lg="6">
                                                    <Form.Group className="form-group">
                                                        <Form.Label htmlFor="barcode">Incentive Available Type <Icon name="check-circle"></Icon></Form.Label>
                                                        <div className="form-control-wrap">
                                                            <div className="form-control-wrap">
                                                                <ButtonGroup aria-label="Yes-No radio toggle button group">
                                                                    <input type="radio" className="btn-check" name="yesnoradio" id="yesnoradio1" autoComplete="off" />
                                                                    <Button as="label" variant="outline-success" htmlFor="yesnoradio1">Yes</Button>

                                                                    <input type="radio" className="btn-check" name="yesnoradio" id="yesnoradio2" autoComplete="off" />
                                                                    <Button as="label" variant="outline-success" htmlFor="yesnoradio2">No</Button>
                                                                </ButtonGroup>
                                                            </div>


                                                        </div>
                                                    </Form.Group>
                                                </Col>

                                                <Col lg="6">
                                                    <Form.Group className="form-group">

                                                        <div className="form-control-wrap">
                                                            <ButtonGroup aria-label="Choice radio toggle button group">
                                                                <input type="radio" className="btn-check" name="choiceradio" id="choiceradio1" autoComplete="off" />
                                                                <Button as="label" variant="outline-success" htmlFor="choiceradio1">Cow/Buffalo</Button>

                                                                <input type="radio" className="btn-check" name="choiceradio" id="choiceradio2" autoComplete="off" />
                                                                <Button as="label" variant="outline-success" htmlFor="choiceradio2">Both</Button>
                                                            </ButtonGroup>
                                                        </div>
                                                    </Form.Group>
                                                </Col>

                                                <Col lg="6">
                                                    <Form.Group className="form-group">
                                                        <Form.Label htmlFor="barcode">Door .No</Form.Label>
                                                        <div className="form-control-wrap">
                                                            <Form.Control type="text" id="doorno" placeholder="Door .No" />
                                                        </div>
                                                    </Form.Group>
                                                </Col>

                                                <Col lg="6">
                                                    <Form.Group className="form-group">
                                                        <Form.Label htmlFor="barcode">Village Name</Form.Label>
                                                        <div className="form-control-wrap">
                                                            <Form.Control type="text" id="villagename" placeholder="Village Name" />
                                                        </div>
                                                    </Form.Group>
                                                </Col>

                                                <Col lg="6">
                                                    <Form.Group className="form-group">
                                                        <Form.Label htmlFor="barcode">Taulk Name</Form.Label>
                                                        <div className="form-control-wrap">
                                                            <Form.Control type="text" id="tailkname" placeholder="Taulk Name" />
                                                        </div>
                                                    </Form.Group>
                                                </Col>

                                                <Col lg="6">
                                                    <Form.Group className="form-group">
                                                        <Form.Label htmlFor="barcode">Aadhar Card.No</Form.Label>
                                                        <div className="form-control-wrap">
                                                            <Form.Control type="text" id="aadharno" placeholder="Aadhar Card.No" />
                                                        </div>
                                                    </Form.Group>
                                                </Col>
                                                <Col lg="6">
                                                    <Form.Group className="form-group">
                                                        <Form.Label htmlFor="barcode">RF ID</Form.Label>
                                                        <div className="form-control-wrap">
                                                            <Form.Control type="text" id="rfid" placeholder="RF ID" />
                                                        </div>
                                                    </Form.Group>
                                                </Col>


                                                <Col lg="6">
                                                    <Form.Group className="form-group">
                                                        <Form.Label htmlFor="barcode">Agri Culture Land</Form.Label>
                                                        <div className="form-control-wrap">
                                                            <Form.Control type="text" id="agriland" placeholder="Agri Culture Land" />
                                                        </div>
                                                    </Form.Group>
                                                </Col>

                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div className="gap-col">
                                    <Card className="card-gutter-md">
                                        <Card.Body>
                                            <Form.Group className="form-group">
                                                <Row className="g-gs">
                                                    <Col lg="6">
                                                        <Form.Group className="form-group">
                                                            <Form.Label htmlFor="barcode">Producer State</Form.Label>
                                                            <div className="form-control-wrap">
                                                                <Select removeItemButton>
                                                                    <option value="">Select a State</option>
                                                                    <option value="Yes">Tamilnadu</option>
                                                                    <option value="No">Kerala</option>
                                                                </Select>
                                                            </div>
                                                            <div className="form-control-wrap mt-3">
                                                                <Form.Label htmlFor="barcode">Pincode</Form.Label>
                                                                <Form.Control type="text" id="agriland" placeholder="Pincode" />
                                                            </div>
                                                        </Form.Group>
                                                    </Col>

                                                    <Col lg="6">
                                                        <Form.Group className="form-group">
                                                            <Form.Label htmlFor="barcode">Producer District</Form.Label>
                                                            <div className="form-control-wrap">
                                                                <Select removeItemButton>
                                                                    <option value="">Select a District</option>
                                                                    <option value="Yes">Coimbatore</option>
                                                                    <option value="No">salem</option>
                                                                </Select>
                                                            </div>
                                                            <div className="form-control-wrap mt-3">
                                                                <Form.Label htmlFor="barcode">PanCard Number</Form.Label>
                                                                <Form.Control type="text" id="pancard" placeholder="PanCard Number" />
                                                            </div>
                                                            <div className="form-control-wrap mt-3">
                                                                <Form.Label htmlFor="barcode">UPI Number</Form.Label>
                                                                <Form.Control type="text" id="upi" placeholder="UPI Number" />
                                                            </div>
                                                        </Form.Group>
                                                    </Col>
                                                </Row>
                                            </Form.Group>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div className="gap-col">
                                    <Card className="card-gutter-md">
                                        <Card.Body>
                                            <Form.Group className="form-group">
                                                <Row className="g-gs">
                                                    <Col lg="6">
                                                        <Form.Group className="form-group">
                                                            <Form.Label htmlFor="barcode">Mode of Payment</Form.Label>
                                                            <div className="form-control-wrap">
                                                                <ButtonGroup aria-label="Payment Method radio toggle button group">
                                                                    <input type="radio" className="btn-check" name="paymentradio" id="paymentradio1" autoComplete="off" />
                                                                    <Button as="label" variant="outline-success" htmlFor="paymentradio1">Cash</Button>

                                                                    <input type="radio" className="btn-check" name="paymentradio" id="paymentradio2" autoComplete="off" />
                                                                    <Button as="label" variant="outline-success" htmlFor="paymentradio2">Bank</Button>

                                                                    <input type="radio" className="btn-check" name="paymentradio" id="paymentradio3" autoComplete="off" />
                                                                    <Button as="label" variant="outline-success" htmlFor="paymentradio3">UPI</Button>
                                                                </ButtonGroup>
                                                            </div>

                                                        </Form.Group>
                                                    </Col>
                                                    <Col lg="6">
                                                        <Form.Group className="form-group">
                                                            <Form.Label htmlFor="barcode">Payment Cycle</Form.Label>
                                                            <div className="form-control-wrap">
                                                                <ButtonGroup aria-label="Frequency radio toggle button group">
                                                                    <input type="radio" className="btn-check" name="frequencyradio" id="frequencyradio1" autoComplete="off" />
                                                                    <Button as="label" variant="outline-success" htmlFor="frequencyradio1">Daily</Button>

                                                                    <input type="radio" className="btn-check" name="frequencyradio" id="frequencyradio2" autoComplete="off" />
                                                                    <Button as="label" variant="outline-success" htmlFor="frequencyradio2">Weekly</Button>

                                                                    <input type="radio" className="btn-check" name="frequencyradio" id="frequencyradio3" autoComplete="off" />
                                                                    <Button as="label" variant="outline-success" htmlFor="frequencyradio3">Monthly</Button>
                                                                </ButtonGroup>
                                                            </div>

                                                        </Form.Group>
                                                    </Col>
                                                    <Col lg="6">
                                                        <Form.Group className="form-group">
                                                            <div className="form-control-wrap">
                                                                <Select removeItemButton>
                                                                    <option value="">Select a Day</option>
                                                                    <option value="mon">Monday</option>
                                                                    <option value="tue">Tuesday</option>
                                                                    <option value="wed">Wednesday</option>
                                                                    <option value="thu">Thursday</option>
                                                                    <option value="fri">Friday</option>
                                                                    <option value="sat">Saturday</option>
                                                                </Select>
                                                            </div>

                                                        </Form.Group>
                                                    </Col>
                                                </Row>
                                            </Form.Group>
                                        </Card.Body>
                                    </Card>
                                </div>

                                <div className="gap-col">
                                    <Card className="card-gutter-md">
                                        <Card.Body>
                                            <Form.Group className="form-group">
                                                <Row className="g-gs">
                                                    <Col sm="6">
                                                        <Form.Group className="form-group">
                                                            <Form.Label>Upload Profile  </Form.Label>
                                                            <div className="form-control-wrap">
                                                                <FileUpload iconName="file" maxFiles={1} errorText="Multiple files not supported, please upload single file." />
                                                            </div>
                                                        </Form.Group>
                                                    </Col>
                                                </Row>
                                            </Form.Group>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div className="gap-col">
                                    <ul className="d-flex align-items-center gap g-3">
                                        <li>
                                            <Button type="submit" variant="primary">Save Changes</Button>
                                        </li>
                                        <li>
                                            <Link to="/ecommerce/products" className="btn border-0">Cancel</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Col>

                    </Row>
                </Form>
            </Block>

        </Layout>
    )
}
