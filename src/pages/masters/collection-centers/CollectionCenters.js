import { Card, Tab, Nav, Modal, Button } from 'react-bootstrap';
import Layout from '../../../layout/default';
import Block from '../../../components/Block/Block';
import DataTable from '../../../components/DataTable/DataTable';
import { tableData, tableColumns, vlccData, vlccColumn } from '../../../components/DataTable/TableData';
import { useState } from 'react';
export const CollectionCenters = () => {

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
                    <Block.Title>Collection Centers</Block.Title>
                </Block.HeadContent>
            </Block.Head>


            <Tab.Container id="default-tabs-example" defaultActiveKey="default-active">
                <Nav variant="tabs" >
                    <Nav.Item>
                        <Nav.Link eventKey="default-active">Active</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="default-virtual">Virtual</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="default-inactive">InActive</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="default-all">All</Nav.Link>
                    </Nav.Item>

                </Nav>
                <Tab.Content>
                    <Tab.Pane eventKey="default-active">
                        <Block>
                            <Card>
                                <DataTable tableClassName="data-table-head-light table-responsive" data={filteredData} columns={vlccColumn(handleCellClick, showFilters, handleFilterChange)} expandableRows actions showFilters={showFilters} toggleFilters={toggleFilters} />
                            </Card>
                        </Block>
                    </Tab.Pane>
                    <Tab.Pane eventKey="default-virtual">
                        <Block>
                            <Card>
                                <DataTable tableClassName="data-table-head-light table-responsive" data={tableData} columns={tableColumns} expandableRows actions />
                            </Card>
                        </Block>
                    </Tab.Pane>
                    <Tab.Pane eventKey="default-inactive">
                        <Block>
                            <Card>
                                <DataTable tableClassName="data-table-head-light table-responsive" data={tableData} columns={tableColumns} expandableRows actions />
                            </Card>
                        </Block>
                    </Tab.Pane>
                    <Tab.Pane eventKey="default-all">
                        <Block>
                            <Card>
                                <DataTable tableClassName="data-table-head-light table-responsive" data={tableData} columns={tableColumns} expandableRows actions />
                            </Card>
                        </Block>
                    </Tab.Pane>
                </Tab.Content>
            </Tab.Container>

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
