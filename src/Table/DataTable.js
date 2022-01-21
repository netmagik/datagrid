import React, {useState, useEffect} from 'react';
import {DataGrid} from '@mui/x-data-grid';

const DataTable = () => {
    const [tableData, setTableData] = useState([]);

    const columns = [
        { field: 'id', 
            headerName: 'ID', 
            headerAlign: 'center',
            headerClassName: 'header-class',
            width: 50,
            editable: true
        },
        { field: 'title', 
            headerName: 'Title', 
            width: 300, 
            headerAlign: 'center',
            headerClassName: 'header-class',
            editable: true
        },
        { field: 'body', 
            headerName: 'Body', 
            width: 800,
            headerAlign: 'center',
            headerClassName: 'header-class',
            editable: true
        },
    ];

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(data => data.json())
            .then(data => setTableData(data))
            .catch(error => console.log(error));
    }, []);
    
    // console.log(tableData);

    return (
        <div style={{height: 500, width: '90%'}}>
            <h1>DataGrid</h1>
            <p style={{textAlign: 'center', fontSize: '1.4rem', margin: '30px'}}>
            Example of using <a href="https://mui.com/api/data-grid/data-grid/">React DataGrid</a> with Fake Data from <a href="https://jsonplaceholder.typicode.com/">JSON Placeholder</a>
        </p>
            <DataGrid 
            rows={tableData}
            columns={columns}
         
            sx={{boxShadow: 2,
                border: 1,
                borderRadius: 2,
                p: 3}}
            />
        </div>
    );
}

export default DataTable;