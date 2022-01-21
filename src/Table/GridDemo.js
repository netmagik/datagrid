import React from "react";
import { useDemoData } from "@mui/x-data-grid-generator";
import {DataGrid} from '@mui/x-data-grid';

export default function GridDemo() {

    const {data} = useDemoData({
        dataSet: 'Commodity',
        rowLength: 1000,
        maxColumns: 8,
    });

    return (
        <div style={{ height: 500, width: '90%'}}>
            <h1>DataGrid <a href="https://mui.com/api/data-grid/data-grid/">Demo</a></h1>
            <p style={{textAlign: 'center', fontSize: '1.4rem', margin: '30px'}}>
            Example of using <a href="https://mui.com/api/data-grid/data-grid/">React DataGrid</a> with Fake Data from <a href="https://www.npmjs.com/package/@material-ui/x-grid-data-generator">X-Grid-Data-Generator</a>
        </p>
            <DataGrid {...data} />
            </div>
    )
}