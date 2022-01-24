import React from "react";
import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav>
            <Link to="/datagrid">Home</Link>
            <Link to="/datagrid/datatable">DataTable</Link>
            <Link to="/datagrid/phototable">PhotoTable</Link>
            <Link to="/datagrid/griddemo">GridDemo</Link>
        </nav>
    );
};

export default Nav;