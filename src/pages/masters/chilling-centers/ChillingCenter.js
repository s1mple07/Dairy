import React, { useState } from 'react'
import { Card, Tab, Nav, Modal, Button } from 'react-bootstrap';
import Layout from '../../../layout/default';
import Block from '../../../components/Block/Block';
import DataTable from '../../../components/DataTable/DataTable';
import { tableData, tableColumns, vlccData, vlccColumn } from '../../../components/DataTable/TableData';

export const ChillingCenter = () => {

    const [fullscreenMd, setFullscreenMd] = useState(false);
    const [showFilters, setShowFilters] = useState(false);
    const [filters, setFilters] = useState({});

    const handleFilterChange = (columnId, value) => {
        setFilters(prev => ({ ...prev, [columnId]: value }));
    };

    const filteredData = vlccData.filter(row =>
        Object.entries(filters).every(
            ([key, value]) => !value || String(row[key]).includes(value)
        )
    );

    const handleCellClick = (row) => {
        setFullscreenMd(true);
    };

    const toggleFilters = () => {
        setShowFilters(prev => !prev);
    };
  return (
    <Layout title="Data Tables" content="container">
    <Block.Head page className="wide-md">
        <Block.HeadContent>
            <Block.Title>Vehicles</Block.Title>
        </Block.HeadContent>
    </Block.Head>


    <Block>
        <Card>
            <DataTable tableClassName="data-table-head-light table-responsive" data={tableData} columns={tableColumns} expandableRows selectableRows  showFilters={showFilters} toggleFilters={toggleFilters} />
        </Card>
    </Block>

    <Modal show={fullscreenMd}
        onHide={() => setFullscreenMd(false)}
        animation={false}
        style={{ maxWidth: '100%' }}>
        <Modal.Header
            closeButton
            style={{ justifyContent: 'center' }}  // Center the header content
        >
            <Modal.Title>Are you sure?</Modal.Title>
        </Modal.Header>

        <Modal.Body
            className="d-flex flex-column align-items-center justify-content-center"
            style={{ fontSize: '0.9rem', textAlign: 'center' }}  // Reduce font size and center text
        >
            Are you sure you want to make this entry as InActive
        </Modal.Body>


        <Modal.Footer className="d-flex justify-content-center">
            <Button size="sm" variant="success" onClick={() => setFullscreenMd(false)}>
                Yes!
            </Button>
            <Button size="sm" variant="danger" onClick={() => setFullscreenMd(false)}>
                Cancel
            </Button>

        </Modal.Footer>
    </Modal>


</Layout >
  )
}
