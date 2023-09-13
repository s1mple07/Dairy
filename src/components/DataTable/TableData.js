import { Icon, } from "../../components";
import { Badge, Button } from "react-bootstrap";
import React, { useState, useEffect } from 'react';
const buttonStyle = {
  padding: '0.7px 7px ',
  fontSize: '10px',
  lineHeight: '1',
};


const ActionButtons = ({ handleCell, row }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <div style={{
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Button className="mx-1" style={buttonStyle} variant="success" onClick={() => handleCell(row)}><Icon name="pen2"></Icon></Button>
      <Button className="mx-1" style={buttonStyle} variant="success" onClick={() => handleCell(row)}><Icon name="user-round"></Icon></Button>
    </div>
  );
}

export const plantsColumn = [
  {
    name: "#",
    cell: (row) => row.id,
    center: true
  },
  {
    name: "Company",
    cell: (row) => row.company,
    center: true
  },
  {
    name: "Plant Number",
    cell: (row) => row.plantnum,
    center: true
  },
  {
    name: "Plant Name",
    cell: (row) => row.plantname,
    center: true
  },
]

export const plantsData = [
  {
    id: 1,
    company: "1-ASM DAIRY FOODS",
    plantnum: '02345-98765/A',
    plantname: 'AVANISIPALAYAM'
  },

]

export const fatRate = (handleCell, totalRows) => [
  {
    name: "Start",
    selector: (row) => row.start,
    sortable: true,
    center: true,
    maxWidth: '250px',

  },
  {
    name: "End",
    selector: (row) => row.end,
    sortable: true,
    center: true,
    maxWidth: '250px',
  },
  {
    name: "Price",
    selector: row => parseFloat(row.price).toFixed(2),
    sortable: true,
    center: true,
    maxWidth: '250px',
  },

  {
    name: "Action",
    center: true,
    maxWidth: '220px',
    cell: (row, rowIndex) => {
      if (rowIndex === totalRows - 1) {
        return (
          <Button
            className="mx-1"
            style={buttonStyle}
            variant="danger"
            onClick={() => handleCell(row.start)}
          >
            <Icon name="cross"></Icon>
          </Button>
        );
      }
      return null; // or return some default content for other rows
    },
    sortable: false,
    hide: "md",
  }
]
export const fat = (handleCell, totalRows) => [
  {
    name: "Start",
    selector: (row) => row.start,
    sortable: true,
    center: true,
    maxWidth: '250px',

  },
  {
    name: "End",
    selector: (row) => row.end,
    sortable: true,
    center: true,
    maxWidth: '250px',
  },


  {
    name: "Action",
    center: true,
    maxWidth: '220px',
    cell: (row, rowIndex) => {
      if (rowIndex === totalRows - 1) {
        return (
          <Button
            className="mx-1"
            style={buttonStyle}
            variant="danger"
            onClick={() => handleCell(row.start)}
          >
            <Icon name="cross"></Icon>
          </Button>
        );
      }
      return null; // or return some default content for other rows
    },
    sortable: false,
    hide: "md",
  }
]

export const tableColumns = [
  {
    name: "Name",
    selector: (row) => row.name,
    sortable: true,
  },
  {
    name: "Age",
    selector: (row) => row.age,
    sortable: true,
  },
  {
    name: "Position",
    selector: (row) => row.position,
    sortable: true,
  },
  {
    name: "Company",
    selector: (row) => row.company,
    sortable: true,
  },
  {
    name: "Start Date",
    selector: (row) => row.startDate,
    sortable: true,
  },
  {
    name: "Salary",
    selector: (row) => row.salary,
    sortable: true,
  },

];

const filterInputStyle = {
  width: '95%',
  padding: '5px',
  border: '1px solid #ccc',
  borderRadius: '4px',
  fontSize: '11px'
};

export const vehicleColumn = [
  {
    name: '#',
    selector: (row) => row.id,
    sortable: true,
    center: true,
    maxWidth: '30px',
  },
  {
    name: 'Transporter',
    selector: (row) => row.transporter,
    sortable: true,
    center: true,

  },
  {
    name: 'vehicle Registration Number',
    selector: (row) => row.regnum,
    sortable: true,
    center: true,

  },
  {
    name: 'Driver Name',
    selector: (row) => row.drivname,
    sortable: true,
    center: true,

  },
  {
    name: 'Driver Mobile',
    selector: (row) => row.drivmob,
    sortable: true,
    center: true,

  },
  {
    name: "action",
    center: true,
    maxWidth: '50px',
    // cell: (row) => <ActionButtons handleCell={handleCell} row={row} />,
    sortable: false,
    hide: "md",
  },
]

export const vehicleData = [
  {
    id: 1,
    transporter: "keyn",
    regnum: "MH 143",
    drivname: "keyn",
    drivMob: 999990090
  },

]

export const inChargeColumn = [
  {
    name: 'Incharge Name',
  }
]



export const vlccColumn = (handleCell, showFilters, handleFilterChange) => [

  {
    name: "#",
    selector: (row) => row.id,
    sortable: true,
    center: true,
    maxWidth: '30px',
  },
  {
    name: showFilters
      ? <input
        type="text"
        placeholder="CC"
        style={filterInputStyle}
        onChange={(e) => handleFilterChange('cc', e.target.value)}
      />
      : "cc",
    selector: (row) => row.cc,
    sortable: !showFilters,
    center: true,
    maxWidth: '200px',

  },
  {
    name: showFilters
      ? <input
        type="text"
        placeholder="Route"
        style={filterInputStyle}
        onChange={(e) => handleFilterChange('route', e.target.value)}
      />
      : "Route",
    selector: (row) => row.route,
    sortable: true,
    center: true
  },
  {
    name: showFilters
      ? <input
        type="text"
        placeholder="Center"
        style={filterInputStyle}
        onChange={(e) => handleFilterChange('Center', e.target.value)}
      />
      : "Center",
    selector: (row) => row.center,
    sortable: true,
    center: true,
    width: "140px"
  },
  {
    name: showFilters
      ? <input
        type="text"
        placeholder="Number"
        style={filterInputStyle}
        onChange={(e) => handleFilterChange('Number', e.target.value)}
      />
      : "Number",
    selector: (row) => row.number,
    sortable: true,
    center: true,
    width: '100px'
  },
  {
    name: showFilters
      ? <input
        type="text"
        placeholder="Name"
        style={filterInputStyle}
        onChange={(e) => handleFilterChange('Name', e.target.value)}
      />
      : "Name",
    selector: (row) => row.name,
    sortable: true,
    center: true
  },
  {
    name: "Farmer App",
    selector: (row) => row.farmer === "no" ? (<Badge bg="warning">No</Badge>) : (<Badge bg="success">Yes</Badge>),
    center: true,

  },
  {
    name: "Status",
    selector: "status",
    cell: (row) => row.status === false ? (<Button className=" mx-1" style={buttonStyle} variant="danger" onClick={() => handleCell(row)}><Icon name="cross"></Icon></Button>) :
      (<Button className=" mx-1" style={buttonStyle} variant="success" onClick={() => handleCell(row)}><Icon name="check"></Icon></Button>),
    center: true,
    maxWidth: '25px',


  },
  {
    name: "action",
    center: true,
    maxWidth: '50px',
    cell: (row) => <ActionButtons handleCell={handleCell} row={row} />,
    sortable: false,
    hide: "md",
  },

]
export const plantcolumn = (handleCell, showFilters, handleFilterChange) => [

  {
    name: "#",
    selector: (row) => row.id,
    sortable: true,
    center: true,
    maxWidth: '30px',
  },
  {
    name: showFilters
      ? <input
        type="text"
        placeholder="Company"
        style={filterInputStyle}
        onChange={(e) => handleFilterChange('Company', e.target.value)}
      />
      : "Company",
    selector: (row) => row.company,
    sortable: !showFilters,
    center: true,


  },
  {
    name: showFilters
      ? <input
        type="text"
        placeholder="Plant Number"
        style={filterInputStyle}
        onChange={(e) => handleFilterChange('Plant Number', e.target.value)}
      />
      : "Plant Number",
    selector: (row) => row.plantnum,
    sortable: true,
    center: true
  },
  {
    name: showFilters
      ? <input
        type="text"
        placeholder="plant Name"
        style={filterInputStyle}
        onChange={(e) => handleFilterChange('Plant Name', e.target.value)}
      />
      : "Plant Name",
    selector: (row) => row.plantname,
    sortable: true,
    center: true,
    width: "140px"
  },

  {
    name: "action",
    center: true,
    maxWidth: '50px',
    cell: (row) => <ActionButtons handleCell={handleCell} row={row} />,
    sortable: false,
    hide: "md",
  },

]

export const vlccData = [
  {
    id: 1,
    cc: '1-AVANISIPALAYAM',
    route: '1-AVANISIPALAYAM',
    center: '102-New Centre',
    number: 995,
    name: "Hari",
    farmer: "no",
    status: true
  },
  {
    id: 2,
    cc: '1-EAVANISIPALAAM',
    route: 'SALEM',
    center: '102-New Centre',
    number: 995,
    name: "Hari",
    farmer: "no",
    status: true,

  },
  {
    id: 3,
    cc: '1-EAVANISIPALAAM',
    route: 'NAMAKKAL',
    center: '102-New Centre',
    number: 995,
    name: "Hari",
    farmer: "no",
    status: true
  },
  {
    id: 4,
    cc: '1-EAVANISIPALYM',
    route: 'TRICHENGODE',
    center: '102-New Centre',
    number: 995,
    name: "Hari",
    farmer: "no",
    status: true
  },
  {
    id: 5,
    cc: '1-CAVANISIPALAYM',
    route: '1-AVANISIPALAYAM',
    center: '102-New Centre',
    number: 995,
    name: "Hari",
    farmer: "no",
    status: true
  },
  {
    id: 7,
    cc: '1-CAVANISIPALAYM',
    route: '1-AVANISIPALAYAM',
    center: '102-New Centre',
    number: 995,
    name: "Hari",
    farmer: "no",
    status: true
  },
  {
    id: 8,
    cc: '1-CAVANISPALAYM',
    route: '1-AVANISIPALAYAM',
    center: '102-New Centre',
    number: 995,
    name: "Hari",
    farmer: "no",
    status: true
  },
  {
    id: 9,
    cc: '1-AVANISIPALAYAM',
    route: '1-AVANISIPALAYAM',
    center: '102-New Centre',
    number: 995,
    name: "Hari",
    farmer: "no",
    status: true
  },
  {
    id: 10,
    cc: '1-AVANISIPALAYAM',
    route: '1-AVANISIPALAYAM',
    center: '102-New Centre',
    number: 995,
    name: "Hari",
    farmer: "no",
    status: true
  },
  {
    id: 11,
    cc: '1-AVANISIPALAYAM',
    route: '1-AVANISIPALAYAM',
    center: '102-New Centre',
    number: 995,
    name: "Hari",
    farmer: "no",
    status: true
  },
  {
    id: 12,
    cc: '1-AVANISIPALAYAM',
    route: '1-AVANISIPALAYAM',
    center: '102-New Centre',
    number: 995,
    name: "Hari",
    farmer: "no",
    status: true
  },
  {
    id: 13,
    cc: '1-AVANISIPALAYAM',
    route: '1-AVANISIPALAYAM',
    center: '102-New Centre',
    number: 995,
    name: "Hari",
    farmer: "no",
    status: true
  },
  {
    id: 14,
    cc: '1-AVANISIPALAYAM',
    route: '1-AVANISIPALAYAM',
    center: '102-New Centre',
    number: 995,
    name: "Hari",
    farmer: "no",
    status: true
  },
  {
    id: 15,
    cc: '1-AVANISIPALAYAM',
    route: '1-AVANISIPALAYAM',
    center: '102-New Centre',
    number: 995,
    name: "Hari",
    farmer: "no",
    status: true
  },
  {
    id: 16,
    cc: '1-AVANISIPALAYAM',
    route: '1-AVANISIPALAYAM',
    center: '102-New Centre',
    number: 995,
    name: "Hari",
    farmer: "no",
    status: true
  },
  {
    id: 17,
    cc: '1-AVANISIPALAYAM',
    route: '1-AVANISIPALAYAM',
    center: '102-New Centre',
    number: 995,
    name: "Hari",
    farmer: "no",
    status: true
  },
  {
    id: 18,
    cc: '1-AVANISIPALAYAM',
    route: '1-AVANISIPALAYAM',
    center: '102-New Centre',
    number: 995,
    name: "Hari",
    farmer: "no",
    status: true
  },
  {
    id: 19,
    cc: '1-AVANISIPALAYAM',
    route: '1-AVANISIPALAYAM',
    center: '102-New Centre',
    number: 995,
    name: "Hari",
    farmer: "no",
    status: true
  },
  {
    id: 20,
    cc: '1-AVANISIPALAYAM',
    route: '1-AVANISIPALAYAM',
    center: '102-New Centre',
    number: 995,
    name: "Hari",
    farmer: "no",
    status: true
  },
  {
    id: 21,
    cc: '1-AVANISIPALAYAM',
    route: '1-AVANISIPALAYAM',
    center: '102-New Centre',
    number: 995,
    name: "Hari",
    farmer: "no",
    status: true
  },
  {
    id: 22,
    cc: '1-AVANISIPALAYAM',
    route: '1-AVANISIPALAYAM',
    center: '102-New Centre',
    number: 995,
    name: "Hari",
    farmer: "no",
    status: true
  },
  {
    id: 23,
    cc: '1-AVANISIPALAYAM',
    route: '1-AVANISIPALAYAM',
    center: '102-New Centre',
    number: 995,
    name: "Hari",
    farmer: "no",
    status: true
  },
  {
    id: 24,
    cc: '1-AVANISIPALAYAM',
    route: '1-AVANISIPALAYAM',
    center: '102-New Centre',
    number: 995,
    name: "Hari",
    farmer: "no",
    status: true
  },
  {
    id: 25,
    cc: '1-AVANISIPALAYAM',
    route: '1-AVANISIPALAYAM',
    center: '102-New Centre',
    number: 995,
    name: "Hari",
    farmer: "no",
    status: true
  }
]

export const tableData = [
  {
    id: 0,
    name: "Francine Kirby",
    age: 24,
    position: "System Architect",
    company: "BUZZWORKS",
    startDate: "2017-02-17",
    salary: "$2,570.39",
  },
  {
    id: 1,
    name: "Reva Best",
    age: 40,
    position: "Accountant",
    company: "MARQET",
    startDate: "2021-10-14",
    salary: "$1,488.76",
  },
  {
    id: 2,
    name: "Alexis Flores",
    age: 21,
    position: "Junior Technical Author",
    company: "OBONES",
    startDate: "2020-04-28",
    salary: "$1,336.93",
  },
  {
    id: 3,
    name: "Nixon Sullivan",
    age: 30,
    position: "Senior Javascript Developer",
    company: "SLUMBERIA",
    startDate: "2016-10-08",
    salary: "$2,156.70",
  },
  {
    id: 4,
    name: "Foreman Wooten",
    age: 20,
    position: "Accountant",
    company: "ESCENTA",
    startDate: "2018-07-12",
    salary: "$3,057.42",
  },
  {
    id: 5,
    name: "Franco Davis",
    age: 28,
    position: "Integration Specialist",
    company: "ZILLACON",
    startDate: "2015-10-08",
    salary: "$2,730.88",
  },
  {
    id: 6,
    name: "Bullock Kline",
    age: 32,
    position: "Sales Assistant",
    company: "SAVVY",
    startDate: "2017-07-03",
    salary: "$2,986.05",
  },
  {
    id: 7,
    name: "Baird Coffey",
    age: 36,
    position: "Integration Specialist",
    company: "BLEENDOT",
    startDate: "2014-01-27",
    salary: "$2,755.80",
  },
  {
    id: 8,
    name: "Eula Walters",
    age: 40,
    position: "Integration Specialist",
    company: "UXMOX",
    startDate: "2020-09-19",
    salary: "$3,302.75",
  },
  {
    id: 9,
    name: "Gaines Moss",
    age: 26,
    position: "Javascript Developer",
    company: "INCUBUS",
    startDate: "2017-10-13",
    salary: "$3,856.24",
  },
  {
    id: 10,
    name: "Sargent Winters",
    age: 28,
    position: "Software Engineer",
    company: "AUSTEX",
    startDate: "2020-12-26",
    salary: "$3,668.64",
  },
  {
    id: 11,
    name: "Sybil Patton",
    age: 35,
    position: "Office Manager",
    company: "ZILIDIUM",
    startDate: "2020-06-19",
    salary: "$1,987.14",
  },
  {
    id: 12,
    name: "Henderson Elliott",
    age: 39,
    position: "Software Engineer",
    company: "ZOARERE",
    startDate: "2016-08-16",
    salary: "$1,795.31",
  },
  {
    id: 13,
    name: "Combs Irwin",
    age: 33,
    position: "Office Manager",
    company: "COLAIRE",
    startDate: "2017-07-19",
    salary: "$2,396.73",
  },
  {
    id: 14,
    name: "Fleming Buchanan",
    age: 33,
    position: "Office Manager",
    company: "WEBIOTIC",
    startDate: "2021-09-12",
    salary: "$3,406.96",
  },
  {
    id: 15,
    name: "Mcbride Dixon",
    age: 25,
    position: "Office Manager",
    company: "ZBOO",
    startDate: "2017-12-08",
    salary: "$1,065.32",
  },
  {
    id: 16,
    name: "Nettie Greer",
    age: 32,
    position: "Office Manager",
    company: "QUONK",
    startDate: "2014-03-15",
    salary: "$1,558.83",
  },
  {
    id: 17,
    name: "Anita Saunders",
    age: 39,
    position: "Office Manager",
    company: "IDEALIS",
    startDate: "2015-07-31",
    salary: "$1,848.84",
  },
  {
    id: 18,
    name: "Darcy Mcclain",
    age: 24,
    position: "Software Engineer",
    company: "DIGIGEN",
    startDate: "2020-02-19",
    salary: "$3,382.78",
  },
  {
    id: 19,
    name: "Jodi Knowles",
    age: 32,
    position: "Software Engineer",
    company: "KONGENE",
    startDate: "2014-03-09",
    salary: "$1,668.05",
  },
  {
    id: 20,
    name: "Cathleen Schroeder",
    age: 21,
    position: "Software Engineer",
    company: "TROPOLIS",
    startDate: "2014-09-28",
    salary: "$2,730.21",
  },
  {
    id: 21,
    name: "Lea Fitzgerald",
    age: 24,
    position: "Software Engineer",
    company: "AVENETRO",
    startDate: "2015-08-17",
    salary: "$2,547.85",
  },
  {
    id: 22,
    name: "Pitts Graham",
    age: 20,
    position: "Office Manager",
    company: "MALATHION",
    startDate: "2020-05-08",
    salary: "$3,538.05",
  },
];
