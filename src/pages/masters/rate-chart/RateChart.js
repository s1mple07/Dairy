import React, { useState } from 'react'
import Layout from '../../../layout/default';
import { Block, DatePicker, Icon } from '../../../components';
import { Button, ButtonGroup, Card, Col, Form, Nav, Row, Tab } from 'react-bootstrap';
import { Fat } from './Fat';
import { Snf } from './Snf';
import { Ts } from './Ts';
import { FlatFatSnf } from './FlatFatSnf';
import { FatSnf } from './FatSnf';

export const RateChart = () => {


    const formatDate = (date) => {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');  // Months are 0-based in JS
        const year = date.getFullYear();

        return `${day}/${month}/${year}`;
    }

    const currentDate = new Date();
    const formattedDate = formatDate(currentDate);

    const [selectedDate, setSelectedDate] = useState(formattedDate);

    console.log(formattedDate); // This will log the date in "dd/mm/yyyy" format


    console.log(selectedDate, "Date");



    return (
        <Layout title="Rate Chart" content="container">
            <Block.Head>
                <Block.HeadBetween>
                    <Block.HeadContent>
                        <Block.Title tag="h2">Rate Chart <Icon name="chart-up"></Icon></Block.Title>
                    </Block.HeadContent>
                </Block.HeadBetween>
            </Block.Head>


            <Row className="g-gs">
                <Col xxl="12">

                    <div className="gap gy-4">
                        <div className="gap-col">
                            <Card className="card-gutter-md">
                                <Card.Body>
                                    <Row className="g-gs">
                                        <Col lg="3">
                                            <Block.Title tag="h3" className="mb-2">Rate Chart Name<span style={{color:'red'}}>*</span> </Block.Title>
                                            <Form.Group className="form-group" controlId="validationFat">
                                                <div className="form-control-wrap">
                                                    <Form.Control type="text"
                                                        name='producerid'
                                                        id="producerid"
                                                        placeholder="Rate Chart Name"
                                                        required
                                                    />
                                                </div>
                                            </Form.Group>
                                        </Col>
                                        <Col lg="3">
                                            <Block.Title tag="h3" className="mb-2">Applicable Date <span style={{color:'red'}}>*</span> </Block.Title>
                                            <Form.Group className="form-group" controlId="validationCustom01">

                                                <div className="form-control-wrap">
                                                    <DatePicker value={selectedDate} onChange={date => setSelectedDate(date)} />
                                                </div>
                                            </Form.Group>
                                        </Col>
                                        <Col lg="6">
                                            <Block.Title tag="h3" className="mb-2">Milk Type<span style={{color:'red'}}>*</span></Block.Title>
                                            <ButtonGroup aria-label="Animal Selection">
                                                <input type="radio" className="btn-check" value='cow' name="animal" id="cowRadio" autoComplete="off" defaultChecked />
                                                <Button as="label" variant="outline-primary" htmlFor="cowRadio">Cow</Button>

                                                <input type="radio" className="btn-check" value='buffalo' name="animal" id="buffaloRadio" autoComplete="off" />
                                                <Button as="label" variant="outline-primary" htmlFor="buffaloRadio">Buffalo</Button>

                                                <input type="radio" className="btn-check" value='both' name="animal" id="bothRadio" autoComplete="off" />
                                                <Button as="label" variant="outline-primary" htmlFor="bothRadio">Both</Button>
                                            </ButtonGroup>
                                        </Col>

                                        <Col lg="12">
                                            <Block.Title tag="h3" className="mb-2">Rate Type<span style={{color:'red'}}>*</span> </Block.Title>
                                            <Tab.Container id="pills-tabs-example" defaultActiveKey="pills-flat">
                                                <Card className="card-gutter-md">
                                                    <Card.Body >
                                                        <Nav variant="pills" className="mb-3" style={{borderColor:'red' }}>
                                                            <Nav.Item>
                                                                <Nav.Link style={{ borderColor: "#5f38f9", borderRadius: 'none' }} eventKey="pills-flat">FLAT Rate</Nav.Link>
                                                            </Nav.Item>
                                                            <Nav.Item>
                                                                <Nav.Link style={{ borderColor: "#5f38f9", borderRadius: 'none' }} eventKey="pills-fat-snf">FAT & SNF Rate</Nav.Link>
                                                            </Nav.Item>
                                                            <Nav.Item>
                                                                <Nav.Link style={{ borderColor: "#5f38f9" }} eventKey="pills-fat">FAT Only</Nav.Link>
                                                            </Nav.Item>
                                                            <Nav.Item>
                                                                <Nav.Link style={{ borderColor: "#5f38f9" }} eventKey="pills-snf">SNF Only</Nav.Link>
                                                            </Nav.Item>
                                                            <Nav.Item>
                                                                <Nav.Link style={{ borderColor: "#5f38f9" }} eventKey="pills-ts">TS Only</Nav.Link>
                                                            </Nav.Item>
                                                            <Nav.Item>
                                                                <Nav.Link style={{ borderColor: "#5f38f9" }} eventKey="pills-flat-fat-snf">FLAT (FAT & SNF)</Nav.Link>
                                                            </Nav.Item>
                                                        </Nav>
                                                    </Card.Body>
                                                </Card>

                                                <Tab.Content>
                                                    <Tab.Pane eventKey="pills-flat">
                                                        <Col lg="4" className='mt-2'>
                                                            <Form.Group className="form-group" controlId="validationFat">
                                                                <Form.Label htmlFor="producerid">FLAT Rate </Form.Label>
                                                                <div className="form-control-wrap">
                                                                    <Form.Control type="text"
                                                                        name='producerid'
                                                                        id="producerid"
                                                                        placeholder="Flat Rate"
                                                                        required
                                                                    />
                                                                </div>
                                                            </Form.Group>
                                                        </Col>
                                                    </Tab.Pane>
                                                    <Tab.Pane eventKey="pills-fat-snf">
                                                        <Col xxl="12">
                                                            <FatSnf />
                                                        </Col>
                                                    </Tab.Pane>
                                                    <Tab.Pane eventKey="pills-fat">
                                                        <Fat />
                                                    </Tab.Pane>
                                                    <Tab.Pane eventKey="pills-snf">
                                                        <Snf />
                                                    </Tab.Pane>
                                                    <Tab.Pane eventKey="pills-ts">
                                                        <Ts />
                                                    </Tab.Pane>
                                                    <Tab.Pane eventKey="pills-flat-fat-snf">
                                                        <FlatFatSnf />
                                                    </Tab.Pane>
                                                </Tab.Content>
                                            </Tab.Container>
                                        </Col>

                                        <Col lg='2' className="mx-6">
                                            <Button
                                                as="label"
                                                variant="success"
                                            >
                                                Save
                                            </Button>
                                        </Col>

                                    </Row>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </Col>
            </Row>



        </Layout>
    )
}
