import React, { useState } from 'react'
import { Card, Form, Row, Col, Button, ButtonGroup } from 'react-bootstrap';

import Layout from '../../../layout/default';
import Block from '../../../components/Block/Block';


import { Icon } from '../../../components';


export const CenterSettings = () => {

    const [validated, setValidated] = useState(false);
    const [showInputs, setShowInputs] = useState(false);
    const [selectedAnimal, setSelectedAnimal] = useState('');

    const handleAnimalChange = (event) => {
        setSelectedAnimal(event.target.id);
    };

    const handleInputChange = (event) => {
        if (event.target.id === "incentiveYes") {
            setShowInputs(true);
        } else {
            setShowInputs(false);
        }
    };

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };
    return (
        <Layout title="Center Settings" content="container">


            <Block>

                <Form validated={validated} onSubmit={handleSubmit}>
                    <Row className="g-gs">
                        <Col xxl="12">
                            <Block.Head>
                                <Block.HeadBetween>
                                    <Block.HeadContent>
                                        <Block.Title tag="h2">Center Setting <Icon name="setting"></Icon></Block.Title>
                                    </Block.HeadContent>
                                </Block.HeadBetween>
                            </Block.Head>
                            <div className="gap gy-4">
                                <div className="gap-col">
                                    <Card className="card-gutter-md">
                                        <Card.Body>
                                            <Row className="g-gs">
                                                <Col lg="4">
                                                    <Form.Group className="form-group" controlId="validationCustom01">
                                                        <Form.Label htmlFor="producerid">Center Code <Icon name="home"></Icon> </Form.Label>
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
                                                <Col lg="4">
                                                    <Form.Group className="form-group">
                                                        <Form.Label htmlFor="producername">Center Name <Icon name="home"></Icon> </Form.Label>
                                                        <div className="form-control-wrap">
                                                            <Form.Control type="text" id="producername" placeholder="Center Name" />
                                                        </div>
                                                    </Form.Group>
                                                </Col>
                                                <Col lg="4">
                                                    <Form.Group className="form-group">
                                                        <Form.Label htmlFor="producername">Route <Icon name="navigate"></Icon> </Form.Label>
                                                        <div className="form-control-wrap">
                                                            <Form.Control type="text" id="producername" placeholder="Route" />
                                                        </div>
                                                    </Form.Group>
                                                </Col>

                                                <Col lg="4">
                                                    <Form.Group className="form-group">
                                                        <Form.Label htmlFor="producername">Taulk Name <Icon name="location"></Icon></Form.Label>
                                                        <div className="form-control-wrap">
                                                            <Form.Control type="text" id="producername" placeholder="Taulk Name" />
                                                        </div>
                                                    </Form.Group>
                                                </Col>
                                                <Col lg="4">
                                                    <Form.Group className="form-group">
                                                        <Form.Label htmlFor="exampleFormControlTextarea8">Address <Icon name="map"></Icon></Form.Label>
                                                        <div className="form-control-wrap">
                                                            <Form.Control size='sm' as="textarea" placeholder="Address" id="exampleFormControlTextarea8" rows="3"></Form.Control>
                                                        </div>
                                                    </Form.Group>
                                                </Col>
                                                <Col lg="4">
                                                    <Form.Group className="form-group">
                                                        <Form.Label htmlFor="producername">State <Icon name="location"></Icon></Form.Label>
                                                        <div className="form-control-wrap">
                                                            <Form.Control type="text" id="producername" placeholder="State" />
                                                        </div>
                                                    </Form.Group>
                                                </Col>
                                                <Col lg="4">
                                                    <Form.Group className="form-group">
                                                        <Form.Label htmlFor="producername">Pincode <Icon name="location"></Icon></Form.Label>
                                                        <div className="form-control-wrap">
                                                            <Form.Control type="text" id="producername" maxLength={6} placeholder="Pincode" />
                                                        </div>
                                                    </Form.Group>
                                                </Col>
                                                <Col lg="4">
                                                    <Form.Group className="form-group">
                                                        <Form.Label htmlFor="producername">Landmark <Icon name="location"></Icon></Form.Label>
                                                        <div className="form-control-wrap">
                                                            <Form.Control type="text" id="producername" placeholder="Landmark" />
                                                        </div>
                                                    </Form.Group>
                                                </Col>
                                                <Col lg="4">
                                                    <Form.Group className="form-group">
                                                        <Form.Label htmlFor="producername">Location <Icon name="map-pin"></Icon></Form.Label>
                                                        <div className="form-control-wrap">
                                                            <Form.Control type="text" id="producername" placeholder="Location" />
                                                        </div>
                                                    </Form.Group>
                                                </Col>

                                                <Col lg="6">
                                                    <Form.Group className="form-group">
                                                        <Card>
                                                            <Card.Body>
                                                                <div className="form-control-wrap">
                                                                    <Form.Label htmlFor="producername" className='mx-4'>Rate Type: </Form.Label>

                                                                    <ButtonGroup aria-label="Animal radio toggle button group" className='mb-2 mx-5' onChange={handleAnimalChange}>
                                                                        <input type="radio" className="btn-check" name="animalradio" id="animalradio1" autoComplete="off" />
                                                                        <Button as="label" variant="outline-primary" style={{ width: '90px', textAlign: 'center' }} htmlFor="animalradio1">Cow</Button>

                                                                        <input type="radio" className="btn-check" name="animalradio" id="animalradio2" autoComplete="off" />
                                                                        <Button as="label" variant="outline-primary" style={{ width: '90px', textAlign: 'center' }} htmlFor="animalradio2">Buffalo</Button>
                                                                    </ButtonGroup>

                                                                    <div className="form-control-wrap">
                                                                        {selectedAnimal === 'animalradio1' && (
                                                                            <Form.Select size="sm" >
                                                                                <option value="1">Cow FAT & SNR</option>
                                                                            </Form.Select>
                                                                        )}
                                                                        {selectedAnimal === 'animalradio2' && (
                                                                            <Form.Select size="sm">
                                                                                <option value="1">Buffalo FAT & SNR</option>
                                                                            </Form.Select>
                                                                        )}
                                                                    </div>
                                                                </div>
                                                            </Card.Body>
                                                        </Card>
                                                    </Form.Group>
                                                </Col>
                                                <Col lg="6">
                                                    <Form.Group className="form-group">
                                                        <Card>
                                                            <Card.Body>
                                                                <div className="form-control-wrap">
                                                                    <Form.Label htmlFor="producername" className='mx-4'>Incentive: </Form.Label>
                                                                    <ButtonGroup onChange={handleInputChange} className='mx-5' aria-label="Button group for incentive option">

                                                                        <input type="radio" className="btn-check" name="incentiveOption" id="incentiveYes" autoComplete="off" />
                                                                        <Button as="label" style={{ width: '90px', textAlign: 'center' }} variant="outline-primary" htmlFor="incentiveYes">Yes</Button>

                                                                        <input type="radio" className="btn-check" name="incentiveOption" id="incentiveNo" autoComplete="off" defaultChecked />
                                                                        <Button as="label" style={{ width: '90px', textAlign: 'center' }} variant="outline-primary" htmlFor="incentiveNo">No</Button>

                                                                    </ButtonGroup>
                                                                    {showInputs && (
                                                                        <div className="form-control-wrap">
                                                                            <Form.Control size='sm' type="text" id="producername" placeholder="Cow" className='mt-2' />
                                                                            <Form.Control size='sm' type="text" id="producername2" placeholder="Buffalo" className='mt-2' />
                                                                        </div>
                                                                    )}
                                                                </div>


                                                            </Card.Body>
                                                        </Card>
                                                    </Form.Group>
                                                </Col>
                                                <div className="gap-col">
                                                    <ul className="d-flex align-items-center gap g-3">
                                                        <li>
                                                            <Button type="submit" variant="success">Save Changes</Button>
                                                        </li>
                                                        <li>
                                                            <Button type="submit" variant="danger">Cancel</Button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </div>


                            </div>
                        </Col>

                        <Block>



                            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                <Row className="g-gs">
                                    <Col xxl="12">
                                        <Block.Head page className="wide-md d-flex align-items-center">
                                            <Block.Title className="mx-2">Incharge Details</Block.Title>
                                            <Button type="submit" variant="primary">
                                                View
                                                <Icon className="mx-1" name="eye"></Icon>
                                            </Button>
                                        </Block.Head>
                                        <div className="gap gy-4">
                                            <div className="gap-col">
                                                <Card className="card-gutter-md">
                                                    <Card.Body>
                                                        <Row className="g-gs">
                                                            <Col lg="4">
                                                                <Form.Group className="form-group" controlId="validationCustom01">
                                                                    <Form.Label htmlFor="producerid">Incharge Name <Icon name="user"></Icon> </Form.Label>
                                                                    <div className="form-control-wrap">
                                                                        <Form.Control type="text"
                                                                            name='producerid'
                                                                            id="producerid"
                                                                            placeholder="Incharge name"
                                                                            required
                                                                        />
                                                                    </div>
                                                                </Form.Group>
                                                            </Col>
                                                            <Col lg="4">
                                                                <Form.Group className="form-group">
                                                                    <Form.Label htmlFor="producername">Mobile number 1 <Icon name="mobile"></Icon> </Form.Label>
                                                                    <div className="form-control-wrap">
                                                                        <Form.Control type="text" id="producername" maxLength={10} placeholder="Mobile Number 1" />
                                                                    </div>
                                                                </Form.Group>
                                                            </Col>
                                                            <Col lg="4">
                                                                <Form.Group className="form-group">
                                                                    <Form.Label htmlFor="producername">Mobile number 2 (Optional) <Icon name="mobile"></Icon> </Form.Label>
                                                                    <div className="form-control-wrap">
                                                                        <Form.Control type="text" id="producername" placeholder="Mobile Number 2" />
                                                                    </div>
                                                                </Form.Group>
                                                            </Col>
                                                            <Col lg="4">
                                                                <Form.Group className="form-group">
                                                                    <Form.Label htmlFor="exampleFormControlTextarea8">Address <Icon name="map"></Icon></Form.Label>
                                                                    <div className="form-control-wrap">
                                                                        <Form.Control size='sm' as="textarea" placeholder="Address" id="exampleFormControlTextarea8" rows="3"></Form.Control>
                                                                    </div>
                                                                </Form.Group>
                                                            </Col>

                                                            <Col lg="4">
                                                                <Form.Group className="form-group">
                                                                    <Form.Label htmlFor="producername">Pan Card Number<Icon name="card-view"></Icon> </Form.Label>
                                                                    <div className="form-control-wrap">
                                                                        <Form.Control type="text" id="producername" placeholder="Pan card" />
                                                                    </div>
                                                                </Form.Group>
                                                            </Col>

                                                            <Col xxl="12">
                                                                <Row className="g-gs">
                                                                    <Block.Title className='mb-2'>Bank Details</Block.Title>

                                                                    <Col lg="4">
                                                                        <Form.Group className="form-group">
                                                                            <Form.Label htmlFor="producername">Account Holder Name <Icon name="cc-alt-fill"></Icon> </Form.Label>
                                                                            <div className="form-control-wrap">
                                                                                <Form.Control type="text" id="producername" placeholder="Account Holder Name" />
                                                                            </div>
                                                                        </Form.Group>
                                                                    </Col>
                                                                    <Col lg="4">
                                                                        <Form.Group className="form-group">
                                                                            <Form.Label htmlFor="producername">Account Number <Icon name="cc-alt-fill"></Icon> </Form.Label>
                                                                            <div className="form-control-wrap">
                                                                                <Form.Control type="text" id="producername" placeholder="Account Number" />
                                                                            </div>
                                                                        </Form.Group>
                                                                    </Col>
                                                                    <Col lg="4">
                                                                        <Form.Group className="form-group">
                                                                            <Form.Label htmlFor="producername">Bank Name <Icon name="cc-alt-fill"></Icon> </Form.Label>
                                                                            <div className="form-control-wrap">
                                                                                <Form.Control type="text" id="producername" placeholder="Bank Name" />
                                                                            </div>
                                                                        </Form.Group>
                                                                    </Col>
                                                                    <Col lg="4">
                                                                        <Form.Group className="form-group">
                                                                            <Form.Label htmlFor="producername">Branch <Icon name="cc-alt-fill"></Icon> </Form.Label>
                                                                            <div className="form-control-wrap">
                                                                                <Form.Control type="text" id="producername" placeholder="Branch" />
                                                                            </div>
                                                                        </Form.Group>
                                                                    </Col>
                                                                    <Col lg="4">
                                                                        <Form.Group className="form-group">
                                                                            <Form.Label htmlFor="producername">IFSC CODE <Icon name="cc-alt-fill"></Icon> </Form.Label>
                                                                            <div className="form-control-wrap">
                                                                                <Form.Control type="text" id="producername" placeholder="IFSC CODE" />
                                                                            </div>
                                                                        </Form.Group>
                                                                    </Col>
                                                                    <Col lg="4">
                                                                        <Form.Group className="form-group">
                                                                            <Form.Label htmlFor="producername">UPI ID <Icon name="cc-alt-fill"></Icon> </Form.Label>
                                                                            <div className="form-control-wrap">
                                                                                <Form.Control type="text" id="producername" placeholder="UPI ID" />
                                                                            </div>
                                                                        </Form.Group>
                                                                    </Col>
                                                                </Row>
                                                            </Col>

                                                            <div className="gap-col">
                                                                <ul className="d-flex align-items-center gap g-3">
                                                                    <li>
                                                                        <Button type="submit" variant="success">Save Changes</Button>
                                                                    </li>
                                                                    <li>
                                                                    <Button type="submit" variant="danger">Cancel</Button>
                                                                    </li>
                                                                </ul>
                                                            </div>

                                                        </Row>
                                                    </Card.Body>
                                                </Card>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Form>

                        </Block>

                    </Row>
                </Form>
            </Block>

        </Layout>
    )
    //     <Card className='mt-2'>
    //     <DataTable tableClassName="data-table-head-light table-responsive" data={tableData} columns={tableColumns} expandableRows />
    // </Card>
}
