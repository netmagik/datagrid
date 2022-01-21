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
            <h1>DataGrid Demo Data</h1>
            <DataGrid {...data} />
            </div>
    )
}