import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import exportFromJSON from 'export-from-json'
import { Button } from 'react-bootstrap';
import { CustomDropdownToggle } from "../../components";

import DataTablePagination from '../Pagination/DataTablePagination';
import Icon from '../Icon/Icon';


// export file component
const Export = ({ data }) => {
  const fileName = "user-data";

  const exportCSV = () => {
    const exportType = exportFromJSON.types.csv;
    exportFromJSON({ data, fileName, exportType });
  };

  const exportExcel = () => {
    const exportType = exportFromJSON.types.xls;
    exportFromJSON({ data, fileName, exportType });
  };

  return (
    <Button className='mx-1' onClick={() => exportExcel()} as={CustomDropdownToggle} variant='info'><Icon name="file-download" /></Button>

  );
};

// Expanded View of Data table
const expandedComponent = ({ data }) => {
  return (
    <ul className="data-details p-3 gap gy-1 border-bottom small">
      {Object.entries(data).map(([key, value]) => (
        <li key={key}>
          <span className="data-title text-base fw-medium me-2">
            {capitalizeFirstLetter(key)}:
          </span>
          <span className="data-text text-light">
            {typeof value === 'boolean' ? (value ? 'Active' : 'Inactive') : value}
          </span>
        </li>
      ))}
    </ul>
  );
};

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// custom checkbox
const customCheckbox = React.forwardRef(({ onClick, ...rest }, ref) => (
  <div className="form-check" id={rest.name}>
    <input
      type="checkbox"
      className="form-check-input"
      ref={ref}
      onClick={onClick}
      {...rest}
    />
  </div>
));

function DataTableComponent({ data, columns, className, expandableRows, actions, tableClassName, selectableRows, showFilters, toggleFilters, ...props }) {
  const [tableData, setTableData] = useState(data);
  const [searchText, setSearchText] = useState('');
  const [showItemPerPage, setShowItemPerPage] = useState(25);
  const [mobileView, setMobileView] = useState(false);

  console.log(data, '=====>');

  useEffect(() => {
    const filteredData = data.filter(
      item => item.name.toLowerCase().includes(searchText.toLowerCase())
    )
    setTableData(filteredData)
  }, [searchText, data])


  // function to change the table design view to expanable under 1200 px
  const viewChange = () => {
    if (window.innerWidth < 960 && expandableRows) {
      setMobileView(true);
    } else {
      setMobileView(false);
    }
  };

  useEffect(() => {
    window.addEventListener("load", viewChange);
    window.addEventListener("resize", viewChange);
    return () => {
      window.removeEventListener("resize", viewChange);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const customStyles = {

    rows: {
      style: {
        // Adjust height
        minHeight: '35px', // override the row height
        maxHeight: '38px',

        // Optional: if you want to adjust vertical padding
        paddingTop: '7px',
        paddingBottom: '7px',
      }
    },

  };

  const conditionalRowStyles = [{
    when: row => !row.id, // Assuming 'id' is a primary key in your data and won't be empty for real rows
    style: {
      display: 'none'
    }
  }];


  return (
    <div className="data-table-wrapper">
      <div className="data-table-top">
        <div className="data-table-search">
          <Button className='mx-1' variant='success'><Icon name="plus" /></Button>
          <Button className='mx-1' variant='warning'><Icon name="edit" /></Button>
          <Button className='mx-1' variant={showFilters ? 'secondary' : 'primary'} onClick={toggleFilters}><Icon name={showFilters ? 'cross' : 'filter'} /></Button>
          {actions && <Export data={data} />}
        </div>
        <div className="data-table-action-wrap">
          <div className="data-table-select mx-1">
            <select className='form-select' onChange={(e) => setShowItemPerPage(e.target.value)} value={showItemPerPage}>
              <option value='5'>5</option>
              <option value='10'>10</option>
              <option value='15'>15</option>
              <option value='20'>20</option>
              <option value='25'>25</option>
            </select>
            <span className='text'>Per page</span>

          </div>
          <div className="data-table-select">
            <input
              className="form-control"
              placeholder="Search"
              type="text"
              onChange={(e) => setSearchText(e.target.value)}
            />

          </div>
        </div>
      </div>
      <DataTable
        columns={columns}
        data={tableData}
        customStyles={customStyles}
        className={tableClassName}
        persistTableHead
        sortIcon={
          <div className="data-table-sorter"></div>
        }
        conditionalRowStyles={conditionalRowStyles}
        pagination
        expandableRowsComponent={expandedComponent}
        expandableRows={mobileView}
        selectableRows={selectableRows}
        selectableRowsComponent={customCheckbox}
        paginationComponent={({ rowsPerPage, rowCount, onChangePage, onChangeRowsPerPage, currentPage }) => (
          <div className="data-table-bottom">
            <DataTablePagination
              showItemPerPage={showItemPerPage}
              itemPerPage={rowsPerPage}
              totalItems={rowCount}
              paginate={onChangePage}
              currentPage={currentPage}
              onChangeRowsPerPage={onChangeRowsPerPage}
              setShowItemPerPage={setShowItemPerPage}
            />
          </div>
        )}
      />
    </div>
  )
}

export default DataTableComponent;
