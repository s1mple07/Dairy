import React, { useState } from 'react'
import { Button, Card, Col, Form, Row } from 'react-bootstrap'
import { Block, Icon } from '../../../components'
import DataTable from 'react-data-table-component';
import { fatRate } from '../../../components/DataTable/TableData';


export const Ts = () => {
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');
    const [price, setPrice] = useState('');

    const [startError, setStartError] = useState('');
    const [endError, setEndError] = useState('');
    const [priceError, setPriceError] = useState('');
    const [formData, setFormData] = useState([]);



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

        // Validate for exactly two decimals
        if (!hasTwoDecimals(value)) {
            setError(`${name.charAt(0).toUpperCase() + name.slice(1)} must be a number with exactly two decimal places.`);
        } else {
            setError(""); // Clear the error message
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

        if (!price) {
            setPriceError('Price is required.');
            isValid = false;
        } else {
            setPriceError('');
        }

        if (start > end) {
            setEndError('Start value should be less than end value.')
            isValid = false
        } else {
            setEndError('')
        }
        const lastEntry = formData[formData.length - 1];

        // Check if the new price is higher than the last price
        if (lastEntry && parseFloat(price) <= parseFloat(lastEntry.price)) {
            setPriceError('Price should be higher than the previous price.');
            isValid = false;
        }

        if (isValid) {
            console.log({ start, end, price });

            // Increment and format
            const newStart = parseFloat(start)
            const newEnd = parseFloat(end); // If you want to format end as well, use .toFixed(2) as necessary
            const newPrice = parseFloat(price); // Again, format as necessary

            const currentData = {
                start: newStart,
                end: newEnd,
                price: newPrice
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
                    <Block.Title tag="h2" className="mb-2">TS Only</Block.Title>
                    <Col lg="3">
                        <Form.Group className="form-group" controlId='start'>
                            <Form.Label htmlFor="start">Start</Form.Label>
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
                    <Col lg="3">
                        <Form.Group className="form-group" controlId='end'>
                            <Form.Label htmlFor="end">End</Form.Label>
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

                    <Col lg="3">
                        <Form.Group className="form-group" controlId='price'>
                            <Form.Label htmlFor="price">Price</Form.Label>
                            <div className="form-control-wrap">
                                <Form.Control
                                    type="text"
                                    name='price'
                                    value={price}
                                    onKeyDown={handleKeyDown}
                                    placeholder="Price"
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
                    <Block className="mt-2">
                        <Card>
                            <DataTable tableClassName="data-table-head-light table-responsive" data={formData} columns={fatRate(handleCellClick, formData.length)} />
                        </Card>
                    </Block>
                )}
            </Card.Body>
        </Card>
    )
}
