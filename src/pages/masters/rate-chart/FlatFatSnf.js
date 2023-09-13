import React, { useState } from 'react'
import { Button, Card, Col, Form, Row } from 'react-bootstrap'
import { Block, Icon } from '../../../components'
import DataTable from 'react-data-table-component';
import { fatRate } from '../../../components/DataTable/TableData';

export const FlatFatSnf = () => {
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');
    const [price, setPrice] = useState('');
    const [snfStart, setsnfStart] = useState('');
    const [snfEnd, setsnfEnd] = useState('');
    const [priceSnf, setPriceSnf] = useState('')
    const [startSnfError, setStartSnfError] = useState('');
    const [snfEndError, setEndSnfError] = useState('');
    const [snfPriceError, setSnfPriceError] = useState('');

    const [litreRate, setLitreRate] = useState('');

    const [startError, setStartError] = useState('');
    const [endError, setEndError] = useState('');
    const [priceError, setPriceError] = useState('');
    const [formData, setFormData] = useState([]);
    const [formSnf, setFormSnf] = useState([]);

    const pattern = /^\d*\.?\d{0,2}$/;

    const hasTwoDecimals = (value) => {
        return pattern.test(value);
    }


    const handleInputChange = (e, setValue, setError) => {
        const { value, name } = e.target;
        setValue(value); // Set the input value to state

        if (name === 'end' && +value <= +start) {
            setEndError('End value should be greater than start value.');
        } else if (name === 'start' && +start >= +end) {
            setEndError('Start value should be less than end value.');
        } else {
            setEndError('');
        }

        if (name === 'endSnf' && +value <= +start) {
            setEndSnfError('End value should be greater than start value.');
        } else if (name === 'start' && +start >= +end) {
            setEndSnfError('Start value should be less than end value.');
        } else {
            setEndSnfError('');
        }

        // Validate for exactly two decimals
        if (!hasTwoDecimals(value)) {
            setError(`${name.charAt(0).toUpperCase() + name.slice(1)} must be a number with exactly two decimal places.`);
        } else {
            setError(""); // Clear the error message
        }
    }

    const handleSubmit1 = () => {

        let isValid = true;
        if (!snfStart) {
            setStartSnfError('Start is required.');
            isValid = false;
        } else {
            setStartSnfError('');
        }

        if (!snfEnd) {
            setEndSnfError('End is required.');
            isValid = false;
        } else {
            setEndSnfError('');
        }

        if (snfStart > snfEnd) {
            isValid = false
            setEndSnfError('Start value should be less than end value.');
        } else {
            setEndSnfError('');
        }

        if (!priceSnf) {
            setSnfPriceError('Rate is required.');
            isValid = false;
        } else {
            setSnfPriceError('');
        }
        const lastEntry = formSnf[formSnf.length - 1];

        // Check if the new price is higher than the last price
        if (lastEntry && parseFloat(price) <= parseFloat(lastEntry.price)) {
            setPriceSnf('Price should be higher than the previous price.');
            isValid = false;
        }

        if (isValid) {
            console.log({ snfStart, snfEnd, priceSnf });

            // Increment and format
            const newSnfStart = parseFloat(snfStart)
            const newSnfEnd = parseFloat(snfEnd);
            const newSnfRate = parseFloat(priceSnf)

            const currentData = {

                start: newSnfStart,
                end: newSnfEnd,
                price: newSnfRate
            };

            // Update formData state with the new data
            setFormSnf(prevData => [...prevData, currentData]);

            // Update the form fields

            setsnfStart(parseFloat(newSnfEnd + 0.01).toFixed(2))
            setsnfEnd('')
            setPriceSnf('')
        }
    }


    const handleSubmit = () => {
        let isValid = true;

        if (!start) {
            setStartError('Start is required.');
            isValid = false;
        } else {
            setStartError('');
        }

        if (!end) {
            setEndError('End is required.');
            isValid = false;
        } else {
            setEndError('');
        }

        if (start > end) {
            setEndError('Start value should be less than end value.')
            isValid = false
        } else {
            setEndError('')
        }

        if (!price) {
            setPriceError('Price is required.');
            isValid = false;
        } else {
            setPriceError('');
        }

        if (isValid) {
            console.log({ start, end, price });

            // Increment and format
            const newStart = parseFloat(start)
            const newEnd = parseFloat(end);
            const newPrice = parseFloat(price);


            const currentData = {
                start: newStart,
                end: newEnd,
                price: newPrice,

            };

            // Update formData state with the new data
            setFormData(prevData => [...prevData, currentData]);

            // Update the form fields
            setStart(parseFloat(newEnd + 0.01).toFixed(2));
            setEnd('');
            setPrice('');

        }
    };

    console.log(formData);
    console.log(formSnf);

    const handleCellClick = (row) => {
        console.log(row, "row===>");
        setFormData(prevData => {
            const newData = prevData.filter(data => data.start !== row);

            // If there's any data left after deleting, set the last item's end value as start
            // and add 0.01 to it
            if (newData.length) {
                setStart(parseFloat(newData[newData.length - 1].end) + 0.01);
            }

            return newData;
        });
    };



    const handleKeyDown = (e) => {
        const { value } = e.target;

        // Allow navigation & control keys
        const allowedKeys = ["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab", "."];
        if (allowedKeys.includes(e.key)) {
            // Allow only one dot
            if (e.key === "." && value.includes('.')) {
                e.preventDefault();
            }
            return;
        }
        // If key is not a number, prevent input
        if (!/^[0-9]+$/.test(e.key)) {
            e.preventDefault();
            return;
        }
        // If there's a dot in the value, ensure up to two numbers after it
        if (value.includes('.') && value.split('.')[1].length >= 2) {
            e.preventDefault();
        }
    }

    return (
        <Card className="card-gutter-md">
            <Card.Body>
                <Row className="g-gs">
                    <Col lg='12'>
                        <Form.Group className="form-group row" controlId="validationFat">
                            <Form.Label htmlFor="producerid" className="col-sm-2 col-form-label">Litre Rate</Form.Label>
                            <div className="col-sm-4">
                                <Form.Control type="text"
                                    name='producerid'
                                    id="producerid"
                                    placeholder="Litre Rate"
                                    required
                                    value={litreRate}
                                    onChange={(e) => setLitreRate(e.target.value)}
                                />
                            </div>
                        </Form.Group>
                    </Col>

                    <Col lg='6'>
                        <Row className="g-gs">
                            <Col sm="3">
                                <Form.Group className="form-group" controlId='start'>
                                    <Form.Label htmlFor="start">Start (FAT)</Form.Label>
                                    <div className="form-control-wrap">
                                        <Form.Control
                                            type="text"
                                            name='start'
                                            value={start}
                                            placeholder="Start"
                                            onKeyDown={handleKeyDown}
                                            required
                                            disabled={formData.length !== 0}
                                            onChange={(e) => handleInputChange(e, setStart, setStartError)}
                                            isInvalid={!!startError} // Use isInvalid prop for bootstrap validation styling
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {startError}
                                        </Form.Control.Feedback>
                                    </div>
                                </Form.Group>
                            </Col>
                            <Col sm="3">
                                <Form.Group className="form-group" controlId='end'>
                                    <Form.Label htmlFor="end">End (FAT)</Form.Label>
                                    <div className="form-control-wrap">
                                        <Form.Control
                                            type="text"
                                            name='end'
                                            value={end}
                                            onKeyDown={handleKeyDown}
                                            placeholder="End"
                                            required
                                            onChange={(e) => handleInputChange(e, setEnd)}
                                            isInvalid={!!endError}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {endError}
                                        </Form.Control.Feedback>
                                    </div>
                                </Form.Group>
                            </Col>


                            <Col sm="3">
                                <Form.Group className="form-group" controlId='price'>
                                    <Form.Label htmlFor="price">Rate</Form.Label>
                                    <div className="form-control-wrap">
                                        <Form.Control

                                            type="text"
                                            name='price'
                                            value={price}
                                            onKeyDown={handleKeyDown}
                                            placeholder="Rate"
                                            required
                                            onChange={(e) => handleInputChange(e, setPrice)}
                                            isInvalid={!!priceError}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {priceError}
                                        </Form.Control.Feedback>
                                    </div>

                                </Form.Group>
                            </Col>

                            <Col lg='3'>
                                <Button
                                    as="label"
                                    style={{ marginTop: "32px" }}
                                    variant="primary"
                                    onClick={handleSubmit}
                                >

                                    <Icon name="plus" />
                                </Button>

                            </Col>
                        </Row>
                        {formData.length !== 0 && (
                            <Block className="mt-2" >
                                <Card>
                                    <DataTable tableClassName="data-table-head-light table-responsive" data={formData} columns={fatRate(handleCellClick, formData.length)} />
                                </Card>
                            </Block>
                        )}
                    </Col>


                    <Col lg='6'>
                        <Row className="g-gs">
                            <Col lg="3">
                                <Form.Group className="form-group" controlId='start'>
                                    <Form.Label htmlFor="start">Start (SNF)</Form.Label>
                                    <div className="form-control-wrap">
                                        <Form.Control
                                            type="text"
                                            name='start'
                                            value={snfStart}
                                            placeholder="Start"
                                            onKeyDown={handleKeyDown}
                                            required
                                            disabled={formSnf.length !== 0}
                                            onChange={(e) => handleInputChange(e, setsnfStart, setStartSnfError)}
                                            isInvalid={!!startSnfError} // Use isInvalid prop for bootstrap validation styling
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {startSnfError}
                                        </Form.Control.Feedback>
                                    </div>
                                </Form.Group>
                            </Col>
                            <Col lg="3">
                                <Form.Group className="form-group" controlId='end'>
                                    <Form.Label htmlFor="end">End (SNF)</Form.Label>
                                    <div className="form-control-wrap">
                                        <Form.Control
                                            type="text"
                                            name='endSnf'
                                            value={snfEnd}
                                            onKeyDown={handleKeyDown}
                                            placeholder="End"
                                            required
                                            onChange={(e) => handleInputChange(e, setsnfEnd)}
                                            isInvalid={!!snfEndError}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {snfEndError}
                                        </Form.Control.Feedback>
                                    </div>
                                </Form.Group>
                            </Col>
                            <Col lg="3">
                                <Form.Group className="form-group" controlId='price'>
                                    <Form.Label htmlFor="price">Rate</Form.Label>
                                    <div className="form-control-wrap">
                                        <Form.Control
                                            type="text"
                                            name='price'

                                            value={priceSnf}
                                            onKeyDown={handleKeyDown}
                                            placeholder="Rate"
                                            required
                                            onChange={(e) => handleInputChange(e, setPriceSnf)}
                                            isInvalid={!!snfPriceError}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {snfPriceError}
                                        </Form.Control.Feedback>
                                    </div>

                                </Form.Group>
                            </Col>
                            <Col lg='3'>
                                <Button
                                    as="label"
                                    style={{ marginTop: "32px" }}
                                    variant="primary"
                                    onClick={handleSubmit1}
                                >

                                    <Icon name="plus" />
                                </Button>
                            </Col>
                        </Row>
                        {formSnf.length !== 0 && (
                            <Block className="mt-2">
                                <Card>
                                    <DataTable tableClassName="data-table-head-light table-responsive" data={formSnf} columns={fatRate(handleCellClick, formSnf.length)} />
                                </Card>
                            </Block>
                        )}
                    </Col>

                </Row>


            </Card.Body>
        </Card>
    )
}
